// Exam3.js
// TODO: <E_Exam3 name="처음 만난 파이썬" numOfPage={300}></E_Exam3> 부모에서 데이터 전송시 자식 컴포넌트를 코딩하세요
import React from 'react'

// 예제 : numOfPage 값으로(props) 숫자
function E_Exam3(props) {
  return (
    <div>
        {/* `` : 백틱(문자열) */}
        <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
        <h2>{`이 책의 총 ${props.numOfPage} 페이지입니다.`}</h2>
    </div>
  )
}

export default E_Exam3