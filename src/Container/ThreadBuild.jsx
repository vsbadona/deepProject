import React, { useState } from 'react'

const ThreadBuild = () => {
    const [inputValues, setInputValues] = useState(['']);
    const [threadValue,setThreadValue]=useState([''])

    function handleAddInput() {
        setInputValues([...inputValues, '']);
    }
    function handleThreadInput(){
        setThreadValue([...threadValue,''])
    }
    return (
       <div className='w-full overflow-y-scroll h-96'>
   {threadValue.map((_,index)=>(
          <div className='my-5'>
          <div className='w-full h-8 bg-gray-100 my-3 shadow-2xl flex gap-14 items-center px-5 font-bold text-lg'>
              <i className="fa fa-angle-up"></i>
              <h1>Thread {String.fromCharCode(65 + index)}</h1>
          </div>
         {inputValues.map((value,index) => (
           <div className="flex justify-center gap-12 my-5">
           <div>
           <div className='bg-gray-200 h-28 w-48 rounded-xl shadow-2xl '>
                 <h1 className='px-3 text-sm'>Sub Thread {index + 1}</h1>
                 <textarea type="text" className='h-20 w-48 rounded-b-xl rounded-t-2xl mt-2 pb-12 px-2 outline-none overflow-auto resize-none' placeholder='Enter Text Here' />
             </div>
             <div className="flex items-center justify-end gap-3 text-2xl my-3">
             <i style={{color:"blue"}} class="fa-solid fa-lightbulb"></i>               
             <i style={{color:"blue"}} class="fa-solid fa-message"></i> 
             <i style={{color:"blue"}} class="fa-solid fa-question"></i>
             <i style={{color:"blue"}} class="fa-solid fa-hand-holding-droplet"></i>              
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
          {/* {inputValues.map((value, index) => (
   <>
    <input 
      key={index}
      type="text"
      value={value}
      onChange={(event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
      }}
    />
   </>
  ))}
  <button onClick={handleAddInput}>Add Input</button> */}
<div className="w-11/12 mx-auto">
  <div className='w-full  bg-gray-200 rounded-xl '>
      <p className='px-3 py-1 text-sm'>Summary for Thread {String.fromCharCode(65 + index)}</p>
      <textarea type="text" className='-mb-1 resize-none w-full rounded-b-xl rounded-t-2xl mt-2 pb-12 px-2 outline-none overflow-auto' placeholder='Enter Text Here' />    </div>
</div>
<div className="flex items-center justify-around my-4 bg-gray-50">
  <button><i className="fa fa-paperclip"></i> Thread Credit <i style={{color:"blue"}} className="fa fa-pen"></i></button>
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
  </div>)
}

export default ThreadBuild