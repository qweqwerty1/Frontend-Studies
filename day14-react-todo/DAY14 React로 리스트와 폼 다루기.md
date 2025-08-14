# Day14: React로 리스트와 폼 다루기

## 개요

이 문서는 React에서 동적인 사용자 인터페이스를 구축하기 위한 두 가지 핵심 패턴을 다룹니다. 첫째는 사용자의 입력을 state와 결합하여 관리하는 **제어 컴포넌트(Controlled Component)** 방식이며, 둘째는 배열 형태의 데이터를 UI 목록으로 변환하는 **리스트 렌더링**입니다. 이 개념들은 To-Do 리스트, 댓글 목록, 상품 목록 등 웹 애플리케이션의 거의 모든 곳에서 사용됩니다.

## 학습 목표

* React에서 `form`과 `input` 요소를 다루는 방법을 이해한다.
* `input`의 `value`와 `onChange`를 React state와 연결하여 제어 컴포넌트를 만들 수 있다.
* JavaScript의 `.map()` 메서드를 사용하여 배열 데이터를 JSX 엘리먼트 배열로 변환할 수 있다.
* 리스트 렌더링 시, 각 엘리먼트에 고유한 `key` prop을 전달해야 하는 이유를 설명할 수 있다.
* state 업데이트 시 **불변성(Immutability)**을 지키는 것이 왜 중요한지 이해한다.

## 1. 제어 컴포넌트 (Controlled Component)

HTML에서 `<input>`, `<textarea>` 같은 폼(Form) 요소들은 보통 자기 자신의 상태를 직접 관리합니다. 하지만 React에서는 상태를 컴포넌트의 `state`로 관리하고, 이 `state`를 통해 폼 요소를 제어하는 **제어 컴포넌트** 패턴을 사용하는 것이 일반적입니다.



**동작 방식:**
1.  `input`의 `value`를 React `state`에 연결합니다. (`<input value={inputState} />`)
2.  사용자가 `input`에 무언가를 입력하면 `onChange` 이벤트가 발생합니다.
3.  `onChange` 이벤트 핸들러는 `e.target.value`를 통해 사용자의 입력값을 읽어옵니다.
4.  핸들러는 `setState` 함수를 호출하여 React `state`를 새로운 값으로 업데이트합니다.
5.  `state`가 변경되었으므로 컴포넌트가 리렌더링되고, `input`은 새로운 `state` 값을 `value`로 받아서 화면에 보여줍니다.

이러한 방식을 통해 React 컴포넌트의 `state`가 항상 **신뢰 가능한 단일 출처(Single Source of Truth)**가 되도록 보장할 수 있습니다.

## 2. 리스트 렌더링 (`.map()`)

React에서는 배열에 있는 여러 항목을 화면에 표시하기 위해 JavaScript의 `.map()` 메서드를 사용합니다. `.map()`은 배열의 각 요소를 순회하며, 각 요소에 대해 지정된 함수를 실행한 결과로 새로운 배열을 만듭니다.

React에서는 이 원리를 활용하여, 데이터 배열을 **JSX 엘리먼트 배열**로 변환하여 렌더링합니다.

```jsx
const numbers = [1, 2, 3, 4, 5];

// numbers 배열의 각 숫자에 대해 <li> 태그를 만들어 listItems 배열에 담는다.
const listItems = numbers.map((number) => <li>{number}</li>);

// 렌더링할 때 listItems 배열을 중괄호 안에 넣는다.
return <ul>{listItems}</ul>;

// 또는 JSX 안에서 직접 .map()을 호출할 수도 있다.
return (
  <ul>
    {numbers.map((number) => <li>{number}</li>)}
  </ul>
);
```

## 3. key Prop의 중요성
위 예제에서 리스트를 렌더링하면 브라우저 콘솔에 "Each child in a list should have a unique 'key' prop." 이라는 경고가 나타납니다.

**key**는 React가 리스트의 어떤 항목이 변경, 추가, 또는 삭제되었는지 식별하는 데 사용하는 특별한 문자열 속성입니다. key는 형제 엘리먼트 사이에서만 고유하면 됩니다.

key가 없으면 React는 리스트에 변화가 생겼을 때 어떤 항목이 어떻게 바뀌었는지 정확히 알기 어려워 비효율적으로 동작할 수 있습니다. 하지만 고유한 key가 있으면, React는 key를 통해 기존 DOM 엘리먼트와 새로운 엘리먼트를 정확히 비교하여 최소한의 변경만으로 효율적인 업데이트를 수행합니다.

가장 좋은 key는 데이터가 가진 고유한 ID 값입니다. (예: todo.id) 배열의 인덱스를 key로 사용하는 것은 리스트의 순서가 바뀌거나 항목이 추가/삭제될 때 문제가 발생할 수 있으므로 권장되지 않습니다.

## 4. 불변성 (Immutability)
state를 업데이트할 때, 특히 배열이나 객체 state는 직접 수정하면 안 됩니다. 예를 들어 todos.push(newTodo)와 같이 기존 배열을 직접 변경하면, React는 state가 변경되었는지 감지하지 못할 수 있습니다.

항상 setState 함수에 새로운 배열이나 객체를 전달해야 합니다. 이를 불변성을 지킨다고 말합니다. JavaScript의 스프레드 문법(...)은 불변성을 지키면서 배열이나 객체를 업데이트하는 데 매우 유용합니다.

```JavaScript

// 좋은 예: 새로운 배열을 생성하여 상태를 업데이트
setTodos([...todos, newTodo]);

// 나쁜 예: 기존 배열을 직접 수정 (DON'T DO THIS!)
// const newTodos = todos;
// newTodos.push(newTodo);
// setTodos(newTodos);
```
## 5. 실습 과제
제어 컴포넌트와 리스트 렌더링 패턴을 사용하여 To-Do 리스트 애플리케이션을 처음부터 만듭니다.

1. input의 값을 제어할 input state와 할 일 목록을 저장할 todos 배열 state를 생성합니다.
2. form의 onSubmit 이벤트 핸들러에서 새로운 할 일을 todos state에 추가하는 로직을 작성합니다.(이때 스프레드 문법을 사용하여 불변성을 지킵니다.)
3. todos state 배열을 .map()으로 순회하여 `<li>` 엘리먼트 리스트를 렌더링합니다.
4. 각 `<li>` 엘리먼트에 데이터의 고유 ID를 key prop으로 전달합니다.