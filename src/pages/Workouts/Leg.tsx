import React from 'react';
import { useNavigate } from 'react-router-dom';
import Squat from '../../assets/squat.png'
import Lunges from '../../assets/lunges.png'
import LegPress from '../../assets/LegPress.png'
import CalfRaises from '../../assets/CalfRaise.png'
import LegCurlse from '../../assets/LegCurls.png'
import StepUps from '../../assets/StepUp.png'
import WallSits from '../../assets/WallSit.png'
import GluteBridges from '../../assets/Glute.png'
import BulgarianSplitSquats from '../../assets/BulgraianSplit.jpeg'
export default function Leg() {
  const exercises = [
    { title: 'Squats', description: 'Perform 4 sets of 12 repetitions.', img: Squat },
    { title: 'Lunges', description: 'Perform 3 sets of 15 repetitions for each leg.', img: Lunges },
    { title: 'Leg Press', description: 'Perform 3 sets of 12 repetitions.', img: LegPress },
    { title: 'Bulgarian Split Squats', description: 'Perform 3 sets of 10 repetitions for each leg.', img: BulgarianSplitSquats },
    { title: 'Calf Raises', description: 'Perform 4 sets of 15 repetitions.', img: CalfRaises },
    { title: 'Leg Curls', description: 'Perform 3 sets of 12 repetitions.', img: LegCurlse },
    { title: 'Step Ups', description: 'Perform 3 sets of 10 repetitions for each leg.', img: StepUps },
    { title: 'Wall Sits', description: 'Hold the wall sit position for 1 minute.', img: WallSits },
    { title: 'Glute Bridges', description: 'Perform 4 sets of 12 repetitions.', img: GluteBridges },
  ];

  const navigate = useNavigate();

  return (
    <div className='min-h-screen py-8'>
      <button className='w-[100px] text-center p-3 bg-gray-700 hover:bg-gray-800 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 mx-auto mb-4 md:mb-8' onClick={() => navigate("/workouts")}>Go to Workouts</button>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-bold mb-8'>Leg Workouts</h1>
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