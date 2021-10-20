import React, {useEffect, useState} from 'react'
import { useRouter } from "next/router";
import Head from './Head'

const Result = (props) => {
    const router = useRouter();
    
    const test = () => {
        Kakao.Link.createCustomButton({
  container: '.kakao-link-btn',
  templateId: 63843,
  templateArgs: {
'score':`${router.query.name}`
    'title': '제목 영역입니다.',
    'description': '설명 영역입니다.'
  }
});

    }

    // console.log('점수'+props.score+router.query.name)
  
    return (
      <div>
        <Head />
        <h1>당신의 점수는 {router.query.name} 점 입니다.</h1>
        <button className="kakao-link-btn" onClick={(e)=>{
          e.preventDefault();
          test()
        }}>결과 공유하기</button>
    </div>
    );
  }

export default Result;
