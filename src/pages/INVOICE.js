import React, { useState } from 'react';
import temple from '../pics/temple.jpg';
import { useNavigate } from 'react-router-dom';





const Invoice=()=>{

  return(

   
    
    <div className="invoice">
        <div className="invoice-header">
            <h1>INVOICE</h1>
        </div>
        <div className="invoice-details">
            <p>Bill To:</p>
            <p>Name:kushal</p>
            <p>Email:kushal@gmail.com</p>
            <p>Members:4</p>
            <p>Date:2024-04-01</p>
        </div>
        <div className="thank-you">
            <p>Thank you for your visit!</p>
        </div>
    </div>
    
  )
   

};

export default Invoice;