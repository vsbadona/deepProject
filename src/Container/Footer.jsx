import React from 'react'

const Footer = () => {
    const Icon = [
        {
            icon : "fa-solid fa-question"
        },
        {
            icon : "fa-solid fa-people-group"
        },
{
    icon : "fa-solid fa-calendar-days"
}
    ]

  return (
  <>
  <div className='fixed top-36 right-6 flex items-center'>
    <div className='flex flex-col bg-black rounded-l-xl w-8 h-72 py-5 text-white text-2xl'>
<i className="fa fa-add"></i>
<h1 className='break-all text-sm pl-2 w-4 xl  uppercase text-center pt-5'>Notice  Board</h1>
    </div>
  </div>
    <div className='fixed bottom-10 right-6 flex flex-col gap-2'>
        {Icon?.map((icon)=>(
            <button className='bg-blue-700 text-white rounded-full p-3 text-3xl'><i className={`${icon.icon}`}></i></button>
        ))}
    </div>
  </>
  )
}

export default Footer