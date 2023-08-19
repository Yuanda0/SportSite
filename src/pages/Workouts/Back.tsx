import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeadLift from '../../assets/deadlift.png'
import PullUps from '../../assets/PullUp.png'
import BentOver from '../../assets/bent-over.png'
import Lat from '../../assets/lat-pulldown.png'
import TBarRows from '../../assets/tbar-rows.png'
import FacePulls from '../../assets/face-pulls.png'
import ReverseFlyes from '../../assets/reverse-flyes.png'
import Shrugs from '../../assets/shrugs.png'
export default function BackWorkouts() {
  const exercises = [
    { title: 'Deadlifts', description: 'Perform 4 sets of 6 repetitions.', img: DeadLift },
    { title: 'Pull-Ups', description: 'Perform 3 sets of 10 repetitions.', img: PullUps },
    { title: 'Bent Over Rows', description: 'Perform 4 sets of 8 repetitions.', img: BentOver },
    { title: 'Lat Pulldown', description: 'Perform 3 sets of 12 repetitions.', img:Lat },
    { title: 'T-Bar Rows', description: 'Perform 4 sets of 8 repetitions.', img:TBarRows },
    { title: 'Face Pulls', description: 'Perform 3 sets of 15 repetitions.', img:FacePulls },
    { title: 'Reverse Flyes', description: 'Perform 3 sets of 12 repetitions.', img:ReverseFlyes },
    { title: 'Shrugs', description: 'Perform 3 sets of 15 repetitions.', img:Shrugs },
  ];
  const navigate = useNavigate();
  return (
    <div className='min-h-screen py-8'>
      <button className='w-[100px] text-center p-3 bg-gray-700 hover:bg-gray-800 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 mx-auto mb-4 md:mb-8' onClick={() => navigate("/workouts")}>Go to Workouts</button>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-bold mb-8'>Back Workouts</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {exercises.map((exercise, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow-md'>
              <img className='w-full h-60 object-cover mb-2 mx-auto' src={exercise.img} alt={exercise.title} />
              <h2 className='text-xl font-bold mb-2 text-center'>{exercise.title}</h2>
              <p className='text-center'>{exercise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}