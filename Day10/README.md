# Day10: async/await와 Geolocation API

## 개요

이 문서는 비동기(Asynchronous) 코드를 더 직관적이고 깔끔하게 작성할 수 있도록 돕는 **`async/await`** 문법을 다룹니다. Promise 체이닝(`.then().then()...`) 방식보다 동기(Synchronous) 코드와 유사한 형태로 비동기 로직을 작성할 수 있어 코드의 가독성과 유지보수성을 크게 향상시킵니다. 또한, 사용자의 현재 위치 정보를 가져오는 브라우저 기능인 **`Geolocation API`**를 학습하여, 사용자 맞춤형 기능을 구현하는 방법을 익힙니다.

## 학습 목표

* `async/await`가 Promise를 기반으로 동작하는 'Syntactic Sugar'임을 이해한다.
* 함수 앞에 `async` 키워드를 붙여 비동기 함수를 선언할 수 있다.
* `async` 함수 안에서 `await` 키워드를 사용하여 Promise가 완료될 때까지 실행을 기다릴 수 있다.
* `try...catch` 문을 사용하여 `async/await` 코드의 에러를 효과적으로 처리할 수 있다.
* `navigator.geolocation.getCurrentPosition()`을 사용하여 사용자의 위치 정보를 비동기적으로 가져올 수 있다.

## 1. 더 깔끔한 비동기 처리: `async/await`

`async/await`는 ES2017(ES8)에 도입된 기능으로, 복잡한 Promise 기반 코드를 단순화하기 위해 만들어졌습니다. 내부적으로는 여전히 Promise가 동작하지만, 개발자는 마치 동기 코드처럼 비동기 로직을 작성할 수 있습니다.

* **`async`**: 함수 선언부 앞에 붙입니다. `async` 함수는 항상 Promise를 반환합니다. 함수 안에서 값을 반환하면, 그 값으로 이행(resolve)되는 Promise가 반환됩니다.
* **`await`**: `async` 함수 안에서만 사용할 수 있습니다. `await` 키워드는 Promise가 처리(settled)될 때까지 함수의 실행을 **일시 정지**하고, Promise가 이행되면 그 결과값을 반환합니다.

**`.then()` 체이닝 vs `async/await`**

```javascript
// 기존 .then() 방식
function fetchData() {
    fetch('url')
        .then(response => response.json())
        .then(data => console.log(data));
}
```
```javascript
// async/await 방식
async function fetchData() {
    const response = await fetch('url');
    const data = await response.json();
    console.log(data);
}
```
`async/await` 방식이 변수에 순차적으로 값을 할당하는 동기 코드와 매우 유사하여 훨씬 읽기 편합니다.

## 2. try...catch로 에러 핸들링하기

`.then()` 체이닝에서는 `.catch()` 메서드를 사용해 에러를 처리했습니다. `async/await` 구문에서는 일반적인 동기 코드의 에러 처리 방식인 `try...catch` 문을 사용합니다.

* `try { ... }`: 이 블록 안에서 비동기 작업(await 포함)을 실행합니다. 만약 Promise가 실패(rejected)하면, 에러가 발생하여 catch 블록으로 넘어갑니다.

* `catch (error) { ... }`: `try` 블록에서 발생한 에러를 잡아 처리하는 곳입니다.

```JavaScript
async function fetchData() {
    try {
        const response = await fetch('invalid-url'); // 일부러 에러 발생
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // try 블록에서 발생한 모든 에러가 여기서 잡힘
        console.error("데이터 로딩 실패:", error);
    }
}
```

## 3. Geolocation API

`navigator.geolocation` 객체를 통해 사용자의 지리적 위치 정보에 접근할 수 있습니다. 가장 기본적인 메서드는 `getCurrentPosition()`입니다.

`navigator.geolocation.getCurrentPosition(successCallback, errorCallback)`

이 메서드는 비동기적으로 작동하며, 두 개의 함수를 인자로 받습니다.

* `successCallback`: 위치 정보를 성공적으로 가져왔을 때 호출됩니다. 이 함수는 `position` 객체를 인자로 받으며, 이 객체 안의 coords 속성을 통해 위도(latitude)와 경도(longitude) 등의 정보에 접근할 수 있습니다.

* `errorCallback`: 위치 정보를 가져오는 데 실패했을 때 호출됩니다. (예: 사용자가 권한을 거부한 경우)

```JavaScript
function onsuccess(position) {
    const lat = position.coords.latitude;
    console.log("당신의 위도는:", lat);
}

function onerror() {
    console.log("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onsuccess, onerror);
```

## 4. 실습 과제
Day 9의 날씨 앱을 `async/await`와 `Geolocation API`를 사용하여 개선합니다.

1. `navigator.geolocation.getCurrentPosition()`을 호출하여 사용자의 위치 정보 권한을 요청합니다.

2. 위치 정보를 성공적으로 가져오면 실행될 `onGeoOk` 함수를 만듭니다. 이 함수는 위도와 경도를 사용하여 OpenWeatherMap API URL을 생성해야 합니다.

3. `onGeoOk` 함수 안에서, `async`로 선언된 `getWeather` 함수를 호출합니다.

4. `getWeather` 함수는 `try...catch` 문을 사용하여 `fetch` 요청을 보냅니다.

    * `try` 블록에서는 `await fetch(url)`와 `await response.json()`을 순차적으로 실행하여 데이터를 가져오고, DOM을 업데이트합니다.

    * `catch` 블록에서는 발생할 수 있는 에러를 콘솔에 출력합니다.

5. 브라우저에서 위치 정보 접근을 허용하고, 현재 내 위치의 날씨가 정상적으로 표시되는지 확인합니다.