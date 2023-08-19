import React from 'react';
import { useNavigate } from 'react-router-dom';
import Running from '../../assets/Running.png'
import JumpRope from '../../assets/JumpRope.png'
import Cycling from '../../assets/Cycling.png'
import Burpees from '../../assets/burpees.png'
import HighKnees from '../../assets/high-knees.png'
import StairClimbing from '../../assets/StairClimb.png'
export default function CardioWorkouts() {
  const exercises = [
    { title: 'Running', description: 'Run for 30 minutes at a moderate pace.', img: Running },
    { title: 'Jump Rope', description: 'Jump rope for 15 minutes with intervals.', img: JumpRope },
    { title: 'Cycling', description: 'Cycle for 45 minutes on a flat road.', img: Cycling },
    { title: 'Burpees', description: 'Perform 3 sets of 10 burpees.', img: Burpees },
    { title: 'High Knees', description: 'Do high knees for 5 minutes.', img: HighKnees },
    { title: 'Stair Climbing', description: 'Climb stairs for 20 minutes.', img: StairClimbing },
  ];

  const navigate = useNavigate();

  return (
    <div className='min-h-screen py-8'>
      <button className='w-[100px] text-center p-3 bg-gray-700 hover:bg-gray-800 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 mx-auto mb-4 md:mb-8' onClick={() => navigate("/workouts")}>Go to Workouts</button>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-bold mb-8'>Cardio Workouts</h1>
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