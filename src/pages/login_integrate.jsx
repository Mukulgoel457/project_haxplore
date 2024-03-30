import React, { useState } from 'react';
import temple from '../pics/temple.jpg';
import { useNavigate} from 'react-router-dom';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const Onclickhandler = ()=>{
    navigate('/register');
}
  const Handlesubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Handle successful login
      console.log('Login successful');
      

    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const DivStyle = {
    backgroundColor: '#eeeedd',
  };

  return (
    <div style={DivStyle}>
      <h1 className="flex justify-center font-serif text-gray-600">
        ONLINE DARSHAN BOOKING SYSTEM
      </h1>

      <div className="container flex justify-center mt-16 mx-auto background-color:#eeeedd">
        <div className="left ">
          <img className="w-full justify-normal" src={temple} alt="temple" />
        </div>
        <div className="right w-1/3 flex flex-col p-9 justify-center border border-gray-300">
          <h1 className="flex justify-center font-serif text-gray-600">LOGIN</h1>
          <form onSubmit={Handlesubmit}>
            <input
              type="text"
              className="w-82 h-6 px-4 py-2 mb-2 rounded-md border border-1 flex align-middle justify-normal"
              placeholder="Enter your email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-82 h-6 px-4 py-2 mb-2 rounded-md border border-1 flex align-middle justify-center"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-yellow-900 hover:bg-yellow-950 rounded sm w-82 py-2 text-white h-10 text-sm"
            >
              Log In
            </button>
          </form>
          <span className="mx-2 text-m hover:underline m-1 font-serif">
            Forgotten Password
          </span>
          <hr />
          <button onClick={Onclickhandler} className="bg-yellow-900 hover:bg-yellow-950 py-2 mt-1 rounded-md w-auto text-white h-10 text-sm" >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
