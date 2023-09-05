// Props.js
// TODO: 부모 -> 자식 데이터 전송
// 리액트 함수 컴포넌트 단축키 : rfce
import React from 'react'
import {useEffect } from "react"

// 부모 -> 자식 데이터 전송:
// 사용법 :부모에서 <자식컴포넌트 변수명="값"/> 전송
//        (자식) 함수명(props) { props.변수명 }
function Props(props) {

    // 생명주기 함수 : 생성 (자동 실행됨)
    useEffect(()=>{
        console.log("prop_value : " 
                         + props.prop_value);
    },[])

  return (
    <div>Props</div>
  )
}

export default Props