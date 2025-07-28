// 1. 조작할 HTML 요소를 선택(Select)합니다.
// 'main-heading' 이라는 id를 가진 h1 요소를 찾아서 heading 변수에 저장
const heading = document.querySelector('#main-heading');
// 'change-btn' 이라는 id를 가진 button 요소를 찾아서 button 변수에 저장
const button = document.querySelector('#change-btn');

// 2. 버튼에 이벤트 리스너(Event Listener)를 추가합니다.
// 'click' 이벤트(사용자가 버튼을 클릭하는 것)가 발생하면, 지정된 함수를 실행합니다.
button.addEventListener('click', () => {
    // 3. 이벤트가 발생했을 때 실행할 동작을 정의합니다.
    heading.textContent = '반갑습니다!'; // h1 요소의 텍스트 내용을 변경
    heading.style.color = 'blue'; // h1 요소의 글자 색상을 파란색으로 변경

    console.log('버튼이 클릭되어 제목이 변경되었습니다.'); // 개발자 도구 콘솔에 메세지 출력
});