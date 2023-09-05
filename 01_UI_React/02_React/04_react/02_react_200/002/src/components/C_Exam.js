// Exam.js
// 단축키 : rfce
import React from 'react'
import { useEffect } from 'react';
// TODO : props 데이터를 받아서 useEffect 에
//  (props 데이터 :  props.prop_value = "FromApp")
//  생명주기함수(생성) 에 아래와 같이 출력하세요
//  결과출력 :  "FromApp"
//             "useEffect : mount Call"
function C_Exam(props) {

    // 생명주기함수(생성)
    useEffect(()=>{
        // 1) consoel.log : props.prop_value
        console.log(props.prop_value);
        // 2) console.log : "useEffect : mount Call"
        console.log("useEffect : mount Call");
        // 실행문 추가
    },[]);

  return (
    <div>Exam</div>
  )
}

export default C_Exam