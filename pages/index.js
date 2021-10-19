import Link from "next/link";
import React, {useState} from 'react'
import {Questions} from '../components/Questions'
import Head from './Head'

const Home = () => {

    const [start, setStart]= useState(false);
    const [score, setScore] = useState(0);



    return(
        <div>
            <Head></Head>
           
            <p>스우파 과몰입꾼 테스트</p>
            {
                start
                ?(
                    <Questions score={score} setScore={setScore}></Questions>
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