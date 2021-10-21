import React, {useEffect, useState} from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import { useRecoilState } from 'recoil'
import { startState } from '../states'
import { scoreState } from '../states';
// import Head from './Head'

const Result = () => {

    const router = useRouter();

    const [start, setStart] = useRecoilState(startState);
    const [score, setScore] = useRecoilState(scoreState);
    
    const test = () => {
        Kakao.Link.createCustomButton({
          container: '.kakao-link-btn',
          templateId: 63843,
          templateArgs: {
            'score': router.query.name,
  }
});

    }

useEffect(()=>{
  test();
})
useEffect(()=>{
  return ()=>{
    setStart(false);
    setScore(0);
  }
})

    return (
      <div>
        {/* <Head /> */}
        

        <h1>당신의 점수는 {router.query.name} 점 입니다.</h1>
        <button className="kakao-link-btn" onClick={(e)=>{
           e.preventDefault();
          test();
        }}>결과 공유하기</button>
        <Link href="/">테스트 하러가기</Link>
    </div>
    );
  }

export default Result;