// 1. 발급받은 API 키를 변수에 저장합니다.
const API_KEY = 'cd6e017f68dc1fda91d87da44a9ffd89'; // 보안을 위해 맨뒤 2자리 제거

// 2. Geolocation API가 성공했을 때 실행될 함수
function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // async/await를 사용한 함수 호출
    getWeather(url);
}

// 3. Geolocation API가 실패했을 때 실행될 함수
function onGeoError(error) {
    console.error("Geolocation error:", error);
    console.log("Error code:", error.code);
    console.log("Error message:", error.message);

    alert(`위치 정보를 가져올 수 없습니다: ${error.message}`);
}

// 4. async/await를 사용하여 날씨 정보를 가져오는 함수
async function getWeather(url) {
    try {
        // await: fetch가 끝나고 response를 받을 때까지 기다림
        const response = await fetch(url);
        // await: response.json()이 끝나고 data를 받을 때까지 기다림
        const data = await response.json();

        // DOM 조작
        const weatherSpan = document.querySelector("#weather span:first-child");
        const citySpan = document.querySelector("#weather span:last-child");

    } catch (error) {
        console.log("Error fetching weather:", error);
        alert("Sorry, something went wrong while fetching the weather.");
    }
}

// 5. 사용자의 위치를 요청합니다.
// 브라우저는 사용자에게 위치 정보 접근 권한을 요청합니다.
// 성공 시 onGeoOk 함수를, 실패 시 onGeoError 함수를 실햅합니다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

