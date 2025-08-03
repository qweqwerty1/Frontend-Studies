# Day09: 비동기 JavaScript와 Fetch API

## 개요

이 문서는 웹 페이지가 외부 서버와 통신하여 데이터를 주고받는 방법, 특히 **비동기(Asynchronous) 처리** 방식과 최신 표준인 **`Fetch` API**의 사용법에 대해 다룹니다. 이를 통해 정적인 웹 페이지에서 벗어나, 실시간으로 변하는 외부 데이터를 동적으로 화면에 표시하는 방법을 학습합니다.

## 학습 목표

* 동기(Synchronous)와 비동기(Asynchronous)의 차이점을 설명할 수 있다.
* 웹 API(Application Programming Interface)의 역할을 이해한다.
* `Promise` 객체가 비동기 작업을 어떻게 표현하는지 기본 개념을 이해한다.
* `fetch()`를 사용하여 외부 API에 GET 요청을 보낼 수 있다.
* `.then()` 메서드를 체이닝하여 성공적인 응답을 순차적으로 처리할 수 있다.
* `.catch()` 메서드를 사용하여 네트워크 요청 실패 등 에러 상황을 처리할 수 있다.

## 1. 동기와 비동기 (Synchronous vs. Asynchronous)

* **동기 (Synchronous)**: 작업이 순서대로 하나씩 실행되는 방식입니다. 첫 번째 작업이 끝날 때까지 다음 작업은 **기다려야(Blocking)** 합니다. 만약 시간이 오래 걸리는 작업을 동기적으로 처리하면, 그동안 웹 페이지 전체가 멈추는 현상이 발생합니다.
    > 예: 식당 키오스크에서 한 사람이 주문을 완료할 때까지 뒷사람은 아무것도 못 하고 기다리는 상황

* **비동기 (Asynchronous)**: 작업을 요청한 후, 그 작업이 끝날 때까지 기다리지 않고 바로 다음 작업을 실행하는 방식입니다. 요청했던 작업이 나중에 완료되면, 그 결과값을 가지고 특정 함수를 실행합니다. **기다리지 않기 때문에(Non-blocking)** 웹 페이지가 멈추지 않고 쾌적한 사용자 경험을 제공할 수 있습니다.
    > 예: 카페에서 커피를 주문하고 진동벨을 받아 다른 볼일을 보다가, 벨이 울리면 커피를 찾아가는 상황

네트워크를 통해 외부 서버에서 데이터를 가져오는 작업은 인터넷 속도에 따라 시간이 얼마나 걸릴지 모르므로, **반드시 비동기 방식**으로 처리해야 합니다.

## 2. API와 Promise

* **API (Application Programming Interface)**: 특정 프로그램이 다른 프로그램과 상호작용하기 위해 정해놓은 규칙의 집합입니다. 웹 개발에서의 API는 주로 "데이터를 요청할 수 있는 URL 주소와 그 규칙"을 의미합니다. 서버는 이 API를 통해 정해진 형식(주로 JSON)의 데이터를 제공합니다.

* **Promise (프로미스)**: 비동기 작업의 **최종 성공 또는 실패**를 나타내는 객체입니다. 비동기 작업(예: `fetch` 요청)을 실행하면, 당장 결과를 반환하는 대신 "결과를 나중에 알려주겠다"는 약속의 의미로 `Promise` 객체를 먼저 반환합니다.
    * **상태**: `pending`(대기), `fulfilled`(성공), `rejected`(실패) 중 하나의 상태를 가집니다.
    * **`.then(callback)`**: Promise가 `fulfilled`(성공) 상태가 되면 `callback` 함수를 실행합니다.
    * **`.catch(callback)`**: Promise가 `rejected`(실패) 상태가 되면 `callback` 함수를 실행합니다.

## 3. `fetch` API 사용법

`fetch()`는 Promise를 반환하는 최신 비동기 통신 API입니다. 기본적인 사용법은 아래와 같은 `then` 체이닝(Chaining) 형태를 띕니다.

```javascript
fetch('[https://api.example.com/data](https://api.example.com/data)') // 1. 데이터 요청 (Promise 반환)
    .then(response => {
        // 2. 요청 성공 시 실행 (response는 HTTP 응답 객체)
        // 이 응답을 사용 가능한 형태(예: JSON)로 변환해야 함
        return response.json(); // .json() 역시 Promise를 반환
    })
    .then(data => {
        // 3. response.json()이 성공하면 실행 (data는 실제 데이터)
        console.log(data); // 여기서 데이터를 가지고 화면에 표시하는 등 작업 수행
    })
    .catch(error => {
        // 4. 요청 과정 중 어디선가 실패(네트워크 오류 등)하면 실행
        console.error('데이터를 가져오는 데 실패했습니다:', error);
    });
```
1. fetch(url)를 호출하면 서버에 GET 요청을 보냅니다.
2. 서버가 응답하면 첫 번째 .then()이 실행됩니다. response.json()을 통해 응답 본문을 JSON 객체로 파싱합니다.
3. JSON 파싱이 완료되면 두 번째 .then()이 실행되고, 파싱된 data를 인자로 받아 실제 로직을 처리합니다.
4. 이 과정 중 네트워크 문제 등으로 오류가 발생하면 .catch()가 실행됩니다.

## 4. 실습 과제
OpenWeatherMap의 날씨 API를 사용하여 간단한 날씨 정보 표시 앱을 만듭니다.

1. OpenWeatherMap 사이트에서 무료 API 키를 발급받습니다.
2. JavaScript 파일에 API 키를 변수로 저장합니다.
3. fetch를 사용하여 특정 도시의 날씨 데이터를 요청하는 URL을 만듭니다. (units=metric 파라미터를 추가하면 섭씨 온도를 받을 수 있습니다.)
4. .then()을 두 번 체이닝하여 최종 데이터 객체를 얻어냅니다.
5. console.log()로 데이터 객체의 구조를 확인하고, 필요한 정보(도시 이름, 날씨, 온도 등)를 추출하여 DOM 조작을 통해 화면에 표시합니다.
