# Day02 : CSS 기본 스타일링

## 학습 목표

* CSS의 기본적인 역할과 적용 방법 이해하기 (인라인, 내부, 외부 스타일시트)

* 가장 기본적인 CSS 선택자(Selector)와 속성(Property) 익히기

* 텍스트 색상, 배경색, 글꼴 크기 등 스타일 변경 실습하기


## 1. CSS란 무엇인가?

CSS는 HTML 문서의 스타일을 정의하는 언어예요. HTML이 웹 페이지의 구조를 담당한다면, CSS는 색상, 글꼴, 간격, 레이아웃 등 시각적인 부분을 담당하죠. CSS 덕분에 웹 페이지를 훨씬 멋지고 보기 좋게 만들 수 있어요.

## 2. CSS 적용 방법

CSS를 HTML 문서에 적용하는 방법은 크게 세 가지가 있어요. 각 방법마다 장단점이 있으니 상황에 맞춰 사용하면 돼요.

### 2.1. 인라인 스타일 (Inline Style)

HTML 태그의 style 속성 안에 직접 CSS 코드를 작성하는 방법이에요.

* 장점: 특정 요소에만 즉시 스타일을 적용할 때 편리해요.

* 단점: 스타일과 콘텐츠가 혼합되어 코드가 지저분해지고, 재사용이 어려워요. 여러 요소를 한 번에 변경하기 힘들어요.

```HTML
<p style="color: blue; font-size: 18px;">이 문단은 파란색이고 글자 크기가 18px입니다.</p>
```

### 2.2. 내부 스타일 (Internal/Embedded Style Sheet)

HTML 문서의 `<head>` 태그 안에 `<style>` 태그를 사용하여 CSS 코드를 작성하는 방법이에요.

* 장점: 한 HTML 문서 내의 여러 요소에 스타일을 적용할 수 있고, HTML 파일 하나로 관리가 가능해요.

* 단점: 여러 HTML 파일에 같은 스타일을 적용할 때는 각 파일마다 CSS를 복사해야 해서 비효율적이에요.

```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>내부 스타일 예제</title>
    <style>
        /* 여기에 CSS 코드를 작성합니다 */
        h1 {
            color: green;
            text-align: center;
        }
        p {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>내부 스타일 적용 제목</h1>
    <p>이 문단은 특정 글꼴과 줄 간격으로 표시됩니다.</p>
</body>
</html>
```

### 2.3. 외부 스타일 (External Style Sheet)

가장 일반적이고 권장되는 방법이에요. 별도의 .css 파일을 만들고 HTML 문서에서 이 파일을 연결하는 방식이죠.

* 장점:

    1. 코드 분리: HTML(구조)과 CSS(스타일)가 완전히 분리되어 코드가 깔끔하고 유지보수가 쉬워요.

    2. 재사용성: 하나의 .css 파일로 여러 HTML 파일에 동일한 스타일을 적용할 수 있어 효율적이에요.

    3. 캐싱: 브라우저가 CSS 파일을 캐싱하여 웹 페이지 로딩 속도를 향상시킬 수 있어요.

* 단점: 처음에는 .css 파일을 따로 만들어 연결해야 하는 번거로움이 있어요.

#### 적용 방법:

1. styles.css (원하는 이름으로) 파일을 생성하고 CSS 코드를 작성해요.

```CSS
/* styles.css */
body {
    background-color: lightblue;
    color: #333;
}

h1 {
    color: darkred;
    font-size: 40px;
}

p {
    margin-bottom: 10px;
}
```

2. HTML 파일의 `<head>` 태그 안에 `<link>` 태그를 사용하여 CSS 파일을 연결해요.

```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>외부 스타일 예제</title>
    <link rel="stylesheet" href="styles.css"> </head>
<body>
    <h1>외부 스타일 적용 제목</h1>
    <p>이 문단은 외부 스타일시트의 영향을 받습니다.</p>
</body>
</html>
```
* rel="stylesheet": 연결하는 문서가 스타일시트임을 명시해요.

* href="styles.css": 연결할 CSS 파일의 경로를 지정해요. (HTML 파일과 같은 폴더에 있다면 파일 이름만 적으면 돼요.)

## 3. 기본적인 CSS 선택자(Selector)와 속성(Property)

CSS는 "어떤 요소에(선택자) 어떤 스타일을(속성과 값)" 적용할지 정의해요.

```CSS
선택자 {
    속성: 값;
    속성: 값;
}
```

### 3.1. 주요 선택자

* 요소 선택자 (Type Selector): 특정 HTML 태그 이름에 스타일을 적용해요.

```CSS
p { /* 모든 <p> 태그에 적용 */
    color: black;
}
h1 { /* 모든 <h1> 태그에 적용 */
    font-size: 30px;
}
```

* 클래스 선택자 (Class Selector): HTML 요소에 class 속성을 부여하고, .클래스이름으로 선택하여 스타일을 적용해요. 여러 요소에 동일한 클래스를 적용하여 같은 스타일을 줄 수 있어 매우 유용해요.

```HTML
<p class="highlight">이 문단은 하이라이트 됩니다.</p>
<span class="highlight">이 텍스트도 하이라이트 됩니다.</span>
```
```CSS
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```
* 참고: id는 자바스크립트에서 특정 요소를 고유하게 식별할 때 주로 사용하고, CSS 스타일링에는 class를 더 많이 사용하는 경향이 있어요.

### 3.2. 자주 사용되는 CSS 속성 (Properties)

* color: 텍스트 색상

    * color: blue;

    * color: #FF0000; (16진수 코드)

    * color: rgb(255, 0, 0); (RGB 코드)

* background-color: 배경색

    * background-color: lightgray;

* font-size: 글꼴 크기

    * font-size: 20px;

    * font-size: 1.2em; (상대적인 크기)

* font-family: 글꼴 종류

    * font-family: 'Malgun Gothic', sans-serif; (쉼표로 여러 글꼴 지정 가능)

* text-align: 텍스트 정렬

    * text-align: center; (가운데 정렬)

    * text-align: left; (왼쪽 정렬)

    * text-align: right; (오른쪽 정렬)

* width: 너비

    * width: 50%; (부모 요소의 50%)

    * width: 200px;

* height: 높이

    * height: 100px;

* border: 테두리

    * border: 1px solid black; (두께, 종류, 색상)

* margin: 외부 여백 (요소 바깥쪽 여백)

    * margin: 10px; (상하좌우 10px)

    * margin: 10px 20px; (상하 10px, 좌우 20px)

    * margin-top: 5px; (위쪽 여백만)

* padding: 내부 여백 (요소 안쪽, 콘텐츠와 테두리 사이의 여백)

    * padding: 15px;

    * padding-left: 20px;

## 4. 실습 과제

첨부되는 my-first-page.html 및 style.css 참고