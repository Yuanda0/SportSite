import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Store() {

  type Data = {
    id: number,
    image: any | string,
    product: string,
    price: number
  }
  const [datas, setDatas] = useState<Data[]>([]);

  const navigate = useNavigate();

  const fetchDatas = async () => {
    const response = await axios.get("http://localhost:3000/store");
    setDatas(response.data)
  }

  console.log(datas);
  
  useEffect(() => {
      fetchDatas();
  },[])
  return (
    <div className='w-full h-full'>
      <div className='flex flex-wrap gap-10 justify-center ml-6'>
        {
          datas.map((item) => (
            <div key={item.id} className='cursor-pointer  w-[400px] items-center justify-center border-4 border-gray-800 p-4 rounded-md hover:scale-110 duration-150 ease-in-out'>
              <h1 className='mb-10 text-[22px]'>{item.product}</h1>
              <img src={item.image} alt="" />
              <p className='text-[18px] text-orange-400'><span className='text-gray-800 text-[20px] font-bold'>$</span> {item.price}</p>
              <button onClick={() => navigate(`/store/buy/${item.id}`)} className='bg-gray-700 text-white hover:bg-gray-800 p-4 rounded-lg w-[100px]'>Buy</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
