// 문제 풀이 : 함수 정의
function innerhtml() {
    // 현재 시간 가져오기
    let now = new Date();

    // innerHTML 에 출력
    document.querySelector("#output")
        .innerHTML = now
}