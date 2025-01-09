import React from 'react'

const Button = (props)=> {
  const style = props.style;
  const value = props.value;
  return (
    <input
      type="button"
      className={`w-[30%] m-5 p-1 rounded-md focus:outline-none focus:ring-0  text-white font-semibold bg-blue-500 ${style}`}
      value={value}
    />
  );
}

export default Button