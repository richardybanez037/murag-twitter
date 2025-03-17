'use server'

import { client } from "@/app/database/mongoClient"
import { Document, ObjectId } from "mongodb"
import { ILike } from "../../definitions"

export const allLikes = async (limit = 25) => {
    try{
        // await client.connect()
        const database = client.db('murag-twitter')
        const collection = database.collection('likes')

        const data: Document[] = await collection.find().limit(limit).toArray()
        const likes: ILike[] = data.map( l => ({
            _id: (l._id as ObjectId).toString(),
            user: (l.user as ObjectId).toString(),
            liked_by: (l.liked_by as ObjectId).toString(),
            post_id: (l.post_id as ObjectId).toString()
        }))

        return likes
    }
    catch(error){
        console.log("Error fetching likes: ", error)
    }
    // finally{
    //     await client.close()
    // }
}