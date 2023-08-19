import React from 'react';
import { useNavigate } from 'react-router-dom';
import Plank from '../../assets/plank.png';
import LegRaise from '../../assets/leg-raise.png';
import Hanging from '../../assets/hanging.png';
import Mountain from '../../assets/mountain.png';
import Twists from '../../assets/twists.png';
import Crunch from '../../assets/crunch.png';
import BiCrunch from '../../assets/bicrunch.png';
import VUp from '../../assets/V-Up.png';

export default function Abs() {
  const exercises = [
    { title: 'Crunches', description: 'Perform 3 sets of 20 repetitions.', img: Crunch },
    { title: 'Leg Raises', description: 'Perform 4 sets of 15 repetitions.', img: LegRaise },
    { title: 'Plank', description: 'Hold the plank position for 2 minutes.', img: Plank },
    { title: 'Russian Twists', description: 'Perform 3 sets of 30 twists.', img: Twists },
    { title: 'Bicycle Crunches', description: 'Perform 4 sets of 25 repetitions.', img: BiCrunch },
    { title: 'Mountain Climbers', description: 'Perform 4 sets of 30 seconds each.', img: Mountain },
    { title: 'V-Ups', description: 'Perform 3 sets of 12 repetitions.', img: VUp },
    { title: 'Hanging Leg Raises', description: 'Perform 3 sets of 10 repetitions.', img: Hanging },
  ];

  const navigate = useNavigate();

  return (
    <div className='min-h-screen py-8'>
      <button className='w-[100px] text-center p-3 bg-gray-700 hover:bg-gray-800 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 mx-auto mb-4 md:mb-8' onClick={() => navigate("/workouts")}>Go to Workouts</button>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-bold mb-8'>Abs Workouts</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {exercises.map((exercise, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow-md'>
              <h2 className='text-xl font-bold mb-2 text-center'>{exercise.title}</h2>
              <img src={exercise.img} alt={exercise.title} className='mx-auto h-60' />
              <p className='text-center'>{exercise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}