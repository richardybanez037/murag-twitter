'use client'

import { useEffect, useRef } from "react"
import SideNavbar from "./components/sideNavbar"

export default function Home() {
  const postRef = useRef<HTMLTextAreaElement>(null)
  // const [users, setUsers] = useState<IUser[]>([])
  // const [posts, setPosts] = useState<IPost[]>([])
  // const [followers, setFollowers] = useState<IFollower[]>([])
  // const [likes, setLikes] = useState<ILike[]>([])

  // const [loadingFollowers, setLoadingFollowers] = useState(true)

  const adjustHeight = () => {
    if (postRef.current) {
      postRef.current.style.height = "28px"
      postRef.current.style.height = postRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    if(postRef.current)
      postRef.current.style.height = "28px"
    // const getUsersHandler = async () => { 
    //   await connectClient()
    //   const response1 = await allUsers()
    //   const response2 = await allPosts()
    //   const response3 = await allLikes()
    //   setUsers(response1 ?? [])
    //   setPosts(response2 ?? [])
    //   setLikes(response3 ?? [])
    //   setLoadingFollowers(true)
    //   const response4 = await allFollowers()
    //   setFollowers(response4 ?? [])
    //   setLoadingFollowers(false)
    //   await closeClient()
    // }

    // getUsersHandler()
  }, [])
  return <div className="flex">
    <SideNavbar/>
    <div className="grow flex">
      <div className="overflow-y-auto h-screen w-full">
        <div className="bg-gray-700 w-120">

        
          <div className="flex p-3">
            <div className="w-10 h-10 rounded-full bg-violet-400 flex justify-center items-center text-lg text-white font-bold">R</div>
            <div>
              <textarea 
                ref={postRef}
                className="test outline-none min-w-100 text-xl resize-none mt-1 ml-2" 
                placeholder="What's happening?"
                onInput={adjustHeight}
                maxLength={280}
              />
              <button>Everyone can reply</button>
              <hr/>
              <button>post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
