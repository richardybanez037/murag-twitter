'use server'
import { client } from "./mongoClient"

export const connectClient = async () => {
    await client.connect()
}

export const closeClient = async () => {
    await client.close()
}