import React from 'react'

const Navbar = () => {
    const icon = [
        {
            icon : "fa fa-home bg-blue-500 rounded-full p-2",
            id : "1"
        },
        {
            icon : "fa-solid fa-binoculars bg-blue-500 rounded-full p-2",
            id : "2"
        },{
            icon : "fa fa-home bg-blue-500 rounded-full p-2",
            id : "3"
        },{
            icon : "fa-solid fa-screwdriver-wrench bg-blue-500 rounded-full p-2",
            id : "4"
        },{
            icon : "fa-solid fa-bell bg-blue-500 rounded-full p-2",
            id : "5"
        },{
            icon : "fa-solid fa-user bg-blue-500 rounded-full p-2",
            id : "6"
        },
        {
            icon : "fa-solid fa-ellipsis-vertical bg-blue-500 rounded-full p-2",
            id : "7"
        },
    ]
    return (
        <div className='h-20 w-screen bg-gray-100 flex justify-between px-40 items-center fixed top-0'>
            <img src="https://deepthought.education/assets/images/logo/logo.svg" className='w-auto h-12' alt="" />
            <div className="flex justify-center items-center gap-5 text-lg">
               {icon.map((Icon)=>(
<i  style={{color : "white"}}className={Icon.icon} key={Icon.id}></i>
))}
            </div>
        </div>
    )
}

export default Navbar