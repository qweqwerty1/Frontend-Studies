# Day12: React 개발 환경 설정 (Vite) 및 첫 컴포넌트

## 개요

이 문서는 현대적인 React 개발을 시작하기 위한 개발 환경 설정 과정을 다룹니다. Node.js와 npm의 필요성을 이해하고, 최신 빌드 도구인 Vite를 사용하여 React 프로젝트를 생성하는 방법을 학습합니다. 또한, 생성된 프로젝트의 기본 구조를 파악하고, 불필요한 코드를 정리한 뒤 화면에 "Hello, World"를 출력하는 첫 번째 React 컴포넌트를 직접 작성하는 과정을 안내합니다.

## 학습 목표

* React 개발에 Node.js와 npm이 필수적인 이유를 이해한다.
* Vite가 무엇이며, 개발 서버 및 빌드 도구로서 어떤 역할을 하는지 이해한다.
* `npm create vite@latest` 명령어로 React 프로젝트를 생성할 수 있다.
* `npm install`과 `npm run dev` 명령어의 역할을 설명할 수 있다.
* React 프로젝트의 핵심 파일(`index.html`, `src/main.jsx`, `src/App.jsx`)의 역할을 이해한다.
* JavaScript 함수를 이용해 간단한 React 컴포넌트를 작성하고 JSX를 반환할 수 있다.

## 1. 개발 환경이란?

과거에는 HTML, CSS, JS 파일을 각각 만들어 브라우저에서 열면 됐지만, 현대적인 웹 개발은 더 나은 개발 경험과 성능 최적화를 위해 여러 도구를 사용합니다.

* **Node.js**: 브라우저가 아닌 환경(내 컴퓨터 등)에서 JavaScript를 실행하게 해주는 런타임입니다. React 개발 도구들이 Node.js 기반으로 만들어졌기 때문에 필수적으로 설치해야 합니다.
* **npm (Node Package Manager)**: Node.js의 패키지 관리자입니다. 전 세계 개발자들이 만든 유용한 코드 묶음(패키지), 예를 들어 `react`, `react-dom` 등을 내 프로젝트에 쉽게 설치하고 관리할 수 있게 해줍니다. `package.json` 파일에 내 프로젝트가 사용하는 패키지 목록이 기록됩니다.
* **Vite**: 최신 프론트엔드 빌드 도구입니다. 주요 역할은 다음과 같습니다.
    * **개발 서버**: 코드를 수정할 때마다 브라우저를 새로고침하지 않아도 변경사항이 바로 반영되는(Hot Module Replacement) 빠른 개발 서버를 제공합니다.
    * **빌드**: 개발이 완료된 후, 실제 서비스(배포)를 위해 코드를 최적화하고 하나 또는 여러 개의 파일로 묶어주는(Bundling) 역할을 합니다.

## 2. Vite로 React 프로젝트 시작하기

Vite를 사용하면 단 한 줄의 명령어로 복잡한 설정 없이 바로 React 개발을 시작할 수 있습니다.

1.  `npm create vite@latest`: 최신 버전의 Vite를 사용하여 프로젝트 생성 프로세스를 시작합니다.
2.  `cd <project-name>`: 생성된 프로젝트 폴더로 이동합니다.
3.  `npm install`: `package.json` 파일을 읽고, 명시된 모든 패키지들을 `node_modules` 폴더로 다운로드합니다.
4.  `npm run dev`: `package.json`의 `scripts`에 정의된 `dev` 명령(실제로는 `vite`)을 실행하여 개발 서버를 시작합니다.

## 3. React 프로젝트 구조

Vite로 생성된 React 프로젝트의 핵심 파일은 다음과 같습니다.

* **`index.html`**: 프로젝트 전체의 유일한 HTML 파일입니다. 내부에 `<div id="root"></div>`가 있는데, 이 곳이 React 애플리케이션이 그려질 '캔버스'가 됩니다.
* **`src/main.jsx`**: JavaScript 코드의 진입점(Entry Point)입니다. 이 파일이 하는 가장 중요한 일은 `ReactDOM.createRoot()`를 사용하여 `index.html`의 'root' div를 선택하고, 그곳에 우리의 메인 컴포넌트인 `<App />`을 그리라고 명령하는 것입니다.
    ```jsx
    // src/main.jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    ```
* **`src/App.jsx`**: 애플리케이션의 최상위 메인 컴포넌트입니다. 우리는 주로 이 `App.jsx`와, 여기서 파생되는 새로운 컴포넌트 파일들을 수정하며 개발을 진행하게 됩니다.

## 4. 첫 번째 React 컴포넌트 만들기

React에서 컴포넌트는 **"UI를 반환하는 JavaScript 함수"**입니다.

```jsx
// src/App.jsx

// 'App'이라는 이름의 JavaScript 함수
function App() {
  // 이 함수는 화면에 보여줄 UI 조각(JSX)을 반환(return)한다.
  return (
    <h1>Hello, React!</h1>
  );
}

// 다른 파일에서 이 App 컴포넌트를 사용할 수 있도록 내보낸다(export).
export default App;