import React from 'react'

const Input = (props) => {
  const { type, placeholder, value, onChange, style } = props;
  return (
    <input
      type={type}
      className={`w-[60%] m-2 p-1 rounded-md focus:outline-none focus:ring-2  font-medium  px-3 focus:ring-blue-500 focus:border-blue-500 ${style}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}


export default Input