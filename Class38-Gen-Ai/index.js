import readline from "readline/promises"
import "dotenv/config"
import { ChatMistralAI } from "@langchain/mistralai"
import { HumanMessage, tool, createAgent } from "langchain"
import { sendEmail } from "./mail.services.js"
import * as z from "zod"

/* Here we're creating an instance of the tool which accepts the function which is performing the major role and
  and an object with it's name, desc & Schema in which we'll give the params which (sendEmail) function expects */
const emailTool = tool(
  sendEmail,
  {
    name: "emailTool",
    description: "Use this tool to send an email",
    schema: z.object({
      to: z.string().describe("The recipient's email address"),
      html: z.string().describe("The HTML content of the email"),
      subject: z.string().describe("The subject of the email")
    })
  }
)

// To take the input from the user in terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// initializing the model 
const model = new ChatMistralAI({
  model: "mistral-small-latest"
})

// creting the agent which will connects the LLM/model with the tool
const agent = createAgent({
  model,
  tools: [emailTool]
})

const messages = []

async function main() {
  while (true) {
    const userInput = await rl.question("You: ")

    messages.push(new HumanMessage(userInput)); // at first storing the user input as HumanMessage

    if (userInput.toLowerCase() === "exit") {
      rl.close()
      break
    }

    const response = await agent.invoke({
      messages
    })

    /* Here as the response is an object with a messages array, we push the last message of (AI's response) to our messages array */
    messages.push(response.messages[response.messages.length - 1]) 

    console.log("AI:", response.messages[response.messages.length - 1].content) // use content instead of text
  }
}

main()