// importComp.js
// TODO: 리액트 컴포넌트 디자인 적용하기 : css 파일 적용
// TODO: 프로젝트가 커질수록 디자인 클래스명이 중첩될 수있다.(엉뚱한 디자인이 적용될 수 있음)
// TODO: 1) 공통 디자인 적용 외에는 주로 클래스선택자 또는 id 선택자를 만들어서 디자인 적용할것 : 태그 선택자 지양
// TODO: 2) 클래스명은 중첩되지 않게 유일하게 이름짓기 규칙을 정함 : dms01-h2 ~ dms0n-h2 등 코드 붙이고 클래스명 짓기 등(팀별로 협의)
import React from 'react'
import "../assets/D_ImportComp.css"

function D_ImportComp() {
  return (
    <div>
        <h2 className='dms01-h2'>importComp</h2>
    </div>
  )
}

export default D_ImportComp