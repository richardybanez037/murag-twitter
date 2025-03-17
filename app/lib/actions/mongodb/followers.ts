'use server'

import { client } from "@/app/database/mongoClient"
import { Document, ObjectId } from "mongodb"

export const allFollowers = async (limit = 25) => {
    try{
        // await client.connect()
        const database = client.db('murag-twitter')
        const collection = database.collection('followers')

        const data: Document[] = await collection.find().limit(limit).toArray()
        const followers = data.map( f => ({
            _id: (f._id as ObjectId).toString(),
            user: (f.user as ObjectId).toString(),
            followed_by: (f.followed_by as ObjectId).toString()
        }))

        return followers
    }
    catch(error){
        console.log("Error fetching followers: ", error)
    }
    // finally{
    //     await client.close()
    // }
}