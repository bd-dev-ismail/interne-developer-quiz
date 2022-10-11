import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
  const [correct , setCorrect] = useState(0);
    const quizData = useLoaderData();
    const quizInfo = quizData.data.questions;

    return (
      <div className=" container mx-auto">
        <div>
          <div>
            <h3 id="quiz" className="text-4xl font-bold mt-12">
              {quizData.data.name} Quizes
            </h3>
          </div>
          <div>
            <p className="text-2xl mt-5">
              Your Score is{" "}
              <span className="text-error">
                {correct}/{quizInfo.length}
              </span>
            </p>
          </div>
        </div>

        <div>
          {quizInfo.map((quiz, index) => (
            <SingleQuiz
              quiz={quiz}
              key={quiz.id}
              setCorrect={setCorrect}
              correct={correct}
              index={index + 1}
            ></SingleQuiz>
          ))}
        </div>
      </div>
    );
};

export default Quiz;