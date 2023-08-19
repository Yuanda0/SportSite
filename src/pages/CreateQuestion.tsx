import React, { useState } from 'react';
import axios from 'axios';

const CreateQuestion: React.FC = () => {
  const [questionTitle, setQuestionTitle] = useState('');

  const handleCreateQuestion = async () => {
    try {
      const newQuestion = {
        title: questionTitle,
        answers: []
      };

      await axios.post('http://localhost:3000/yourQuestions', newQuestion);
      setQuestionTitle('');
    } catch (error) {
      console.error('Error creating question:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 h-[70vh]">
      <h1 className="text-2xl font-bold mb-4">Create a New Question</h1>
      <div className="flex">
        <input
          type="text"
          className="w-full p-2 border rounded-l-md"
          placeholder="Enter your question"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          onClick={handleCreateQuestion}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateQuestion;