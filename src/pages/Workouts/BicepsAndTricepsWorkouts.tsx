import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hammer from '../../assets/hammercurl.png'
import TriDips from '../../assets/tridips.png'
import ConCurl from '../../assets/ConCurl.png'
import BenchPress from '../../assets/benchpress.png'
import Preacher from '../../assets/preacher.png'
import Crusher from '../../assets/crusher.png'
import Incline from '../../assets/incline.png'
import Pushdown from '../../assets/pushdown.png'
export default function BicepsAndTricepsWorkouts() {
  const exercises = [
    { title: 'Hammer Curls', description: 'Perform 4 sets of 12 repetitions.', img: Hammer },
    { title: 'Triceps Dips', description: 'Perform 3 sets of 15 repetitions.', img: TriDips },
    { title: 'Concentration Curls', description: 'Perform 4 sets of 10 repetitions.', img: ConCurl },
    { title: 'Close-Grip Bench Press', description: 'Perform 3 sets of 12 repetitions.', img: BenchPress },
    { title: 'Preacher Curls', description: 'Perform 4 sets of 12 repetitions.', img: Preacher },
    { title: 'Skull Crushers', description: 'Perform 3 sets of 10 repetitions.', img: Crusher },
    { title: 'Incline Dumbbell Curls', description: 'Perform 4 sets of 15 repetitions.', img: Incline },
    { title: 'Triceps Pushdowns', description: 'Perform 3 sets of 12 repetitions.', img: Pushdown },

  ];

  const navigate = useNavigate();

  return (
    <div className='min-h-screen py-8'>
      <button className='w-[100px] text-center p-3 bg-gray-700 hover:bg-gray-800 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 mx-auto mb-4 md:mb-8' onClick={() => navigate("/workouts")}>Go to Workouts</button>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-bold mb-8'>Arm Workouts</h1>
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