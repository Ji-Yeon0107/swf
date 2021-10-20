import Link from "next/link";
import React, {useState} from 'react'
import {Questions} from '../components/Questions'
import{questions} from '../data/questions'
import Head from './Head'
import Result from "./Result"

const Home = () => {

    const [start, setStart]= useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);


    return(
        <div>
            <Head></Head>
           
            <p>스우파 과몰입꾼 테스트</p>
            {
                start
                ?(
                    <Questions score={score} setScore={setScore} showResult={showResult} setShowResult={setShowResult} ></Questions>
                )
                : (
                    <>
                        <button onClick={(e)=>{
                        e.preventDefault();
                        setStart(true);
                        }}>시작하기</button>
                    </>
                )
            }
            
            

            
        </div>
       
    )
}

export default Home;