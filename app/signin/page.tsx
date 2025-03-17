'use client'

import { useState } from "react"
import { authClient } from "../lib/authClient"
import { toast, ToastContainer } from "react-toastify"
import { redirect } from "next/navigation"
import GoogleSigninButton from "../components/googleSigninButton"
import SignupButton from "../components/signupButton"

const Signin = () => {
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [pending, setPending] = useState(false)

    const signinHandler = async () => {
        if(!email || !password) return

        await authClient.signIn.email({
            email,
            password,
            callbackURL: '/',
            rememberMe: true
        },{
            onRequest: () => {
                setPending(true)
            },
            onSuccess: () => {
                redirect('/')
            },
            onError: (ctx) => {
                toast.error(ctx.error.message)
            }
        })

        setPending(false)
    }
    return <div className="flex flex-col md:flex-row py-20 items-center">
        <ToastContainer/>
        <div className="flex justify-center items-center w-full">
            <h1 className="text-5xl font-bold text-center">Murag-Twitter</h1>
        </div>
        <form 
            action={signinHandler}
            className="flex flex-col gap-1 w-120 p-7 mr-0 md:mr-10"
        >
            <h1 className="font-bold text-3xl mb-3">Welcome bossing.</h1>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                className="border border-gray-500 rounded-sm p-2 outline-none"
                placeholder="Email"
                id="email"
                value={email ?? ''}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                className="border border-gray-500 rounded-sm p-2 outline-none"
                placeholder="Password"
                id="password"
                value={password ?? ''}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button className="flex justify-center mt-2 rounded-full border border-blue-200 py-2 cursor-pointer hover:bg-blue-950/50 duration-200 ">
                {
                    pending ?
                        <div className="w-6 h-6 rounded-full border-4 border-gray-500 border-t-white animate-spin"></div> :
                        <p className="text-md font-bold text-blue-500">Sign in</p>
                }
            </button>
            <div className="flex items-center gap-4">
                <div className="border border-gray-700 w-full h-0"/>
                <p>or</p>
                <div className="border border-gray-700 w-full h-0"/>
            </div>
            <GoogleSigninButton/>
            <h2 className="mt-20">No account yet?</h2>
            <SignupButton/>
        </form>
    </div>
}

export default Signin