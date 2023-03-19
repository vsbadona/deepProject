import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Container = ({ data }) => {
    const [value, setValue] = useState('');

    const [inputValues, setInputValues] = useState(['']);
    const [threadValue, setThreadValue] = useState([''])

    function handleAddInput() {
        setInputValues([...inputValues, '']);
    }
    function handleThreadInput() {
        setThreadValue([...threadValue, ''])
    }

    return (
        <>
{/* Video Box */}
            {data.asset_content_type === "video" && <iframe className='mt-10 mb-20' width="520" height="315" src="https://www.youtube.com/embed/TiMRwri1xJ8" title="Technological Project Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

{/* threadbuilder box */}

            {data.asset_content_type === "threadbuilder" && <div className='w-full overflow-y-scroll h-96'>
                {threadValue.map((_, index) => (
                    <div className='my-5'>
                        <div className='w-full h-8 bg-gray-100 my-3 shadow-2xl flex gap-14 items-center px-5 font-bold text-lg'>
                            <i className="fa fa-angle-up"></i>
                            <h1>Thread {String.fromCharCode(65 + index)}</h1>
                            {threadValue.length > 1 && <button className='ml-56' onClick={()=>threadValue.pop()}><i className="fa fa-trash float-right" ></i></button>
                            }
                        </div>
                        {inputValues.map((value, index) => (
                            <div className="flex justify-center gap-12 my-5">
                                <div>
                                    <div className='bg-gray-200 h-28 w-48 rounded-xl shadow-2xl '>
                                        <h1 className='px-3 text-sm'>Sub Thread {index + 1}</h1>
                                        <textarea type="text" className='h-20 w-48 rounded-b-xl rounded-t-2xl mt-2 pb-12 px-2 outline-none overflow-auto resize-none' placeholder='Enter Text Here' />
                                    </div>
                                    <div className="flex items-center justify-end gap-3 text-2xl my-3">
                                        <i style={{ color: "blue" }} class="fa-solid fa-lightbulb"></i>
                                        <i style={{ color: "blue" }} class="fa-solid fa-message"></i>
                                        <i style={{ color: "blue" }} class="fa-solid fa-question"></i>
                                        <i style={{ color: "blue" }} class="fa-solid fa-hand-holding-droplet"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className='bg-gray-200 h-28 w-48 rounded-xl shadow-2xl mx-auto'>
                                        <h1 className='px-3 text-sm'>Sub Interpretation {index + 1}</h1>
                                        <textarea type="text" className='h-20 resize-none w-48 rounded-b-xl rounded-t-2xl mt-2 pb-12 px-2 outline-none overflow-auto' placeholder='Enter Text Here' />
                                    </div>
                                    <div className="flex justify-between items-center w-full gap-2">
                                        <select name="" id="" className='rounded-lg border-none outline-none h-8 shadow-2xl w-28 px-3 text-sm'>
                                            <option value="">Select Category</option>
                                            <option value="Remark">Remark</option>
                                            <option value="Sub-argument">Sub-argument</option>
                                            <option value="Sub-explanation">Sub-explanation</option>
                                            <option value="Core-principle">Core-principle</option>
                                        </select>
                                        <select name="" id="" className='rounded-lg border-none outline-none h-8 shadow-2xl w-28 px-3 text-sm'>
                                            <option value="">Select Process</option>
                                            <option value="Question">Question</option>
                                            <option value="Analogy">Analogy</option>
                                            <option value="Sarcasm">Sarcasm</option>
                                            <option value="Insight">Insight</option>
                                            <option value="Counter-Example">Counter-Example</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <button className='bg-blue-700 mx-5 my-5 rounded-xl p-3 text-white' onClick={handleAddInput}><i className="fa fa-add"></i> Sub Thread</button>

                        <div className="w-11/12 mx-auto">
                            <div className='w-full  bg-gray-200 rounded-xl '>
                                <p className='px-3 py-1 text-sm'>Summary for Thread {String.fromCharCode(65 + index)}</p>
                                <textarea type="text" className='-mb-1 resize-none w-full rounded-b-xl rounded-t-2xl mt-2 pb-12 px-2 outline-none overflow-auto' placeholder='Enter Text Here' />    </div>
                        </div>
                        <div className="flex items-center justify-around my-4 bg-gray-50">
                            <button><i className="fa fa-paperclip"></i> Thread Credit <i style={{ color: "blue" }} className="fa fa-pen"></i></button>
                            <select name="" id="" className='shadow-2xl border-1 border-gray-200 bg-white h-8 rounded-lg'>
                                <option value="">Select Emotion</option>
                                <option value="Eureka Emphasis">Eureka Emphasis</option>
                                <option value="Blissfully Puzzled">Blissfully Puzzled</option>
                                <option value="Spritually Determined">Spritually Determined</option>
                                <option value="Upset & Motivated">Upset & Motivated</option>
                            </select>
                        </div>
                    </div>
                ))}
                <button className='float-right mx-12 p-3 text-white rounded-xl bg-blue-700 px-5 my-8' onClick={handleThreadInput}><i className="fa fa-add"></i> New Thread</button>
            </div>}

{/* Editor box */}
{data.asset_content_type === "article" && 
<div className='w-full px-7  overflow-y-auto h-96'>
    <h1 className='font-bold'>Title</h1>
    <input type="text" className='w-full outline-none shadow-2xl h-8 rounded-lg bg-gray-100'/>
    <h1 className='font-bold'>Content</h1>
    <div className='flex items-center gap-5 '>
        <h1>File</h1>
        <h1>Edit</h1>
        <h1>View</h1>
        <h1>Insert</h1>
        <h1>Format</h1>
        <h1>Tools</h1>
        <h1>Table</h1>
        <h1>Help</h1>
    </div>
    <ReactQuill theme="snow" value={value} onChange={setValue} className="h-72 " />
<div className="flex items-center justify-around mt-12 gap-8">
    <div>
        <h1 className="font-bold">Category</h1>
        <select className='bg-white border-1 p-3 rounded-lg shadow-2xl' name="" id="">
            <option value="">-- Select --</option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
            <option value="">Category 4</option>
            <option value="">Category 5</option>
            <option value="">Category 6</option>

        </select>
    </div>
    <div>
        <h1 className="font-bold">Sub Category</h1>
<select className='bg-white border-1 p-3 rounded-lg shadow-2xl' name="" id="">
    <option value="">Sub Category 1</option>
    <option value="">Sub Category 2</option>
    <option value="">Sub Category 3</option>
    <option value="">Sub Category 4</option>
    <option value="">Sub Category 5</option>
    <option value="">Sub Category 6</option>
</select>
    </div>
</div>
<div className="flex items-center justify-around my-5">
    <div>
        <h1 className="font-bold">Thumbnail</h1>
       <input type="file" name="" id="" />
    </div>
    <div>
        <h1 className="font-bold">Thought Process</h1>
<select className='bg-white border-1 p-3 rounded-lg shadow-2xl' name="" id="">
    <option value="">Thought Process 1</option>
    <option value="">Thought Process 2</option>
    <option value="">Thought Process 3</option>
    <option value="">Thought Process 4</option>
    <option value="">Thought Process 5</option>
    <option value="">Thought Process 6</option>
</select>
    </div>
</div>
<div className="flex items-center justify-around">
    <h1 className='text-blue-700 font-bold'>Published <i className="fa fa-check"></i></h1>
    <div className='flex items-center gap-5'>
        <button className='p-3 text-white bg-blue-700 rounded-xl'>Save Draft <i className="fa fa-floppy-disk px-1"></i></button>
        <button className='p-3 text-white bg-blue-700 rounded-xl'>Publish <i className="fa fa-upload px-1"></i></button>
    </div>
</div>
    </div>}
    {data.asset_content_type === "4SA"  && 
     <iframe className='mt-10 mb-20' width="520" height="315" src="https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878" title={data.asset_title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
        </>
    )
}

export default Container