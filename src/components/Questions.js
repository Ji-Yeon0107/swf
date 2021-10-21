import React, {useState, useEffect} from 'react';
import {questions} from '../data/questions'
import Link from "next/link";
import { useRecoilState } from 'recoil';
import { scoreState } from '../states';
import Image from 'next/image'


export const Questions = () => {
    
    const [test, setTest] = useState(false);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useRecoilState(scoreState);

    const nextQuestion = () =>{
        setTimeout(()=>{
            setTest(true);
            setIndex(index+1);
        },500)
        clearTimeout();
    }
    


    useEffect(()=>{
        if(test) {
            if(index<questions.length) {
// 클래스명 제거
const selectedAnswer = document.querySelector('.selected')
console.log('reload')
selectedAnswer.classList.remove('selected');
selectedAnswer.className +=' pre-select'


                // 진행바 길이 (width)변화
                let pickedBar = document.querySelector('.bar');
                pickedBar.style.width = `calc((100% / ${questions.length}) * ${index+2})`

                // 보기 위치 무작위 배치
                const checkAnswer = () => {
                    var a = document.querySelector('.answer-list');
                    for (var i = a.children.length; i >= 0; i--) {
                        a.appendChild(a.children[Math.random() * i | 0]);
                    }
                }
                checkAnswer();
            }
        }

        

    },[index])

    
    // useEffect(()=>{
    //     const test2 = document.querySelector(".answer-number>div");
    //     const test3 = document.querySelector(".answer-list>div");
    //     // test2.style.height = test3.style.height
    //     console.log(test2.style.height)
    // console.log(test3.style.height)
    // })

    
// 문제 숫자 0 제어
const trimIndex = ()=>{
    const indexPlusZero = "0"+String(index+1)
    const trimedIndex = indexPlusZero.substr(-2)
    return (
        trimedIndex
    )
}

// 마지막문제를 풀면 화면 이동
const showPage = ()=> {
if(test) {
    if(index<questions.length){
        return(
            <div>
                <div className="question-number">{trimIndex()}</div>
                <div className="question-imgbox">
                    <img
                        className="question-img"
                        src={`/q${index+1}.jpg`}
                        alt="question"
                    />
                    </div>
                <div className="question">{questions[index].Q}</div>
                <div className="answer">
                    {/* <ul className="answer-bg">
                        <li className="answer-bg-list"></li>
                        <li className="answer-bg-list"></li>
                    </ul> */}
                    <div className="answer-box">
                        {/* <div className="answer-number">
                            <div>A. </div>
                            <div>B. </div>
                        </div> */}
                        <div className="answer-list">
                            <div className="correct answer-list-item pre-select" onClick={function(){
                                //테두리생기게 혹은 배경색바뀌게
                                

                                const selectedAnswer = document.querySelector('.correct');
                

                                selectedAnswer.className +=' selected'

                                selectedAnswer.classList.remove('pre-select');
                                nextQuestion();
                            setScore(score+questions[index].score);
                            
                            
                            }
                            }>{questions[index].correct}
                            
                            </div>
                            <div className="incorrect pre-select answer-list-item" onClick={function(){
                               const selectedAnswer = document.querySelector('.incorrect');
                               

                               selectedAnswer.className +=' selected'
                               selectedAnswer.classList.remove('pre-select');
                                nextQuestion();
                            }
                            }>{questions[index].incorrect}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    } else {
    return (
        <div>
            <h1>결과를 확인해보세요 과연 나의 점수는?</h1>
            <Link href={`/Result?name=${score}`} >
                결과 확인하기
            </Link>
        </div>
    )
}
}else{
        return(
        <div>
            <div className="question-number">{trimIndex()}</div>
            <div className="question-imgbox">
                <img
                    className="question-img"
                    src={`/q1.jpg`}
                    alt="question"
                />
            </div>
            <div className="question">{questions[0].Q}</div>
            <div className="answer">
                {/* <ul className="answer-bg">
                    <li className="answer-bg-list"></li>
                    <li className="answer-bg-list"></li>
                </ul> */}
                <div className="answer-box">
                    {/* <div className="answer-number">
                        <div>A. </div>
                        <div>B. </div>
                    </div> */}
                    <div className="answer-list ">
                        <div className="correct answer-list-item pre-select" onClick={()=>{

                           const selectedAnswer = document.querySelector('.answer-list>div')
                           
                           selectedAnswer.className +=' selected'
                           selectedAnswer.classList.remove('pre-select');

                            nextQuestion();
                            setScore(score+questions[index].score);
                            
                        }
                        }>
                            {questions[0].correct}
                        </div>
                        <div className="pre-select  answer-list-item" onClick={()=>{
                         const selectedAnswer = document.querySelector('.answer-list>div')

                         selectedAnswer.className +=' selected'
                         selectedAnswer.classList.remove('pre-select');

                            nextQuestion();
                        }
                        }>{questions[0].incorrect}</div>
                    </div>
                </div> 
            </div>
        </div>
        )
}
}

    return(
        <div className="wrapper">
            <div className="inner">
            {
            index<questions.length
            ?(
                <div className="bar-box" style={barBoxStyle}>
                    <div className="bar" style={barStyle}></div>
                </div>
            )
            :null
            }
            {showPage()}
            </div>
        </div>
    )
}

const barBoxStyle = {
    width:"100%",
    height:"6px",
    background:"rgba(255,255,255,0.6)",
    marginBottom:"12px",
}

const barStyle = {
    width: `calc(100% / ${questions.length})`,
    height:"100%",
    background:"rgba(255,255,255,1)",
    // marginTop:"30px",
}
