// Exam.js
// 자식 컴포넌트 
import React from 'react'
import { useState } from 'react';

function C_Exam() {
    // ToDO : 아래 데이터 바인딩 이용해서
    // TODO : 클릭시 아래 결과대로 코딩하세요
    // TODO : 화면 : "안녕하세요"
    // TODO : 결과 : "안녕"
    // 변수 정의 : element => "안녕하세요"
    let [element, setElement] = useState("안녕하세요")

    // 클릭이벤트 함수명 : myClick3
    // 결과 출력(<b></b>) : 안녕(굵은 글씨)
    const myClick = () => { 
        // 데이터 바인딩 : 자동화면 갱신
        setElement(<b>안녕</b>)
     }
  return (
    <div>
        {element}
        <br/>
        <button onClick={myClick}>문자열변경(b태그 적용)</button>
    </div>
  )
}

export default C_Exam