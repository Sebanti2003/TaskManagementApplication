import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
function Eachtodo({content,del,id,edit,handleEdit,set,setedit,checkf,check}) {
  return (
    <div className='w-full border-[1px] border-black rounded-md min-h-[20px] p-2 bg-green-300 text-xl font-semibold flex justify-between items-center '>
    <input type="checkbox" checked={check} onChange={()=>checkf(id)}  className='w-8 h-8' name="" id="" />
    {edit === id ? (
            <input
              type='text'
              value={content}
              onChange={(e) => set((prevItems) => prevItems.map((i) => (i.id === id ? { ...i, task: e.target.value } : i)))}
              onBlur={() => handleEdit(id, content)}
              autoFocus
            />
          ) : (
            <p className={`font-bold ${check? 'line-through' : ''}`}>
              {content}
            </p>
          )}
      <div className='flex justify-center items-center'>
      <FaRegEdit onClick={()=>setedit(id,content)} className='w-7 h-7 hover:text-violet-700 active:text-violet-700 focus:text-violet-700' />
      <MdOutlineDeleteForever onClick={()=>del(id)} className='w-8 h-8 hover:text-red-600'/>
      </div>
      

    </div>
  )
}

export default Eachtodo
