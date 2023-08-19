import React from 'react';
import PupExercise from '../../assets/pushupexercise.png';
import Squat from '../../assets/squat.png';
import Plank from '../../assets/plank.png';
import Lunges from '../../assets/lunges.png';
import Burpees from '../../assets/burpees.png';
import JumpingJacks from '../../assets/jumping-jacks.png';
import Mountain from '../../assets/mountain.png';
import TriDips from '../../assets/tridips.png';
import LegRaise from '../../assets/leg-raise.png';
import HighKnees from '../../assets/high-knees.png';
import { useNavigate } from 'react-router-dom';

export default function HomeWorkouts() {
  const exercises = [
    { title: 'Push-Ups', description: 'Perform 3 sets of 15 repetitions.', img: PupExercise },
    { title: 'Squats', description: 'Perform 4 sets of 12 repetitions.', img: Squat },
    { title: 'Plank', description: 'Hold the plank position for 1 minute.', img: Plank },
    { title: 'Lunges', description: 'Perform 3 sets of 10 repetitions on each leg.', img: Lunges },
    { title: 'Burpees', description: 'Perform 3 sets of 10 repetitions.', img: Burpees },
    { title: 'Jumping Jacks', description: 'Perform 5 sets of 30 seconds each.', img: JumpingJacks },
    { title: 'Mountain Climbers', description: 'Perform 4 sets of 20 repetitions.', img: Mountain },
    { title: 'Tricep Dips', description: 'Perform 3 sets of 12 repetitions.', img: TriDips },
    { title: 'Leg Raises', description: 'Perform 4 sets of 15 repetitions.', img: LegRaise },
    { title: 'High Knees', description: 'Perform 5 sets of 1 minute each.', img: HighKnees },
  ];
  const navigate = useNavigate();
  return (
    <div className='min-h-screen  py-8'>
      <button className='w-[100px] text-center p-3 bg-gray-700 hover:bg-gray-800 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 mx-auto mb-4 md:mb-8' onClick={() => navigate("/workouts")}>Go to Workouts</button>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-bold mb-8'>Home Workouts</h1>
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
