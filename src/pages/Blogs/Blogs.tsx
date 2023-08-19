import axios from 'axios';
import React, { useEffect, useState } from 'react';
import YourBlogs from './YourBlogs';

type Datas = {
  title: string,
  blog: string,
  name: string
}

export default function Blogs() {
  const [title, setTitle] = useState<string>('');
  const [blog, setBlog] = useState<string>('');
  const [datas, setDatas] = useState<Datas[]>([]);

  const fetchDatas = async () => {
    const response = await axios.get("http://localhost:3000/blogs");
    setDatas(response.data);
  }

  const id: number = Math.round(Math.random() * 9999999999999);

  const handleSubmit = async () => {
    if (title === '' || blog === '') {
      window.alert("Please fill in both title and blog fields.");
    } else {
      const response = await axios.post("http://localhost:3000/yourblogs", {
        title,
        blog,
        id
      });

      setDatas(response.data);
      window.alert("Your blog has been shared!");
      setTitle('');
      setBlog("");
    }
  }

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-screen-md md:w-[500px] md:h-[500px] shadow-lg shadow-gray-800 p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="mb-2 font-bold text-xl md:text-2xl">SHARE BLOG</h1>
          <label className="text-center">
            Title
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="border-2 border-gray-700 rounded-md w-full p-2 outline-none"
            />
          </label>
          <label className="text-center">
            Blog
            <textarea
              onChange={(e) => setBlog(e.target.value)}
              className="p-4 border-2 border-gray-700 rounded-md w-full outline-none"
            />
          </label>
          <button
            type="submit"
            className="p-2 bg-gray-700 text-white rounded-md w-[75px]"
          >
            Share
          </button>
        </form>
      </div>
      <YourBlogs />
      <div className="flex flex-col items-center gap-5 w-full">
        {datas.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-800 rounded-md p-2 text-center max-w-[800px] w-full"
          >
            <h1 className='font-bold'>User: {item.name}</h1>
            <h3 className='font-bold border-b-2 border-gray-800'>{item.title}</h3>
            <p>{item.blog}</p>
          </div>
        ))}
      </div>
    </div>
  );
}