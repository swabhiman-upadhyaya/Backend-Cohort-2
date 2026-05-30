import dotenv from "dotenv"
dotenv.config();

import { PDFParse } from "pdf-parse";
import fs from "fs"

import { RecursiveCharacterTextSplitter } from "@langchain/textSplitters"
import { MistralAIEmbeddings } from "@langchain/mistralai"
import { Pinecone } from "@pinecone-database/pinecone";

/* SETTING UP -PC- TO STORE THE EMBEDDINGS IN VECTORE STORE(PINECONE) */
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index("cohort2-rag")

/* EXTRACTING DATA FROM PDF FILE */
let dataBuffer = fs.readFileSync("./story.pdf")

const parser = new PDFParse({
  data: dataBuffer
})

const data = await parser.getText();

/* CONVERT INTO EMBEDDINGS OR CO-ORDINATES */
const embeddings = new MistralAIEmbeddings({
  apiKey: process.env.MISTRAL_API_KEY,
  model: "mistral-embed"
})

/* DIVIDING THE PAGES INTO CHUNKS */

// const splitter = new RecursiveCharacterTextSplitter({
//   chunkSize: 500,
//   chunkOverlap: 0,
// })

// const chunks = await splitter.splitText(data.text)


// const docs = await Promise.all(chunks.map(async (chunk) => {
//   const embedding = await embeddings.embedQuery(chunk)
//   return {
//     text: chunk,
//     embedding
//   }
// }))



// const result = await index.upsert({
//   records: docs.map((doc, i) => ({
//     id: `doc-${i}`,
//     values: doc.embedding,
//     metadata: {
//       text: doc.text
//     }
//   }))
// })

const queryEmbedding = await embeddings.embedQuery("What is the story about?")

const result = await index.query({
  vector: queryEmbedding,
  topK: 2,
  includeMetadata: true
})

console.log(JSON.stringify(result))