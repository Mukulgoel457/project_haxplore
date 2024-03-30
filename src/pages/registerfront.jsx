import React from "react";
//import temple from '../assets/temple.jpg';
import temple from '../pics/temple.jpg'
const SignUp = () => {
  const divStyle = {
    backgroundColor: '#eeeedd',
    display: 'flex',
    flexDirection: 'row', // Set flex direction to row
    justifyContent: 'center',
    alignItems: 'center',
    // You can add more styling properties here as needed
  };

  return (
    <div style={divStyle}>
      <h1 className="flex justify-center font-serif text-gray-600">ONLINE DARSHAN BOOKING SYSTEM</h1>
      <div className="container flex justify-center mt-16 mx-auto background-color:#eeeedd">
        <div className="left">
          <img className="w-full justify-normal" src={temple} alt="temple" />
        </div>
        <div className="right w-1/3 flex flex-col p-9 justify-center border border-gray-300">
          <h1 className="flex justify-center font-serif text-gray-600">REGISTER</h1>
          <input type="text" className="w-82 h-6 px-4 py-3 mb-2 rounded-md border border-1" placeholder="Enter your email address or phone number" />
          <input type="text" className="w-82 h-6 px-4 py-2 mb-2 rounded-md border border-1" placeholder="Password" />
          <button className="bg-yellow-900 hover:bg-yellow-950 rounded sm w-82 py-2 text-white h-10 text-sm">Register</button>
          <span className="mx-2 text-m hover:underline m-1 font-serif">Already have an account? <a href="/login" className="text-blue-500">Login</a></span>
          <hr />
          <button className="bg-yellow-900 hover:bg-yellow-950 py-2 mt-1 rounded-md w-auto text-white h-10 text-sm">Create New Account</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;