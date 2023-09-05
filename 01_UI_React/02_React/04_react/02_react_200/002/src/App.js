import C_Exam from "./components/C_Exam";
import D_Exam2 from "./components/D_Exam2";
import A_Lifecycle from "./components/A_Lifecycle";
import B_Props from "./components/B_Props";
import E_Exam3 from "./components/E_Exam3";
import F_Clock from "./components/F_Clock";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      {/* 자식 컴포넌트 추가 */}
      {/* <A_Lifecycle/> */}
      {/* 자식 컴포넌트2 추가 */}
      {/* 데이터 전달 : 부모 -> 자식 */}
      {/* <B_Props prop_value="FromApp.js"></B_Props> */}
      {/* 연습문제 : */}
      {/* <C_Exam prop_value="FromApp"></C_Exam> */}
      {/* 연습문제 2 */}
      {/* <D_Exam2/> */}
      {/* 예제 : 데이터 전달(부모->자식) 숫자 */}
      {/* props 2개 : 1개 문자열, 1개 숫자 */}
      {/* 단, 숫자는 {} 담아서 전송 */}
      {/* <E_Exam3 name="처음 만난 파이썬" numOfPage={300}></E_Exam3> */}
      {/* 컴포넌트 재사용: props 데이터만 변경 */}
      {/* <E_Exam3 name="처음 만난 AWS" numOfPage={400}></E_Exam3> */}
      <F_Clock/>
    </div>
  );
}

export default App;
