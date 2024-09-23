import React from 'react'

const Input = ({type,title,value,onChange}) => {
  return (
  <label >
    <input
        type={type} value={value}
           onChange={onChange}
           className='w-full border-b-2 mb-10 border-gray-400 p-[0_0_8px] outline-none border-r-0 border-t-0 border-l-0' name={title} placeholder={title}/>
  </label>
  )
}

export default Input