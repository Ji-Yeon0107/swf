import Link from "next/link";
import {useRouter} from "next/router"
import React, {useState} from 'react'


const CheckResult = (props) => {

    const router = useRouter();

    
    return(
        <div>
            {/* <div>{router.query.name}</div> */}
            <h1>결과를 확인해보세요 과연 나의 점수는?</h1>
            <Link href={`/Result?name=result`}><button>결과 확인하기</button></Link>
        </div>
    )
}
export default CheckResult