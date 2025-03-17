'use client'

import { useState } from "react"
import { authClient } from "../lib/authClient"
import { toast, ToastContainer } from "react-toastify"
import { redirect } from "next/navigation"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [pending, setPending] = useState(false)

    const signupHandler = async () => {
        await authClient.signUp.email(
            {
                email,
                password,
                name,
                callbackURL: "/"
            },
            {
                onRequest: () => {
                    setPending(true)
                },
                onSuccess: () => {
                    redirect('/signupsuccess')
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message)
                }
            },
        )
        setPending(false)
    }
    return <div className="flex justify-center py-20">
        <ToastContainer/>
        <form 
            action={signupHandler}
            className="flex flex-col gap-1 w-72 border-t border-t-gray-100 shadow-md shadow-gray-300 p-7 rounded-lg"
        >
            <h1 className="font-semibold text-xl mb-3">Sign up to <span className="text-blue-500">Murag-Twitter</span></h1>
            <label htmlFor="email" className="text-gray-800">Email</label>
            <input 
                type="email"
                className="border-t border-t-gray-100 shadow-sm shadow-gray-300 rounded-sm p-2 outline-none"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="password" className="text-gray-800">Password</label>
            <input 
                type="password"
                className="border-t border-t-gray-100 shadow-sm shadow-gray-300 rounded-sm p-2 outline-none"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <label htmlFor="name" className="text-gray-800">name</label>
            <input 
                type="text"
                className="border-t border-t-gray-100 shadow-sm shadow-gray-300 rounded-sm p-2 outline-none"
                placeholder="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <div className="p-2">
            </div>
            <button className="button p-2 border rounded-sm flex justify-center bg-blue-500 text-white cursor-pointer hover:bg-blue-400 duration-200 ">
                {
                    pending ?
                        <div className="w-6 h-6 rounded-full border-4 border-gray-500 border-t-white animate-spin"></div> :
                        <p className="text-md">Sign up</p>
                }
            </button>
        </form>
    </div>
}

export default Signup