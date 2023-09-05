// 리액트 프로젝트 생성 : npx create-react-app 프로젝트명
// cd(폴더 들어가기 명령어) 프로젝트명 :
//          폴더 생성됨(프로젝트명)
// npm start     : 리액트 서버 띄우기 명령어
// 인터넷 주소 : http://www.naver.com(중복x)
// URL(웹페이지 주소: 사람이 알기쉬움) :
//                  www.naver.com
// IP(숫자 4개) 주소(컴퓨터가 알기쉬움) : (중복X)
//                  192.168.0.142
// port : 숫자(중복되면 안됨)
// IP주소:port == 풀네임 인터넷 주소
// 예) http://192.168.0.142:3000
//     http://localhost:3000
// 웹 주소(리액트서버 주소) : http://localhost:3000
// App 컴포넌트 : 1st 페이지(최상위 부모 컴포넌트)
// 리액트/뷰/앵귤라 컴포넌트로 만들어서 코딩하는 언어
// function App() : 함수 컴포넌트(리액트)
// 사용법 : 
// function App() {
//    return (
//      <div>내용</div>
//    ) 
// }
// 예제 : 부모 컴포넌트 App 에 
//    Home 자식 컴포넌트를 추가하세요 (js 파일 생성)

import A_Home from "./components/A_Home";
import B_Home2 from "./components/B_Home2";
import C_Exam from "./components/C_Exam";
import D_ImportComp from "./components/D_ImportComp";
import "./App.css"

function App() {
  return (
    // 자식 컴포넌트 추가
    // 최외곽에 <div></div> 1개만 존재해야함
    <div className="App">
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
      </div>

      {/* 자식 컴포넌트 추가 */}
      {/* <A_Home></A_Home> */}
      {/* 자식 컴포넌트2 추가 */}
      {/* <B_Home2/> */}
      {/* <C_Exam/> */}
       <D_ImportComp/>
    </div>
  );
}

export default App;
