import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import temple from '../pics/temple.jpg';
import { useNavigate} from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const Onclickhandler = ()=>{
    navigate('/');
}
  const HandleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Redirect to login page after successful registration
      window.location.href = '/login';
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  const divStyle = {
    backgroundColor: '#eeeedd',
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
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              name="email"
              className="w-82 h-6 px-4 py-2 mb-2 rounded-md border border-1"
              placeholder="Enter your email address or phone number"
              value={formData.email}
              onChange={HandleChange}
            />
            <input
              type="password"
              name="password"
              className="w-82 h-6 px-4 py-2 mb-2 rounded-md border border-1 flex "
              placeholder="Password"
              value={formData.password}
              onChange={HandleChange}
            />
            <button onClick={Onclickhandler}
              type="submit"
              className="bg-yellow-900 hover:bg-yellow-950 rounded sm w-82 py-2 text-white h-10 text-sm"
            >
              Create Account
            </button>
          </form>
          <hr />
          <p className="text-center">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
