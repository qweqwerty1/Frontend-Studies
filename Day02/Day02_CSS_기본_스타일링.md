# Day02 : CSS 기본 스타일링

## 개요

이 문서는 프론트엔드 스터디 둘째 날 학습한 **CSS(Cascading Style Sheets)**의 기본적인 개념, HTML 문서에 CSS를 적용하는 세 가지 방법(인라인, 내부, 외부 스타일), 그리고 웹 페이지의 시각적 요소를 제어하는 데 사용되는 주요 선택자 및 속성에 대한 내용을 담고 있습니다.

## 학습 목표

* CSS의 역할과 중요성을 이해한다.

* HTML 문서에 CSS를 적용하는 세 가지 방법을 설명하고 활용할 수 있다.

* 기본적인 CSS 선택자(요소, 클래스, 아이디)를 사용하여 특정 HTML 요소에 스타일을 적용할 수 있다.

* 자주 사용되는 CSS 속성(색상, 배경, 글꼴, 크기, 테두리, 여백 등)을 사용하여 웹 페이지를 스타일링할 수 있다.

## 1. CSS란 무엇인가?

CSS는 웹 페이지의 스타일과 레이아웃을 정의하는 데 사용되는 스타일 시트 언어입니다. HTML이 웹 페이지의 구조와 내용을 담당한다면, CSS는 그 내용을 어떻게 보여줄지(색상, 글꼴, 크기, 배치 등)를 결정합니다.

## 2. CSS 적용 방법

CSS는 다음과 같은 세 가지 방법으로 HTML 문서에 적용될 수 있습니다.

### 2.1. 인라인 스타일 (Inline Style)

HTML 요소의 style 속성 내에 직접 CSS 규칙을 작성하는 방법입니다.

* 용도: 특정 단일 요소에만 스타일을 적용할 때.

* 장점: 빠르게 스타일을 적용하고 테스트할 수 있습니다.

* 단점: 스타일과 콘텐츠가 혼합되어 가독성이 떨어지고, 유지보수가 어렵습니다. 재사용성이 거의 없습니다.

```HTML
<p style="color: red; font-size: 16px;">이 텍스트는 인라인 스타일이 적용됩니다.</p>
```

### 2.2. 내부 스타일 (Internal/Embedded Style Sheet)

HTML 문서의 `<head>` 섹션 내에 `<style>` 태그를 사용하여 CSS 규칙을 작성하는 방법입니다.

* 용도: 특정 HTML 문서에만 적용되는 고유한 스타일이 필요할 때.

* 장점: HTML 파일 하나로 스타일을 관리할 수 있습니다.

* 단점: 여러 HTML 페이지에 동일한 스타일을 적용할 수 없으며, HTML 파일의 크기가 커질 수 있습니다

```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>내부 스타일 예제</title>
    <style>
        h1 {
            color: blue;
            text-align: center;
        }
        p {
            font-family: 'Verdana', sans-serif;
        }
    </style>
</head>
<body>
    <h1>내부 스타일이 적용된 제목</h1>
    <p>이 문단은 내부 스타일의 영향을 받습니다.</p>
</body>
</html>
```

### 2.3. 외부 스타일 (External Style Sheet)

가장 권장되는 방법으로, 별도의 .css 파일에 CSS 규칙을 작성하고 HTML 문서에서 이 파일을 `<link>` 태그를 사용하여 연결하는 방법입니다.

* 용도: 여러 HTML 페이지에 공통된 스타일을 적용하고, HTML과 CSS 코드를 분리하여 관리할 때.

* 장점:

    * 코드 분리: 구조(HTML)와 디자인(CSS)이 명확히 분리되어 코드를 읽고 관리하기 쉽습니다.

    * 재사용성: 하나의 .css 파일로 수많은 HTML 페이지에 일관된 스타일을 적용할 수 있습니다.

    * 유지보수: 스타일 변경 시 .css 파일 하나만 수정하면 모든 연결된 페이지에 반영됩니다.

    * 성능: 브라우저가 CSS 파일을 캐싱하여 페이지 로딩 속도를 향상시킬 수 있습니다.

styles.css 파일 예시:

```CSS
/* styles.css */
body {
    background-color: #f0f8ff; /* 연한 파랑 */
}
h2 {
    color: #4682b4; /* 스틸 블루 */
    border-bottom: 1px dashed #4682b4;
}
```

index.html에서 styles.css 연결 예시:

