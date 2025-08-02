# Day08: localStorage를 이용한 데이터 저장

## 개요

이 문서는 사용자가 생성한 데이터를 브라우저에 영구적으로 저장하는 기술인 **웹 스토리지(Web Storage)**, 특히 **`localStorage`**에 대해 다룹니다. `localStorage`를 사용하면 사용자가 브라우저를 닫거나 컴퓨터를 재부팅해도 데이터가 유지되므로, 웹 애플리케이션의 사용 경험을 크게 향상시킬 수 있습니다. 또한, JavaScript의 객체나 배열을 문자열로 변환하여 저장하기 위한 필수적인 데이터 포맷인 **JSON**의 사용법을 학습합니다.

## 학습 목표

* `localStorage`와 `sessionStorage`의 차이점을 이해한다.
* `localStorage.setItem()`, `localStorage.getItem()`, `localStorage.removeItem()`을 사용하여 데이터를 저장, 조회, 삭제할 수 있다.
* `localStorage`가 문자열(String) 데이터 타입만 저장할 수 있다는 것을 이해한다.
* `JSON.stringify()`를 사용하여 JavaScript 객체나 배열을 JSON 문자열로 변환할 수 있다.
* `JSON.parse()`를 사용하여 JSON 문자열을 다시 JavaScript 객체나 배열로 변환할 수 있다.

## 1. 웹 스토리지 (Web Storage)란?

웹 스토리지는 웹 브라우저가 클라이언트 측에 데이터를 저장할 수 있도록 하는 기술입니다. 서버가 아닌 사용자의 컴퓨터에 데이터를 저장하므로, 간단한 데이터를 빠르게 저장하고 불러오는 데 유용합니다. 웹 스토리지에는 두 가지 종류가 있습니다.

* **`localStorage`**: 데이터의 유효 기간이 없습니다. 사용자가 직접 브라우저의 캐시나 데이터를 삭제하지 않는 한, 데이터는 영구적으로 유지됩니다.
* **`sessionStorage`**: 데이터가 **브라우저 세션 동안**만 유지됩니다. 즉, 브라우저 탭이나 창을 닫으면 데이터가 사라집니다.

## 2. `localStorage` 사용법

`localStorage`는 `key`-`value` 쌍으로 데이터를 저장합니다. 사용법은 매우 간단합니다.

* **데이터 저장: `localStorage.setItem('key', 'value')`**
    ```javascript
    localStorage.setItem('username', 'Alice');
    ```

* **데이터 조회: `localStorage.getItem('key')`**
    ```javascript
    const savedUsername = localStorage.getItem('username'); // 'Alice'
    ```

* **데이터 삭제: `localStorage.removeItem('key')`**
    ```javascript
    localStorage.removeItem('username');
    ```

* **모든 데이터 삭제: `localStorage.clear()`**

**중요한 제약사항**: `localStorage`에 저장되는 `key`와 `value`는 **모두 문자열(String) 타입**이어야 합니다.

## 3. JavaScript 객체를 문자열로: JSON

`localStorage`는 문자열만 저장할 수 있는데, To-Do 리스트 같은 복잡한 데이터는 보통 배열이나 객체로 관리합니다. 이 문제를 해결하기 위해 **JSON(JavaScript Object Notation)**을 사용합니다. JSON은 데이터를 표현하는 경량의 데이터 교환 형식으로, JavaScript 객체와 매우 유사한 문법을 가집니다.

* **`JSON.stringify()`**: JavaScript 객체나 배열을 JSON 형식의 **문자열**로 변환합니다.
* **`JSON.parse()`**: JSON 형식의 문자열을 다시 JavaScript 객체나 배열로 변환합니다.

```javascript
// 자바스크립트 배열
const fruits = ['apple', 'banana', 'cherry'];

// 1. 배열을 JSON 문자열로 변환하여 localStorage에 저장
const fruitsString = JSON.stringify(fruits);
localStorage.setItem('myFruits', fruitsString);

// fruitsString의 값: "[\"apple\",\"banana\",\"cherry\"]"


// 2. localStorage에서 문자열을 가져와 다시 배열로 변환
const savedString = localStorage.getItem('myFruits');
const realFruitsArray = JSON.parse(savedString);

console.log(realFruitsArray[1]); // 'banana'
```
이 두 가지 메서드를 사용하면 어떤 형태의 데이터든 문자열로 바꾸어 localStorage에 저장하고, 필요할 때 다시 원래 형태로 복원하여 사용할 수 있습니다.

## 4. 실습 과제
Day 7의 To-Do 리스트 애플리케이션에 localStorage를 적용하여 데이터 영속성을 구현합니다.

1. To-Do 리스트의 데이터를 관리할 전역 배열(예: let todos = [])을 선언합니다.

2. 할 일이 추가되거나, 삭제되거나, 완료 상태가 변경될 때마다 이 todos 배열의 최신 상태를 JSON.stringify를 사용하여 localStorage에 저장하는 함수(saveTodos)를 만듭니다.

3. 페이지가 처음 로드될 때, localStorage에서 데이터를 getItem으로 불러옵니다.

4. 불러온 데이터가 있다면, JSON.parse로 다시 배열로 변환한 뒤, 배열의 각 항목을 화면에 그려주는 로직을 실행합니다.

5. 브라우저의 개발자 도구(Application 탭)를 통해 localStorage에 데이터가 실제로 저장되고 변경되는지 확인합니다.