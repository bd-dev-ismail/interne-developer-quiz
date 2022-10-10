import React from 'react';
import { toast } from 'react-toastify';

const SingleQuiz = ({ quiz, correct, setCorrect }) => {
  // console.log(quiz);
  const { question, options, correctAnswer } = quiz;
  const [a, b, c, d] = options;
  const checkAns = (question) => {
    if (question === correctAnswer) {
      toast.success("You Answer is Correct", { autoClose: 500 });
      const incrase =  correct + 1;
      if(incrase <= 8)
    setCorrect(incrase)
      return;
    } else {
       toast.error("Your Answer is Wrong", { autoClose: 500 });
       const decrase =  correct - 1;
       if(correct !== 0){

           return setCorrect(decrase);
       }
       return;
    }
  };
  return (
    <>
      <div>
        <div className="shadow-2xl border-accent border rounded lg:w-[50rem] mx-auto p-5 my-5">
          <h3 className="text-2xl font-semibold py-2">{question}</h3>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleQuiz;