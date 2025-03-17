'use server'

import { client } from "@/app/database/mongoClient"
import { ObjectId, Document } from "mongodb"
import { IUser } from "../../definitions"

const database = client.db('murag-twitter')
const collection = database.collection('users')

export const allUsers = async (limit = 25) => {
    try{
        const data: Document[] = await collection.find().limit(limit).toArray()
        const users: IUser[] = data.map(d => ({
            _id: (d._id as ObjectId).toString(),
            name: d.name,
            email: d.email,
            password: d.password,
        }))
        return users
    }
    catch(error){
        console.error("Error fetching data: ", error)
        return null
    }
}

export const getPasswordByEmail = async (email: string): Promise<string|null> => {
    try{
        const user = await collection.findOne({ email });

        if (!user) return null;

        return user.password;
    }
    catch(err){
        console.error("Error fetch password by email: ", err)
        return null
    }
}