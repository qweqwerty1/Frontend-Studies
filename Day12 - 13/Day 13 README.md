# Day13: 컴포넌트에 생명 불어넣기 (useState와 props)

## 개요

이 문서는 정적인 React 컴포넌트를 동적으로 만드는 두 가지 핵심 개념인 **`state`**와 **`props`**에 대해 다룹니다. React의 **Hook** 중 가장 기본이 되는 **`useState`**를 사용하여 컴포넌트가 스스로 데이터를 관리하고 변화에 따라 화면을 업데이트하는 방법을 학습합니다. 또한, 컴포넌트 간의 데이터 흐름을 제어하는 **`props`**를 통해 부모-자식 관계의 컴포넌트가 어떻게 상호작용하는지 이해합니다.

## 학습 목표

* **상태(State)**가 '컴포넌트의 기억'이며, 상태가 변하면 UI가 다시 렌더링된다는 것을 이해한다.
* `useState` Hook의 기본 사용법 `const [state, setState] = useState(initialState)`를 설명할 수 있다.
* 사용자 이벤트에 반응하여 상태 업데이트 함수(`setState`)를 호출하고 UI를 변경시킬 수 있다.
* **속성(Props)**이 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달하는 단방향 통로임을 이해한다.
* 자식 컴포넌트를 만들고, 부모로부터 `props`를 받아 화면에 동적인 데이터를 표시할 수 있다.

## 1. State: 컴포넌트의 기억 장치 (`useState`)

**State**는 컴포넌트 내에서 **변할 수 있는 데이터**를 담는 '기억 저장소'입니다. React는 이 State가 변경될 때마다 컴포넌트를 자동으로 다시 렌더링하여 화면을 최신 상태로 유지해 줍니다. 우리는 더 이상 DOM을 직접 조작할 필요가 없습니다.

**`useState`**는 함수형 컴포넌트에서 State를 사용할 수 있게 해주는 **React Hook**입니다.

### 사용법
```jsx
import { useState } from 'react';

function MyComponent() {
  const [state, setState] = useState(initialState);
  // ...
}
```
* `useState(initialState)`: 함수를 호출하면 배열을 반환합니다. `initialState`는 해당 state의 초기값입니다.
* `state`: 현재 상태 값을 담고 있는 변수입니다. (배열의 첫 번째 요소)
* `setState`: 상태를 업데이트하는 함수입니다. (배열의 두 번째 요소) 이 함수를 호출해야만 React가 상태 변경을 감지하고 화면을 다시 그립니다.
* `const [ ... ]`: 배열의 각 요소를 편리하게 변수로 추출하는 JavaScript의 "배열 구조 분해 할당" 문법입니다.

## 2. Props: 부모가 자식에게 주는 데이터
**Props**(properties의 줄임말)는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 사용하는 **읽기 전용(read-only)** 객체입니다. 데이터는 항상 부모에서 자식으로, 위에서 아래로 흐르는 **단방향 데이터 흐름**을 가집니다.

> 컴포넌트를 '함수'라고 생각한다면, **Props는 그 함수의 '인자(argument)'**와 같습니다.

### 사용법

**부모 컴포넌트 (`App.jsx`)**

```JavaScript
import ChildComponent from './ChildComponent.jsx';

function App() {
  const name = "Alice";
  return <ChildComponent username={name} age={25} />;
}
```
HTML 속성을 정하듯이 `프롭이름={전달할값}` 형태로 자식 컴포넌트에 데이터를 전달합니다.

**자식 컴포넌트 (`ChildComponent.jsx`)**

```JavaScript
// 전달받은 props 객체를 함수의 인자로 받는다.
function ChildComponent(props) {
  return (
    <div>
      <p>이름: {props.username}</p>
      <p>나이: {props.age}</p>
    </div>
  );
}

// 구조 분해 할당 문법으로 더 깔끔하게 작성할 수도 있다.
function ChildComponent({ username, age }) {
  return (
    <div>
      <p>이름: {username}</p>
      <p>나이: {age}</p>
    </div>
  );
}
```
## 3. 왜 Props를 사용할까?
Props를 사용하면 UI를 더 작고 재사용 가능한 단위로 나눌 수 있습니다. 예를 들어, `CounterDisplay` 컴포넌트는 '숫자를 화면에 예쁘게 보여주는' 역할만 합니다. 이 컴포넌트는 그 숫자가 카운터의 숫자인지, 장바구니의 상품 개수인지 알 필요가 없습니다. 그저 `props`로 받은 숫자를 보여줄 뿐입니다.

이처럼 각 컴포넌트가 **자신의 역할에만 집중**하게 만들면, 코드가 훨씬 더 깔끔해지고 재사용성이 높아지며 유지보수하기 쉬워집니다.

## 4. 실습 과제
`useState`와 `props`를 사용하여 카운터 애플리케이션을 만듭니다.

1. App 컴포넌트에서 useState를 사용하여 count라는 이름의 state를 생성합니다.
2. App 컴포넌트에 count state를 1씩 증가/감소시키는 버튼과 이벤트 핸들러를 추가합니다.
3. CounterDisplay라는 이름의 새로운 자식 컴포넌트 파일을 만듭니다.
4. CounterDisplay 컴포넌트는 props로 숫자를 받아 화면에 표시하는 역할만 하도록 작성합니다.
5. App 컴포넌트에서 CounterDisplay를 import하고, count state를 props로 전달하여 화면에 숫자가 표시되도록 합니다.