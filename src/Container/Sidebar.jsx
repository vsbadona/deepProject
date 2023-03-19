import React, { useState } from 'react'

const Sidebar = () => {
    const [nav,setNav]=useState(false)
  return (
   <div className={`${nav?"w-96" : "w-32"} shadow-2xl rounded-r-xl h-[calc(100vh-85px)] bg-white top-20 fixed`}>
   <div className="h-12 bg-black rounded-tr-xl flex justify-between px-5 items-center">
    <h1 className={` ${!nav ? "invisible" : "visible"} text-white font-sans `}>Journey Board</h1>
    <button className='' onClick={()=>setNav(!nav)}><i className={`fa fa-arrow-right bg-white rounded-full p-1`}></i></button>
   </div>
   {!nav ? <button className='w-14 h-14 rounded-xl bg-blue-500 text-white text-2xl mx-8 my-12' >1</button>:<div className='flex flex-col items-center justify-center px-5'>
    <ul className='list-disc'>
        <li className='font-semibold my-5'>Explore the world of management</li>
        <li>Technical Project Management</li>
        <li>Threadbuild</li>
        <li>Structure you pointers</li>
        <li>4SA Method</li>
    </ul>
    </div>}
   </div>
  )
}

export default Sidebar