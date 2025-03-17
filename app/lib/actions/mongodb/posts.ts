'use server'

import { client } from "@/app/database/mongoClient"
import { Document, ObjectId } from "mongodb"
import { IPost } from "../../definitions"

export const allPosts = async (limit = 25) => {
    try{
        // await client.connect()
        const database = client.db('murag-twitter')
        const collection = database.collection('posts')

        const data: Document[] = await collection.find().limit(limit).toArray()
        const posts: IPost[] = data.map(d => ({
            _id: (d._id as ObjectId).toString(),
            posted_by: (d.posted_by as ObjectId).toString(),
            post_text: d.post_text
        }))

        return posts
    }
    catch(error){
        console.log("Error fetching posts: ", error)
    }
    // finally{
    //     await client.close()
    // }
}