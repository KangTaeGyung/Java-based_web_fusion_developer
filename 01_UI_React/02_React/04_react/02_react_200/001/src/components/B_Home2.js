// Home2.js
// TODO: 화면 바인딩 
// 자식컴포넌트
// 함수컴포넌트 단축키 : rfce
// useState() 훅(hook) 함수 사용시 import 필요
// 사용법 : import {useState} from 'react'
import React, {useState} from 'react'

function B_Home2() {
    // 일반 변수 정의 : 
    // hello 변수의 값이 중간에 변경되었을때 화면갱신
    // 일어나지 않음.
    let hello = "안녕하세요";

    // useState 이용한 변수 정의
    let [element, setElement] = useState("안녕");

    // 클릭이벤트 함수
   const myClick = () => { 
        hello = "안녕하세요2";
    }

    // 단방향 바인딩 : 리액트 (변수 변경 -> 화면 갱신)
    //                 (화면 변경 -> 변수 갱신 x)
    // 화면 자동 갱신 : 데이터 바인딩(화면 <=> 변수)
    const myClick2 = () => { 
        // set변수명(변경값) : 변경값이 자동으로 
        //                     화면에 출력
        setElement("안녕2");
     }

  return (
    <div>
        {hello}
        <button onClick={myClick}>클릭하세요</button>
        <br/>
        {element}
        <button onClick={myClick2}>클릭하세요2</button>
    </div>
    
  )
}

export default B_Home2