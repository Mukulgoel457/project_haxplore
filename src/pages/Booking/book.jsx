import React, { useState } from "react";
import "./book.css"; // Assuming you have additional CSS styles in book.css
import temple from "../../assets/temple.jpg";
import { useNavigate } from "react-router-dom";
const Book = () => {
  const divStyle = {
    backgroundImage: `url(${temple})`, // Set the background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#eeeedd", // Fallback background color
    minHeight: "100vh", // Ensure the background covers the entire viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const headingStyle = {
    fontFamily: "Mandrope, sans-serif", // Apply Mandrope font
    fontWeight: "500", // Adjust font weight as needed
    fontSize: "1.5rem", // Adjust font size as needed
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  // State to store the date
  const [date, setDate] = useState("");
  const [members, setMembers] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Function to handle date change and format it
  // const handleDateChange = (event) => {
  //   const inputDate = event.target.value;
  //   const formattedDate = inputDate; // No formatting needed for text input
  //   setDate(formattedDate);

  // };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    console.log(token);
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/ticket/createTicket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ email, members, name, date }),

          
        }
        );
        // console.log(response);
        const data = await response.json();
        console.log(data);
      if (!response.ok) {
        throw new Error("Booking failed");
      }

    
      console.log("Booking successful");
      navigate("/home");
    } catch (error) {
      console.error("Error during booking:", error.message);
    }
  };

  return (
    <div style={divStyle}>
      <div className="container mx-auto p-8 rounded-lg shadow-md bg-white bg-opacity-90">
        <h1 className="text-2xl font-semibold text-brown text-center mb-6 main-heading">
          ONLINE DARSHAN BOOKING SYSTEM
        </h1>
        <div className="flex flex-col items-center">
          <h2 style={headingStyle} className="text-brown mb-4">
            Book Tickets
          </h2>

          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              style={inputStyle}
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              style={inputStyle}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="number"
              style={inputStyle}
              placeholder="Number of members"
              min="1"
              value={members}
              onChange={(e) => setMembers(e.target.value)}
            />

            <input
              type="text"
              style={inputStyle} 
              placeholder="yyyy-mm-dd"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <div className="text-center mt-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg mx-auto">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
// navigate("/home");