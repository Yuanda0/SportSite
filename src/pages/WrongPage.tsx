import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WrongPage() {
   const navigate = useNavigate();
  return (
    <div className='items-center text-center h-[80vh]'>
      <h1>"Oops! The Page You're Looking for is Lost.</h1>
      <button onClick={() => navigate("/")} className='p-2 bg-gray-800 text-white font-extrabold rounded-lg hover:bg-transparent hover:text-black duration-300 border-2 border-gray-800 ease-out'>Home</button>
    </div>
  );
}
