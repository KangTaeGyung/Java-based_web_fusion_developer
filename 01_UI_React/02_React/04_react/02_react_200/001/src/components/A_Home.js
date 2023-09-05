// Home.js
// TODO: 모든 자료형 출력해보기
// 자식 컴포넌트
// 함수컴포넌트 단축키 : rfce
import React from "react";

// 컴포넌트 사용 why? 코드 재사용(코드 길이 작아짐)
// 리액트 화면출력(JSX 사용법) : {}
// JSX 사용법 : 자바스크립트 사용법 +
//            HTML 사용법 같이 사용
// 장점 : 바닐라 ( document.querySelector(선택자).innerHTML)
function A_Home() {
  // 변수 정의(useState())
  let array = ["a", "b", "c"];
  let input = <b>문자열 출력되나요?</b>;

  //   함수
  const testFunc = () => {
    return "함수입니다.";
  };

  // 클릭 이벤트 함수
  const myClick = () => { 
    alert("클릭했어요!!!");
   }

  return (
    <div>
       {/* 1) 모든 자료형 출력해보기 */}
      {/* 문자열 출력 : O */}
      {"문자열 출력될까요?"}
      {input}
      {<b>문자열 출력되나요2?</b>}

      {/* 숫자 계산도 됨 : O */}
      {1 * 2 + 3 - 2}
      <br />

      {/* 문자열 붙이기 : O */}
      {"abc" + "가나다"}
      <br />

      {/* {<태그>{문자열}</태그>} : O */}
      {<b>{"안녕하세요"}</b>}
      <br />

      {/* 숫자 출력 : O */}
      {123456}
      <br />

      {/* 배열(숫자,문자) 출력 : O */}
      {["가", "나", "다"]}
      <br />
      {[1, 2, 3]}
      <br />
      {array}
      <br />

      {/* 함수 출력 */}
      {testFunc() + " 이것도 될까요?"}
      <br/>

      {/* 3항 연산자 : 조건식 */}
      {/* 사용법: (조건식==true)? 참 : 거짓 */}
      {true? "true" : "false"}  
      <br/>

      {false? "true" : "false"}  
      <br/>

      {/* 2) html 태그 속성에 {} 넣어보기 : O */}
      <a href={"http://www.naver.com"}>네이버</a>
      <br/>
      <button onClick={myClick}>클릭하세요</button>

      {/* 3) 자바스크립트 함수 호출 :  */}
      {/* {alert("안녕하세요")} */}
      {console.log("이거도 출력되나?")}
      <br/>
      {/* 오늘 요일(1 ~ 7) */}
      {new Date().getDay()}
      <br/>
      {new Date().getFullYear() + "년"}
      <br/>
      {(new Date().getMonth()+1) + "월"}

      {/* 4) 화면에 출력하면 안되는것 */}
      {/* 참/거짓 은 화면에 표시 안됨 */}
      {true}

      {/* 객체 화면 표시 : X, 에러발생 */}
      {/* {{name:"강태경", email:"forbob@naver.com"}} */}
      {/* 배열객체 화면 표시 : x, 에러발생 */}
      {/* {[{name:"강태경", email:"forbob@naver.com"}]} */}
      {/* if문 ? X , 에러 발생 */}
      {/* {if(true){return "true"}} */}
      {/* for문 ? x, 에러 발생 */}
      {/* {for(let i=1;i<2;i++){console.log("aaa")}} */}
    </div>
  );
}

export default A_Home;
