import React, { useState } from 'react';
import temple from '../pics/temple.jpg';
import { useNavigate } from 'react-router-dom';

const DivStyle = {
  /* width: '200px', // Set the width
  height: '200px', // Set the height */
  backgroundColor: '#eeeedd', // Set the background color using hexadecimal code
  // You can add more styling properties here as needed

};

const RegisterPage = () => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      navigate('/');
      console.log('Registration successful');
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

//   const Onclickhandler = ()=>{
//     // <Navigate to="/" replace={true} />
//     navigate('/');
// }

  // return (
  //   <>
  //   <div>
  //     <h2>Register</h2>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label>Username:</label>
  //         <input
  //           type="text"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //       </div>
  //       <div>
  //         <label>Email:</label>
  //         <input
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </div>
  //       <div>
  //         <label>Password:</label>
  //         <input
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </div>
  //       <button type="submit">Register</button>
  //     </form>
  //   </div>
  //   </>
  // );

  return (
    <div style={DivStyle}>
      <h1 className="flex justify-center font-serif text-gray-600">ONLINE DARSHAN BOOKING SYSTEM</h1>

      <div className="container flex justify-center mt-16 mx-auto background-color:#eeeedd">
        <div className="left">
          <img className="w-full justify-normal" src={temple} alt="temple" />
        </div>
        <div className="right w-1/3 flex flex-col p-9 justify-center border border-gray-300">
          <h1 className="flex justify-center font-serif text-gray-600">REGISTER</h1>
          <form onSubmit={HandleSubmit}>
          <input
              type="text"
              name="name"
              className="w-82 h-6 px-4 py-2 mb-2 rounded-md border border-1"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              className="w-82 h-6 px-4 py-2 mb-2 rounded-md border border-1"
              placeholder="Enter your email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="w-82 h-6 px-4 py-2 mb-2 rounded-md border border-1 flex "
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <button 
              type="submit"
              className="bg-yellow-900 hover:bg-yellow-950 rounded sm w-82 py-2 text-white h-10 text-sm"
            >
              Create Account
            </button>
          </form>
          <hr />
          {/* <p className="text-center">
            Already have an account? <Navigate to="/login" className="text-blue-500 hover:underline">Log in</Navigate>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;


//   const response = await fetch('http://localhost:5000/api/v1/auth/register', {