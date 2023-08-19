import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

type User = {
  id: number;
  name: string;
};

type Answer = {
  id: number;
  user: User;
  text: string;
};

type Question = {
  id: number;
  title: string;
  answers: Answer[];
};

const QuestionAndAnswer: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [yourQuestions, setYourQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const questionsResponse = await axios.get<Question[]>('http://localhost:3000/questions');
      setQuestions(questionsResponse.data);

      const yourQuestionsResponse = await axios.get<Question[]>('http://localhost:3000/yourQuestions');
      setYourQuestions(yourQuestionsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);

  const handleQuestionClick = (question: Question) => {
    if (selectedQuestion && selectedQuestion.id === question.id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(question);
    }
  };

  const handleDeleteQuestion = async (questionId: number) => {
    var confirm = window.confirm("Are you sure?");
    if (confirm) {
      try {
        await axios.delete(`http://localhost:3000/yourQuestions/${questionId}`);
        setYourQuestions(
          yourQuestions.filter((question) => question.id !== questionId)
        );
        window.alert("Your question has been deleted!")
      } catch (error) {
        console.error("Error deleting question:", error);
      }
    }
    else {
      return;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen max-h-full">
      <h1 className="text-2xl font-bold mb-4">Questions and Answers</h1>
      
      <div className="mb-4">
        <button className="bg-blue-500 text-black px-4 py-2 rounded-md hover:text-white font-bold duration-300 ease-in-out">
          <button onClick={() => navigate("/question-and-answer/create-question")}>Create Question</button>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Questions</h2>
          <ul>
            {questions.map(question => (
              <li
                key={question.id}
                className={`cursor-pointer ${selectedQuestion?.id === question.id ? 'font-semibold' : 'hover:underline'} bg-gray-100 p-2 rounded-md`}
                onClick={() => handleQuestionClick(question)}
              >
                {question.title}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Answers</h2>
          {selectedQuestion && (
            <div>
              <h3 className="text-lg font-medium mb-2">{selectedQuestion.title}</h3>
              <ul>
                {selectedQuestion.answers.map(answer => (
                  <li key={answer.id} className="mb-2 p-2 border rounded-md">
                    <p className="mb-1"><strong>{answer.user.name}:</strong> {answer.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Your Questions</h2>
        <ul>
          {yourQuestions.map(question => (
            <li key={question.id} className="mb-2 p-2 border rounded-md bg-gray-600 text-white flex justify-between">
              <span>{question.title}</span>
              <button onClick={() => handleDeleteQuestion(question.id)} className="text-white p-2 hover:bg-white hover:text-red-600 rounded-md bg-red-600 duration-200 ease-in-out">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;