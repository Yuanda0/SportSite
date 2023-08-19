import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  type Datas = {
    title: string;
    desc: string;
  };

  const [datas, setDatas] = useState<Datas[]>([]);

  const fetchDatas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/datas");
      setDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[800px]">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="object-cover w-full h-full"
          alt=""
        />
        <h1 className="absolute inset-0 flex flex-col justify-center items-center w-full h-[800px] font-bold text-white text-center text-[24px] mt-24">
          Would you like to improve yourself?
          <button
            onClick={() => navigate("/contact")}
            className="mt-4 px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:scale-105 duration-200 ease-in-out"
          >
            Join us
          </button>
        </h1>
      </div>
      <h1 className="text-center text-2xl font-bold text-gray-700 mt-8">
        Why should you choose us?
      </h1>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {datas.map((item) => (
          <div
            key={item.desc}
            className="w-[400px] py-3 mt-4 rounded-md border-2 border-orange-400 flex flex-col items-center gap-5"
          >
            <h1 className="font-bold text-[24px] text-center">{item.title}</h1>
            <p className="font-medium text-[18px] text-gray-600 text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/workouts/home-workouts")}
        className="mt-8 px-6 py-3 bg-gray-800 rounded-lg hover:bg-transparent border-2 border-gray-800 duration-300 ease-in-out text-white hover:text-black font-bold text-[16px] mx-auto"
      >
        Check Out Home Workout Routines!
      </button>
    </div>
  );
}