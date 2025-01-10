import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
const Signup = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    console.log('userid'+userId)

  }
   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
    console.log("password" + password);
   };
  const handleSumit = () => {
  console.log(userId +" "+ password);
}
  

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="w-[25%] bg-slate-200  -mt-32 rounded-xl flex flex-col items-center justify-center p-9">
        <h1 className="font-medium text-3xl text-slate-800 p-7">Login</h1>
        <Input
          type="text"
          style=""
          placeholder="User ID / Mail ID"
          onChange={handleUserIdChange}
        />
        <Input type="password" style="" placeholder="Password" onChange ={handlePasswordChange} />
        <Button value="Login" onClick={ handleSumit} />
      </div>
    </div>
  );
};

export default Signup;
