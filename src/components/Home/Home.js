import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import HomeQuiz from '../HomeQuiz/HomeQuiz';

const Home = () => {
    const quizsData = useLoaderData();
    const quizs = quizsData.data;
    
    return (
        <>
            <div>
                <Hero></Hero>
            </div>
            <div className='py-20  container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    quizs.map(quiz => <HomeQuiz quiz={quiz} key={quiz.id}></HomeQuiz>)
                }
            </div>
        </>
    );
};

export default Home;