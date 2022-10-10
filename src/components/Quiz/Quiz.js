import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);
    return (
        <div>
            <h3>This is quiz page</h3>
        </div>
    );
};

export default Quiz;