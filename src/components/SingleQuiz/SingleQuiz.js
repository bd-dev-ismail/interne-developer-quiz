import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { EyeSlashIcon } from "@heroicons/react/24/solid";
const SingleQuiz = ({ quiz, correct, setCorrect, index }) => {
  const [show, setShow] = useState(false);
  
  const { question, options, correctAnswer } = quiz;
  const [a, b, c, d] = options;
  const checkAns = (question) => {
    if (question === correctAnswer) {
      toast.success("You Answer is Correct", { autoClose: 500 });
      const incrase = correct + 1;
      if (incrase <= 8) setCorrect(incrase);
      return;
    } else {
      toast.error("Your Answer is Wrong", { autoClose: 500 });
      const decrase = correct - 1;
      if (correct !== 0) {
        return setCorrect(decrase);
      }
      return;
    }
  };
  const showAns = () => {
    setShow(!show);
  };
  console.log();
  return (
    <>
      <div>
        <div className="shadow-2xl border-accent border rounded lg:w-[55rem] mx-auto p-5 my-5">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold py-2">
             {index}. {question ? question.slice(3, -4) : "No Question"}
            </h3>
            <button onClick={showAns}>
              <EyeSlashIcon className="h-8 w-8 text-primary" />
            </button>
          </div>
          <div className="lg:w-[400px] mx-auto text-xl ">
            <button onClick={() => checkAns(a)} className="w-full">
              <div className={`border-2 p-3 my-3 bg-gray-200 hover:bg-success`}>
                <p>{a}</p>
              </div>
            </button>
            <button onClick={() => checkAns(b)} className="w-full">
              <div className={`border-2 p-3 my-3 bg-gray-200 hover:bg-success`}>
                <p>{b}</p>
              </div>
            </button>
            <button onClick={() => checkAns(c)} className="w-full">
              <div className={`border-2 p-3 my-3 bg-gray-200 hover:bg-success`}>
                <p>{c}</p>
              </div>
            </button>
            <button onClick={() => checkAns(d)} className="w-full">
              <div className={`border-2 p-3 my-3 bg-gray-200 hover:bg-success`}>
                <p>{d ? d : "No Found 4th Option"}</p>
              </div>
            </button>
            {show ? (
              <button className="w-full">
                <div className={`border-2 p-3 my-3 bg-primary text-white`}>
                  <p>Answer: {correctAnswer}</p>
                </div>
              </button>
            ) : undefined}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleQuiz;