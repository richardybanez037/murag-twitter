import { useState } from "react"
import { authClient } from "../lib/authClient"

const GoogleSigninButton = () => {
    const [pending, setPending] = useState<boolean>(false)

    const googleSigninHandler = async () => {
        setPending(true)
        await authClient.signIn.social({
            provider: "google"
        })
        setPending(false)
    }
    return <button 
        className="font-semibold bg-gray-100 text-black flex items-center justify-center rounded-full border border-blue-200 py-2 cursor-pointer"
        type="button"
        onClick={googleSigninHandler}
    >
        {
            pending ?
                <div className="w-6 h-6 rounded-full border-4 border-blue-500 border-t-white animate-spin"></div> :
                <div className="flex gap-3">
                    <img src="/google.svg" className="w-6" alt="Google logo"/>
                    Sign in with Google
                </div>
        }
    </button>
}

export default GoogleSigninButton