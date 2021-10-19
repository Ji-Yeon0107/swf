import React, {useState} from 'react'
import { useRouter } from "next/router";
import Head from './Head'

const Result = () => {
    const router = useRouter();
    
    const test = () => {

        Kakao.Link.createCustomButton({
  container: '.kakao-link-btn',
  templateId: 63843,
  templateArgs: {
    'title': '제목 영역입니다.',
    'description': '설명 영역입니다.'
  }
});

    }

    
  
    return (
      <div>
          <Head />
        <p className="kakao-link-btn" onClick={test}>결과입니당</p>
    </div>
    );
  }

export default Result;