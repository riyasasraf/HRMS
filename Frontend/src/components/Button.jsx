import React from 'react'

const Button = (props)=> {
  const { style, value, onClick } = props;
  

  return (
    <input
      type="button"
      className={`w-[30%] m-5 p-1 rounded-md focus:outline-none focus:ring-0  text-white font-semibold bg-blue-500 ${style}`}
      value={value}
      onClick={onClick}
    />
  );
}

export default Button