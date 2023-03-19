import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from './Container';
import ThreadBuild from './ThreadBuild'

const Dashboard = ({data}) => {
    console.log(data);
    const Assets = data.assets
       return (
        <div className='w-5/6 mb-16 mx-auto my-3 mt-24 px-2'>
            <div className="flex justify-between items-center">
                <h1 className='text-blue-700 text-3xl font-extrabold'>Technical Project Management</h1>
                <button className='bg-blue-500 text-white rounded-xl p-2 px-3'>Submit task</button>
            </div>
            <div className='bg-gray-100 h-28 rounded-xl my-12 px-5 py-3'>
                <h1 className='font-bold text-xl'>{data.task_title}</h1>
                <p className='mt-2'>{data.task_description}</p>
            </div>
            <div className="flex flex-wrap  gap-16 justify-center">
           {Assets?.map((asset)=>{
            return(
                <div className="w-5/12 h-auto rounded-xl shadow-2xl">
                <div className="flex justify-center items-center bg-black w-full h-10 rounded-t-xl">
                    <h1 className='text-white'>{asset.asset_title}</h1>
                </div>
                <h1 className='mx-3 mt-5'><span className='font-bold'>Description:</span> {asset.asset_description}
                </h1>
                
                <Container data={asset} />
            </div>
            )
           })}
                {/* <div className="w-5/12 h-auto rounded-xl shadow-2xl overflow-y-scroll">
                    <div className="flex justify-center items-center bg-black w-full h-10 rounded-t-xl ">
                        <h1 className='text-white'>Threadbuild</h1>
                    </div>
                    <h1 className='mx-3 mt-5'><span className='font-bold'>Description:</span> Watch the video and thread build, and jot out key threads while watching that video.
                    </h1>
            
            

                </div>
                <div className="w-5/12 h-auto rounded-xl shadow-2xl">
                    <div className="flex justify-center items-center bg-black w-full h-10 rounded-t-xl">
                        <h1 className='text-white'>Structure You Pointers</h1>
                    </div>
                </div>
                <div className="w-5/12 h-auto rounded-xl shadow-2xl">
                    <div className="flex justify-center items-center bg-black w-full h-10 rounded-t-xl">
                        <h1 className='text-white'>4SA Method</h1>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard