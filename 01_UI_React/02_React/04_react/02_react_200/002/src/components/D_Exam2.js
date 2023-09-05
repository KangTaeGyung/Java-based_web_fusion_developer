// Exam2.js
// TODO : 연습문제 : 아래 생명주기 함수 2개를
// TODO : 완성하세요.
// 단축키 : rfce
import React, { useState, useEffect } from "react";

function D_Exam2() {
  // TODO : 연습문제 : 아래 생명주기 함수 2개를
  // TODO : 완성하세요.
  const [tmpState2, setTmpState2] = useState(true);

  // 생명주기 함수 : 생성
  // 출력 : mount call
  // useEffect() 함수
  useEffect(() => {
    console.log("mount call");
  }, []);

  // 생명주기 함수 : 업데이트 (tmpState2 감시)
  // tmpState2 변수가 true -> false 변경되면
  // 콘솔에 false 출력하세요
  // useEffect() 함수 사용
  useEffect(() => {
    console.log(tmpState2); // 변수값 바뀌면 실행
  }, [tmpState2]);

  // 클릭 이벤트 함수
  const handleClick = () => {
    // let tmpVal = tmpState2;
    setTmpState2(false); // 자동 화면 갱신 , 변수바뀜
  };

  return (
    <div>
      <h2>[ THIS IS shouldComponentUpdate FUCNTION ]</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default D_Exam2;
