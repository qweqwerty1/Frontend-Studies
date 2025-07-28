# Day06: JavaScript 기초 및 DOM 조작 입문

## 개요

이 문서는 웹 페이지를 동적으로 만들기 위한 프로그래밍 언어인 **JavaScript**의 기초를 다룹니다. HTML, CSS가 웹의 구조와 스타일을 담당했다면, JavaScript는 사용자와의 상호작용, 데이터 처리, 비동기 통신 등 웹 페이지의 '동작'을 책임집니다. 오늘은 JavaScript를 HTML에 적용하는 방법과, JavaScript가 HTML 문서를 어떻게 인식하고 제어하는지에 대한 핵심 개념인 **DOM(Document Object Model)** 조작법을 학습합니다.

## 학습 목표

* JavaScript의 역할과 웹 애플리케이션에서의 중요성을 이해한다.
* HTML 문서에 `<script>` 태그를 사용하여 JavaScript를 포함하는 방법을 안다.
* 변수(variable)와 같은 기본적인 JavaScript 문법을 이해한다.
* DOM이 무엇인지 설명하고, 왜 필요한지 이해한다.
* `document.querySelector()`를 사용하여 HTML 요소를 선택할 수 있다.
* `.addEventListener()`를 사용하여 사용자 이벤트(클릭 등)를 처리할 수 있다.
* 선택된 요소의 텍스트(`.textContent`)나 스타일(`.style`)을 변경할 수 있다.

## 1. JavaScript란?

JavaScript는 웹 브라우저에서 실행되는 **인터프리터 방식의 프로그래밍 언어**입니다. 초창기에는 단순한 애니메이션 효과나 폼 유효성 검사에 사용되었지만, 현재는 복잡한 단일 페이지 애플리케이션(SPA)을 만드는 데 사용되는 핵심 기술로 발전했습니다. JavaScript를 통해 웹 페이지는 단순한 문서를 넘어 사용자와 소통하는 '애플리케이션'이 될 수 있습니다.

## 2. HTML에 JavaScript 추가하기

JavaScript를 HTML에 추가하는 가장 권장되는 방법은 별도의 `.js` 파일을 만들어 `<script>` 태그로 연결하는 것입니다.

```html
<script src="path/to/script.js"></script>
```

`<script>` 태그는 일반적으로 `<body>` 태그가 닫히기 바로 직전에 위치시킵니다. 그 이유는 브라우저가 HTML 문서를 위에서 아래로 순서대로 읽기 때문입니다. 만약 JavaScript가 HTML 요소들을 조작하려 할 때 아직 해당 요소가 화면에 그려지지 않았다면 오류가 발생할 수 있습니다. 스크립트를 맨 아래에 두면 모든 HTML 요소가 로드된 후에 JavaScript가 실행되는 것을 보장할 수 있습니다.

## 3. DOM (Document Object Model) 이란?
브라우저가 HTML 문서를 읽으면, 그 문서를 JavaScript가 이해하고 조작할 수 있는 객체(Object) 형태의 모델로 변환합니다. 이것을 DOM이라고 부릅니다. DOM은 문서를 나무와 같은 계층 구조(Tree Structure)로 표현하며, document라는 최상위 객체로부터 시작하여 `<html>, <body>, <h1>` 등 모든 태그에 접근할 수 있는 통로를 제공합니다.

    JavaScript가 HTML을 변경할 수 있는 이유는, 바로 이 DOM이라는 중간 다리가 있기 때문입니다.

## 4. JavaScript로 DOM 조작하기

JavaScript로 웹 페이지를 동적으로 만드는 과정은 보통 아래의 3단계를 따릅니다.

1. 조작할 HTML 요소를 선택한다 (Select).

2. 선택된 요소에 어떤 이벤트가 발생하기를 기다린다 (Event Listen).

3. 이벤트가 발생하면, 선택된 요소의 내용을 변경한다 (Manipulate).

주요 메서드 및 속성
* document.querySelector('CSS 선택자'): CSS 선택자와 일치하는 첫 번째 HTML 요소를 반환합니다. 가장 보편적이고 편리한 요소 선택 방법입니다.

    * 예시: document.querySelector('#main-heading'), document.querySelector('.container')

* .addEventListener('이벤트이름', 실행할함수): 선택된 요소에 이벤트 리스너를 부착합니다. 지정된 이벤트가 발생하면 실행할함수가 호출됩니다.

    * 이벤트이름: 'click', 'mouseover', 'keydown' 등 다양한 이벤트가 있습니다.

    * 실행할함수: 이벤트가 발생했을 때 실행될 코드를 담고 있는 함수입니다.

* .textContent: 요소의 텍스트 내용을 가져오거나 변경합니다.

* .style.속성이름: 요소의 인라인 스타일을 변경합니다. (CSS 속성 이름은 camelCase로 변환됩니다. 예: background-color -> backgroundColor)

## 5. 실습 과제
제시된 예제를 바탕으로 JavaScript를 사용하여 간단한 상호작용을 구현합니다.

1. day06-javascript 폴더에 index.html, style.css, script.js 파일을 생성하고 예제 코드를 작성합니다.

2. 버튼을 클릭했을 때 `<h1>` 태그의 텍스트 내용과 색상이 바뀌는 것을 확인합니다.

3. script.js 파일에서 textContent나 style.color의 값을 다른 원하는 값으로 변경해보고, 어떻게 바뀌는지 실험합니다.

4. 브라우저의 개발자 도구(F12) Console 탭을 열어 console.log()의 결과가 제대로 출력되는지 확인합니다.