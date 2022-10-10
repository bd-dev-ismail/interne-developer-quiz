import React from 'react';
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

const HomeQuiz = ({ quiz }) => {
    const {name, logo, total, id} = quiz;
    const navigate = useNavigate();
    const handalStartQuiz = ()=>{
      navigate(`../quiz/${id}`);
    }
  return (
    <>
      <div className="card card-compact w-[360px] bg-base-300 shadow-xxl border-2 border-accent">
        <figure>
          <img
            src={logo ? logo : "No Image"}
            alt="quiz topic"
            className="bg-current"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title custom-text">{name}</h2>
          <p className="text-start custom-text">Quiz Quantity: {total}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handalStartQuiz}
              className="btn btn-accent custom-text"
            >
              Start Quiz
              <ArrowLongRightIcon className="h-6 w-6 custom-text ml-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeQuiz;