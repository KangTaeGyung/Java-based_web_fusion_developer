// Lifecycle.js
// TODO: 리액트의 라이프사이클
// 리액트 함수 컴포넌트 단축키 : rfce
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

// 라이프 사이클 함수(훅 함수)
// 컴포넌트 생명주기 : 생성 - 수정 - 소멸
// 라이프사이클(생명주기)함수 자동 실행(각 주기마다)
function A_Lifecycle() {

    // 변수 정의
    let [element, setElement] = useState(true);
    // 생명주기 함수 : 생성
    // 사용법 :
    //    useEffect(()=>{실행문}, [])
    useEffect(() => {
        // 최초 컴포넌트 생성시 실행됨(1번만 실행)
        console.log("mount Call")
    }, [])

    // 생명주기 함수 : 수정
    useEffect(()=>{
        console.log("update call :" + element)
    },[element])

    // 클릭이벤트 함수
    const handleClick = () => { 
        // element 값 변경하면 화면 자동 갱신
        setElement(false);
     }
  return (
    <div>
        <h2>This is Lifecycle</h2>
        <button onClick={handleClick}>클릭하세요</button>
    </div>
  )
}

export default A_Lifecycle