import readline from "readline/promises"
import "dotenv/config"
import { ChatMistralAI } from "@langchain/mistralai"
import { HumanMessage } from "langchain"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const model = new ChatMistralAI({
  model: "mistral-small-latest"
})

const messages = []

async function main() {
  while (true) {
    const userInput = await rl.question("You: ")

    messages.push(new HumanMessage(userInput));

    if (userInput.toLowerCase() === "exit") {
      rl.close()
      break
    }

    const response = await model.invoke(messages)
    console.log("AI:", response.content) // use content instead of text
  }
}

main()