# Day03: CSS Flexbox를 이용한 레이아웃 설계

## 개요

이 문서는 프론트엔드 스터디 셋째 날 학습한 **CSS Flexible Box Layout(Flexbox)**에 대해 다룹니다. Flexbox는 웹 페이지의 아이템들을 행이나 열로 쉽게 배치하고 정렬할 수 있게 해주는 강력한 1차원 레이아웃 모델입니다. 이 문서를 통해 Flexbox의 기본 개념과 주요 속성을 익히고, 이를 활용하여 실용적인 레이아웃을 구성하는 방법을 학습합니다.

## 학습 목표

* Flexbox의 핵심 개념인 **컨테이너(Container)**와 **아이템(Items)**의 관계를 이해한다.
* Flexbox 레이아웃의 방향을 결정하는 **축(Axis)**의 개념을 이해한다.
* 컨테이너에 적용하는 속성(`display`, `flex-direction`, `justify-content`, `align-items` 등)을 활용하여 아이템을 정렬할 수 있다.
* 아이템에 적용하는 속성(`flex-grow`, `order` 등)을 사용하여 개별 아이템의 크기와 순서를 제어할 수 있다.
* Flexbox를 사용하여 내비게이션 바와 같은 실제 컴포넌트 레이아웃을 제작할 수 있다.

## 1. Flexbox란 무엇인가?

Flexbox는 CSS의 레이아웃 모듈 중 하나로, 아이템 간의 공간 배분과 정렬 기능을 효과적으로 제공하기 위해 설계되었습니다. 과거 `float`나 `position` 속성을 이용해 복잡하게 구현해야 했던 레이아웃을 훨씬 직관적이고 간단한 코드로 구현할 수 있게 해줍니다. 특히 한 줄의 아이템 목록(수평 또는 수직)을 정렬하는 데 매우 강력합니다.

## 2. Flexbox의 핵심 구조

Flexbox는 부모 요소인 **Flex Container**와 그 자식 요소들인 **Flex Items**로 구성됩니다.

![Flexbox-Axis](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)
*(이미지 출처: CSS-Tricks)*

* **Flex Container (플렉스 컨테이너)**: `display: flex;` 또는 `display: inline-flex;`가 적용된 부모 요소를 말합니다. Flexbox의 모든 규칙이 적용되는 공간입니다.
* **Flex Items (플렉스 아이템)**: Flex 컨테이너의 직계 자식 요소들입니다. 이 아이템들은 Flexbox 규칙에 따라 배치됩니다.
* **Main Axis (주 축)**: 아이템들이 배치되는 주 방향입니다. `flex-direction` 속성으로 방향을 결정합니다. (기본값: 가로)
* **Cross Axis (교차 축)**: 주 축에 수직인 축입니다. (기본값: 세로)

## 3. Flex Container 주요 속성

컨테이너에 적용하여 모든 아이템의 정렬과 배치를 제어합니다.

* `display: flex;`: 요소를 블록 레벨의 Flex 컨테이너로 만듭니다.
* `flex-direction`: 아이템이 쌓이는 주 축의 방향을 설정합니다.
    * `row`: (기본값) 아이템을 가로 방향으로 왼쪽에서 오른쪽으로 배치합니다.
    * `row-reverse`: 아이템을 가로 방향으로 오른쪽에서 왼쪽으로 배치합니다.
    * `column`: 아이템을 세로 방향으로 위에서 아래로 배치합니다.
    * `column-reverse`: 아이템을 세로 방향으로 아래에서 위로 배치합니다.
* `justify-content`: **주 축(Main Axis)** 방향으로 아이템을 정렬합니다.
    * `flex-start`: (기본값) 시작점으로 정렬합니다.
    * `flex-end`: 끝점으로 정렬합니다.
    * `center`: 중앙으로 정렬합니다.
    * `space-between`: 첫 아이템은 시작점에, 마지막 아이템은 끝점에 붙이고 나머지 아이템들은 그 사이에 균일한 간격으로 배치합니다.
    * `space-around`: 모든 아이템의 좌우에 균일한 간격을 만듭니다.
* `align-items`: **교차 축(Cross Axis)** 방향으로 아이템을 정렬합니다.
    * `stretch`: (기본값) 아이템이 교차 축을 꽉 채우도록 늘립니다.
    * `flex-start`: 시작점으로 정렬합니다.
    * `flex-end`: 끝점으로 정렬합니다.
    * `center`: 중앙으로 정렬합니다.
* `flex-wrap`: 아이템들이 한 줄에 들어가지 않을 때 줄바꿈 여부를 결정합니다.
    * `nowrap`: (기본값) 줄바꿈을 하지 않고 한 줄에 욱여넣습니다.
    * `wrap`: 아이템이 넘치면 다음 줄로 줄바꿈합니다.
* `gap`: 아이템 사이의 간격을 설정합니다. (예: `gap: 10px;`)

## 4. 실습 과제

Day 3 학습 내용을 바탕으로, Flexbox를 이용한 내비게이션 바를 만들어봅니다.

1.  프로젝트 폴더에 `day03-flexbox` 라는 새 폴더를 만듭니다.
2.  해당 폴더 안에 `index.html`과 `style.css` 파일을 생성합니다.
3.  `index.html` 파일에 내비게이션 바의 기본 구조를 작성합니다.

    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Day 3: CSS Flexbox 실습</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="main-header">
            <nav class="nav-container">
                <div class="nav-logo">
                    <a href="#">MyFlexSite</a>
                </div>
                <ul class="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div class="nav-actions">
                    <button class="login-btn">Login</button>
                </div>
            </nav>
        </header>
    </body>
    </html>
    ```

4.  `style.css` 파일에 Flexbox를 사용하여 레이아웃을 구성합니다.

    ```css
    /* style.css */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Helvetica', sans-serif;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .main-header {
        background-color: #2c3e50;
        padding: 10px 40px;
    }

    /* Flexbox 컨테이너 설정 */
    .nav-container {
        display: flex;
        justify-content: space-between; /* 주 축(가로) 정렬: 요소들을 양쪽 끝으로 */
        align-items: center; /* 교차 축(세로) 정렬: 요소들을 중앙으로 */
    }

    .nav-logo a {
        font-size: 1.5em;
        font-weight: bold;
    }

    /* 메뉴 아이템들도 Flexbox로 가로 정렬 */
    .nav-menu {
        display: flex;
        list-style: none;
        gap: 25px; /* 아이템 사이 간격 */
    }

    .nav-menu a:hover {
        color: #1abc9c;
    }

    .login-btn {
        padding: 8px 16px;
        background-color: #1abc9c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .login-btn:hover {
        background-color: #16a085;
    }
    ```

5.  브라우저에서 `index.html` 파일을 열어 결과를 확인하고, `justify-content`나 `align-items` 등의 속성 값을 변경해보며 Flexbox의 동작을 실험해 보세요.