
import React, {useState, useEffect} from 'react';
import {Questions} from '../components/Questions';
// import Head from './Head'
import { useRecoilState } from 'recoil';
import { startState } from '../states/index';
import { scoreState } from '../states/index';
import { showResultState } from '../states/index';

const Home = () => {

    const [start, setStart] = useRecoilState(startState);
    const [score, setScore] = useRecoilState(scoreState);
    const [showResult, setShowResult] = useRecoilState(showResultState);

    useEffect(()=>{
        setStart(false);
        setScore(0);
    },[])
    
    return(
        <div>
            {
                start
                ?(
                    <Questions showResult={showResult} setShowResult={setShowResult} ></Questions>
                )
                : (
                    <>
                        <p>
                            <img className="logo" src="/logo.png" alt="logo" />
                        </p>
                        <button className="start-button" onClick={(e)=>{
                        e.preventDefault();
                        setStart(true);
                        }}>시작!!</button>
                        <div>광고</div>
                    </>
                )
            }
            
            

            
        </div>
       
    )
}

export default Home;