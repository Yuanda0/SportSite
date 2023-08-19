import React from 'react';
import Back from '../../assets/back.png'
import Abs from '../../assets/abs.png'
import Arm from '../../assets/bicepsandtriceps.png'
import Cardio from '../../assets/cardio.png'
import Leg from '../../assets/leg.png'
import PushUp from '../../assets/pushup.png'
import { useNavigate } from 'react-router-dom';
export default function Workouts() {
  const datas = [
    {
      title: "Home Workouts",
      img: PushUp,
      link: '/workouts/home-workouts'
    },
    {
      title: "Back Workouts",
      img: Back,
      link: '/workouts/back-workouts'
    },
    {
      title: "Abs Workouts",
      img: Abs,
      link: '/workouts/abs-workouts'
    },
    {
      title: "Biceps & Triceps Workouts",
      img: Arm,
      link: 'biceps-and-triceps-workouts'
    },
    {
      title: "Cardio",
      img: Cardio,
      link: '/workouts/cardios'
    },
    {
      title: "Leg Workouts",
      img: Leg,
      link: '/workouts/leg-workouts'
    }
  ]
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center mt-5 font-bold text-4xl">Workouts</h1>
      <div className="mt-5 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {datas.map((item) => (
          <div onClick={()=> navigate(item.link)} key={item.title} className="bg-white cursor-pointer p-4 rounded-lg shadow-md hover:shadow-gray-600 hover:scale-110 hover:shadow-2xl duration-200 ease-in-out">
            <img
              className="w-full h-48 object-cover mb-3"
              src={item.img}
              alt={item.title}
            />
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