```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>외부 스타일 예제</title>
    <link rel="stylesheet" href="styles.css"> </head>
<body>
    <h2>외부 스타일이 적용된 소제목</h2>
    <p>이 문단은 외부 스타일시트의 영향을 받습니다.</p>
</body>
</html>
```
* rel="stylesheet": 연결하는 문서가 스타일시트임을 명시해요.

* href="styles.css": 연결할 CSS 파일의 경로를 지정해요. (HTML 파일과 같은 폴더에 있다면 파일 이름만 적으면 돼요.)

## 3. 기본적인 CSS 선택자(Selector)와 속성(Property)

CSS 규칙은 선택자 { 속성: 값; } 형태로 작성됩니다.

```CSS
선택자 {
    속성1: 값1;
    속성2: 값2;
    /* ... */
}
```

### 3.1. 주요 선택자

* 요소 선택자 (Type Selector): HTML 태그 이름에 직접 스타일을 적용합니다.

```CSS
p {
    color: #333;
}
ul {
    list-style-type: none; /* 목록 기호 제거 */
}
```

* 클래스 선택자 (Class Selector): HTML 요소의 class 속성 값을 이용하여 스타일을 적용합니다. .클래스이름 형태로 사용하며, 여러 요소에 동일한 클래스를 부여하여 같은 스타일을 적용할 수 있습니다.

```HTML
<div class="card">카드 내용</div>
<p class="card">다른 카드 내용</p>
```
```CSS
.card {
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
}
```
* 아이디 선택자 (ID Selector): HTML 요소의 id 속성 값을 이용하여 스타일을 적용합니다. #아이디이름 형태로 사용하며, 한 HTML 문서 내에서 id 값은 반드시 고유해야 합니다. 주로 JavaScript에서 특정 요소를 제어할 때 사용하며, CSS 스타일링에는 클래스 선택자가 더 권장됩니다.
```HTML
<header id="main-header">사이트 로고</header>
```
```CSS
#main-header {
    background-color: #eee;
    text-align: center;
}
```

### 3.2. 자주 사용되는 CSS 속성 (Properties)

* color: 텍스트의 색상을 지정합니다. (예: blue, #0000FF, rgb(0,0,255))

* background-color: 요소의 배경색을 지정합니다. (예: lightgray, #f0f0f0)

* font-size: 텍스트의 글꼴 크기를 지정합니다. (예: 16px, 1.2em, 2rem)

* font-family: 텍스트의 글꼴 종류를 지정합니다. (예: 'Arial', sans-serif;)

* text-align: 텍스트의 가로 정렬을 지정합니다. (예: left, center, right, justify)

* width: 요소의 너비를 지정합니다. (예: 100%, 300px)

* height: 요소의 높이를 지정합니다. (예: auto, 200px)

* border: 요소의 테두리를 지정합니다. (예: 1px solid black;)

* margin: 요소의 바깥쪽 여백(다른 요소와의 간격)을 지정합니다. (예: 10px, 5px 10px; - 상하, 좌우)

* padding: 요소의 안쪽 여백(콘텐츠와 테두리 사이의 간격)을 지정합니다. (예: 15px, 10px 0px 5px 0px; - 상, 우, 하, 좌)

* text-decoration: 텍스트의 장식(밑줄, 취소선 등)을 지정합니다. (예: none - 밑줄 제거, underline)

* list-style-type: 목록 항목의 글머리 기호 모양을 지정합니다. (예: disc, circle, square, none)

## 4. 실습 과제

어제 작성한 my-first-page.html 파일을 수정하고, 새로 생성한 style.css 파일을 연결하여 CSS를 적용해 보세요.

1. Frontend-Studies/css/style.css 파일을 생성합니다.

2. my-first-page.html 파일의 <head>에 다음 줄을 추가하여 CSS 파일을 연결합니다:

```HTML
<link rel="stylesheet" href="css/style.css">
```

3. my-first-page.html 파일의 특정 HTML 태그에 class 속성을 추가합니다 (예: <h1 class="main-heading">...</h1>).

4. css/style.css 파일에 다음과 같은 스타일 규칙을 추가하거나, 자신만의 스타일로 변경해 봅니다.

```CSS
/* style.css */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    color: #343a40;
    padding: 20px;
}

.main-heading { /* h1 태그에 적용할 클래스 */
    color: #007bff;
    text-align: center;
    margin-bottom: 25px;
}

p {
    line-height: 1.8;
}

ul, ol {
    background-color: #ffffff;
    padding: 20px 20px 20px 40px;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

li {
    margin-bottom: 10px;
}

a {
    color: #dc3545;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
}
```

5. 브라우저에서 my-first-page.html 파일을 열어 변경된 디자인을 확인합니다.