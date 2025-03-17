'use client'

import { redirect } from "next/navigation"

const SignupButton = () =>{
    return <button 
        className="text-blue-500 font-bold flex justify-center mt-2 rounded-full border border-blue-200 py-2 cursor-pointer hover:bg-blue-950/50 duration-200"
        type="button"
        onClick={() => redirect('/signup')}   
    >
        Sign up
    </button>
}

export default SignupButton