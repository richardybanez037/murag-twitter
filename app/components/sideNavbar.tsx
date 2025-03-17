const SideNavbar = () => {
    return <div className="h-screen sm:w-[300px] flex flex-col py-2 sm:p-2 border-r border-gray-500">
    <div className="grow overflow-y-auto overflow-x-hidden flex flex-col items-center sm:items-start">
      <h1 className="text-3xl font-bold px-4 hidden sm:block mb-4">Murag-Twitter</h1>
      <h1 className="text-3xl font-bold px-4 sm:hidden mb-4">M</h1>
      <button className="flex items-center cursor-pointer hover:bg-white/10 duration-200 h-15 w-fit p-4 rounded-full">
        <img src="/home.svg" className="w-8"/>
        <h1 className="text-xl px-4 font-semibold hidden sm:block">Home</h1>
      </button>
      <button className="flex items-center cursor-pointer hover:bg-white/10 duration-200 h-15 w-fit p-4 rounded-full">
        <img src="/search.svg" className="w-8"/>
        <h1 className="text-xl px-4 font-semibold hidden sm:block">Explore</h1>
      </button>
      <button className="flex items-center cursor-pointer hover:bg-white/10 duration-200 h-15 w-fit p-4 rounded-full">
        <img src="/bell.svg" className="w-8"/>
        <h1 className="text-xl px-4 font-semibold hidden sm:block">Notifications</h1>
      </button>
      <button className="flex items-center cursor-pointer hover:bg-white/10 duration-200 h-15 w-fit p-4 rounded-full">
        <img src="/mail.svg" className="w-8 h-6"/>
        <h1 className="text-xl px-4 font-semibold hidden sm:block">Messages</h1>
      </button>

    </div>
    <button className="w-full flex gap-4 items-center rounded-full justify-between p-3 sm:pr-4 my-2 cursor-pointer hover:bg-white/10 duration-200">
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 rounded-full bg-violet-400 flex justify-center items-center text-lg text-white font-bold">R</div>
        <h1 className="font-bold hidden sm:block">Richard Ybañez</h1>
      </div>
      <img src="/ellipsis.svg" className="w-4 hidden sm:block"/>
    </button>
  </div>
}

export default SideNavbar