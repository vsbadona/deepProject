import React from 'react'

const Navbar = () => {
    return (
        <div className='h-20 w-screen bg-gray-100 flex justify-between px-40 items-center fixed top-0'>
            <img src="https://deepthought.education/assets/images/logo/logo.svg" className='w-auto h-12' alt="" />
            <div className="flex justify-center items-center gap-5 text-lg">
                <i style={{ color: "white" }} className="fa fa-home bg-blue-500 rounded-full p-2"></i>
                <i style={{ color: "white" }} className="fa-solid fa-binoculars bg-blue-500 rounded-full p-2"></i>
                <i style={{ color: "white" }} className="fa-solid fa-screwdriver-wrench bg-blue-500 rounded-full p-2"></i>
                <i style={{ color: "white" }} className="fa-solid fa-bell bg-blue-500 rounded-full p-2"></i>
                <i className="fa-solid fa-user"></i>
                <i style={{ color: "blue" }} className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    )
}

export default Navbar