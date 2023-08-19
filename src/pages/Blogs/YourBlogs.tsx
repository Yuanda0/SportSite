import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Datas = {
   title: string,
   blog: string,
   name: string,
   id: number
}

const YourBlogs = () => {
   const navigate = useNavigate();
   const [datas, setDatas] = useState<Datas[]>([])
   const fetchDatas = async () => {
     const response = await axios.get("http://localhost:3000/yourBlogs");
     setDatas(response.data);
   }
   useEffect(() => {
      fetchDatas();
   }, [])

   return (
      <div className='w-full max-w-[300px] mx-auto'>
         <h1 className='text-center font-bold mb-3 text-xl border-b-2 border-gray-800'>Your Blogs</h1>
         {
            datas.map((item) => (
               <div onClick={() => navigate(`/blogs/yourBlogs/${item.id}`)} key={item.blog} className='rounded-md self-blogs cursor-pointer text-center border-2 flex-wrap border-black p-3 mb-3'>
                  <h3 className='font-bold text-lg'>Title: {item.title}</h3>
                  <p className='mt-2'>Blog: {item.blog}</p>
               </div>
            ))
         }
         <p className='font-thin text-center mt-3'>| Click on the blogs to view the details</p>
      </div>
   );
}

export default YourBlogs;