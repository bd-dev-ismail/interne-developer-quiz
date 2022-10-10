import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quizData = useLoaderData();
    const quizInfo = quizData.data.questions;
    console.log(quizInfo);
    const [correct , setCorrect] = useState(0)
    return (
      <div className="my-3 container mx-auto">
        <div>
          <div>
            <h3 className="text-4xl font-bold">{quizData.data.name} Quizes</h3>
          </div>
          <div>
            <p className="text-2xl mt-5">
              Your Score is  <span className='text-error'>{correct}/{quizInfo.length}</span>
            </p>
          </div>
        </div>

        <div className="my-10">
          {quizInfo.map((quiz) => (
            <SingleQuiz
              quiz={quiz}
              key={quiz.id}
              setCorrect={setCorrect}
              correct={correct}
            ></SingleQuiz>
          ))}
        </div>
      </div>
    );
};

export default Quiz;