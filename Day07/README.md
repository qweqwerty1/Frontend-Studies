# Day07: JavaScript 이벤트와 Form 다루기, classList

## 개요

이 문서는 JavaScript를 사용하여 사용자와 더 깊이 상호작용하는 방법을 다룹니다. 사용자의 입력을 받고(Form), 그 입력에 따라 동적으로 새로운 HTML 요소를 생성하며, CSS 클래스를 제어하여 요소의 상태(모양)를 변경하는 실용적인 예제를 학습합니다. 이를 통해 웹 애플리케이션의 기본적인 데이터 처리 흐름을 이해합니다.

## 학습 목표

* `form`의 `submit` 이벤트를 이해하고, `event.preventDefault()`로 기본 동작을 제어할 수 있다.
* `input` 태그의 값을 `.value` 속성으로 읽어올 수 있다.
* `document.createElement()`와 `.append()`를 사용하여 페이지에 새로운 요소를 동적으로 추가할 수 있다.
* `element.style` 대신 `element.classList`를 사용하여 스타일을 제어하는 것의 이점을 이해한다.
* `.classList.add()`, `.classList.remove()`, `.classList.toggle()`을 사용하여 요소의 클래스를 조작할 수 있다.

## 1. Form 이벤트 다루기

HTML의 `<form>` 태그는 기본적으로 내부의 `button`이나 `input[type="submit"]`을 클릭했을 때, 양식 데이터를 서버로 보내고 페이지를 **새로고침**하는 동작을 합니다. 하지만 JavaScript로 모든 것을 처리하는 현대적인 웹 애플리케이션(SPA)에서는 페이지가 새로고침되는 것을 원하지 않습니다.

이때 **`event.preventDefault()`** 메서드를 사용합니다. 이벤트 리스너의 콜백 함수는 첫 번째 인자로 **이벤트 객체(`event`)**를 받으며, 이 객체의 `preventDefault()`를 호출하면 해당 이벤트의 기본 동작을 막을 수 있습니다.

```javascript
const myForm = document.querySelector('#my-form');

myForm.addEventListener('submit', (event) => {
    // 이 한 줄이 페이지 새로고침을 막아줍니다.
    event.preventDefault(); 
    console.log('Form이 제출되었지만, 페이지는 그대로입니다.');
});
```

## 2. 입력값 가져오기 (.value)

`<input>`, `<textarea>`, `<select>` 와 같은 폼 요소들은 사용자가 입력하거나 선택한 값을 .value라는 속성에 저장합니다. JavaScript에서는 이 .value 속성을 읽어와 사용자의 입력을 얻을 수 있습니다.

```JavaScript
const nameInput = document.querySelector('#name-input');
const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', () => {
    const userName = nameInput.value; // 입력창의 현재 텍스트를 가져옴
    alert(`안녕하세요, ${userName}님!`);
});
```

## 3. 동적으로 HTML 요소 추가하기

JavaScript를 사용하면 기존에 없던 새로운 HTML 요소를 만들어 페이지에 추가할 수 있습니다.

* document.createElement('태그이름'): 지정된 태그 이름의 HTML 요소를 생성합니다. 이 요소는 아직 메모리에만 존재하며, 페이지에는 보이지 않습니다.
* 부모요소.append(자식요소): 생성된 자식 요소를 지정된 부모 요소의 마지막 자식으로 추가합니다.

```JavaScript
// 1. 'p' 태그 요소를 만든다.
const newParagraph = document.createElement('p');

// 2. 만든 요소에 텍스트를 넣는다.
newParagraph.textContent = "이것은 동적으로 추가된 문단입니다.";

// 3. body 태그에 새로 만든 요소를 추가한다.
document.body.append(newParagraph);
```

## 4. 더 나은 스타일링 방법 (classList)

Day 6에서는 .style 속성으로 CSS를 직접 변경했습니다. (element.style.color = 'blue'). 이 방법은 간단하지만, 여러 스타일을 변경해야 하거나 조건부 스타일링이 복잡해지면 JavaScript 코드가 지저분해집니다.

더 좋은 방법은 CSS에 미리 스타일(클래스)을 정의해두고, JavaScript에서는 이 클래스를 추가하거나 제거하는 것입니다. 이를 **"관심사의 분리(Separation of Concerns)"**라고 합니다. 스타일은 CSS가, 동작은 JavaScript가 책임지게 하는 것입니다.

element.classList는 요소의 클래스 목록을 제어하는 유용한 메서드를 제공합니다.

* .add('클래스명'): 지정된 클래스를 추가합니다.

* .remove('클래스명'): 지정된 클래스를 제거합니다.

* .toggle('클래스명'): 클래스가 있으면 제거하고, 없으면 추가합니다. 한 번의 클릭으로 켰다 껐다 하는 기능에 매우 유용합니다.

* .contains('클래스명'): 지정된 클래스가 있는지 확인하고 true 또는 false를 반환합니다.

```JavaScript
// CSS
.active {
    background-color: yellow;
    font-weight: bold;
}
```
```JavaScript

// JavaScript
const myDiv = document.querySelector('#my-div');

// myDiv에 'active' 클래스를 추가
myDiv.classList.add('active');

// myDiv를 클릭할 때마다 'active' 클래스를 토글
myDiv.addEventListener('click', () => {
    myDiv.classList.toggle('active');
});
```
## 5. 실습 과제
제시된 예제를 바탕으로 To-Do 리스트 애플리케이션을 만듭니다.

1. 사용자가 입력창에 텍스트를 입력하고 '추가' 버튼을 클릭하면, 페이지가 새로고침되지 않고 ul 목록에 새로운 li 항목이 추가되어야 합니다.

2. 입력창은 항목이 추가된 후 자동으로 비워져야 합니다.

3. 목록의 각 li 항목을 클릭하면 .done 클래스가 토글되면서 취소선 스타일이 적용/해제되어야 합니다.