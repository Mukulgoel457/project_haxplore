import React from "react";
import temple from '../pics/temple.jpg'

const SignUp = () => {


  const divStyle = {
    /* width: '200px', // Set the width
    height: '200px', // Set the height */
    backgroundColor: '#eeeedd', // Set the background color using hexadecimal code
    // You can add more styling properties here as needed
  
  };
  return (
    
    <div style={divStyle}>
      <h1 className="flex justify-center font-serif text-gray-600">ONLINE DARSHAN BOOKING SYSTEM</h1>
  
    <div class=" w-full flex justify-center mt-16  background-color:#eeeedd">
        <div class="left ">
            <img className="w-full justify-normal"src={temple} alt="temple"/>
        
        </div>
        <div class="right w-1/3 flex flex-col p-9 justify-center border border-gray-300">
          <h1 className="flex justify-center font-serif text-gray-600">LOGIN</h1>
            <input type="text" class="w-82 h-6 px-4 py-3 mb-2 rounded-md border border-1"  placeholder="Enter your email adress or phone number"/>
             <input type="text" class="w-82 h-6  px-4 py-2 mb-2 rounded-md border border-1"placeholder="Password"/>
             <button class="bg-yellow-900 hover:bg-yellow-950 rounded sm w-82  py-2 text-white h-10 text-sm" > Log In</button>
             <span class="mx-2 text-m hover:underline m-1 font-serif">Forgotten Password</span>
             <hr/>
             <button class="bg-yellow-900 hover:bg-yellow-950 py-2 mt-1 rounded-md w-auto text-white h-10 text-sm">Create New Account</button>
             
         </div>
            
        </div>  
        </div>

  );
};

export default SignUp;
