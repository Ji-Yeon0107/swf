import React, {useState, useEffect} from 'react';
import {questions} from '../data/questions'
import Link from "next/link";

export const Questions = (props) => {
    
    const [test, setTest] = useState(false);
    const [index, setIndex] = useState(0);

    const nextQuestion = () =>{
        setTimeout(()=>{
            setTest(true);
            setIndex(index+1);
        },600)
        clearTimeout();
    }
    
    // if(index === 14) {
        
    // }

    // 보기 위치 무작위 배치
    useEffect(()=>{
        const checkAnswer = () => {
            var a = document.querySelector('.answer-list');
            console.log(a)
            for (var i = a.children.length; i >= 0; i--) {
                a.appendChild(a.children[Math.random() * i | 0]);
            }
        }
        checkAnswer();
    })

// 마지막문제를 풀면 화면 이동
    return(
        <div>
            <div className="bar-box">
                <div className="bar">

                </div>
            </div>
            {
                test
                ?(
                    <div>
                        <div>문제{index+1}. {questions[index].Q}</div>
                        <div>이미지</div>
                        <div className="answer-list">
                            <div className="correct" onClick={()=>{
                                //테두리생기게 혹은 배경색바뀌게
                                nextQuestion();
                                props.setScore(props.score+questions[index].score);
                            }
                            }>{questions[index].correct}</div>
                            <div onClick={()=>{
                                
                                nextQuestion()
                            }
                            }>{questions[index].incorrect}</div>
                        </div>
                        <div>(확인용)현재점수:{props.score}</div>
                    </div>
                )
                :(
                    <div>
                    <div>문제1. {questions[0].Q}</div>
                    <div>이미지</div>
                    <div className="answer-list">
                        <div className="correct" onClick={()=>{
                            nextQuestion();
                            props.setScore(props.score+questions[index].score);
                        }
                        }>{questions[0].correct}</div>
                        <div onClick={()=>{
                            
                            nextQuestion()
                        }
                        }>{questions[0].incorrect}</div>
                    </div>
                </div>
                )
            }

            <Link href={`/CheckResult?name=checkresult`}>
                    결과 확인하기
            </Link>

        </div>
    )
}