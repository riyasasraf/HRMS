import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
const Signup = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="w-[25%] bg-slate-200  -mt-32 rounded-xl flex flex-col items-center justify-center p-9">
        <h1 className="font-medium text-3xl text-slate-800 p-7">Login</h1>
        <Input type="text" style="" placeholder="User ID / Mail ID" />
        <Input type="password" style="" placeholder="Password" />
        <Button value = "Login"/>
      </div>
    </div>
  );
};

export default Signup;
