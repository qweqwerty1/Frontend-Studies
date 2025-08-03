// 1. 발급받은 API 키를 변수에 저장합니다.
const API_KEY = 'cd6e017f68dc1fda91d87da44a9ffd'; // 보안을 위해 맨뒤 2자리 제거

// 2. 데이터를 요청할 URL 주소를 만듭니다. (서울의 날씨)
const city = 'seoul';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// 3. fetch를 사용하여 API에 데이터를 요청합니다.
fetch(url)
    .then(response => response.json()) // 첫 번째 then: 응답(response)을 JSON 형태로 반환
    .then(data => {
        // 두 번째 then: JSON으로 변환된 데이터(data)를 실제 사용
        const weatherSpan = document.querySelector("#weather span:first-child");
        const citySpan = document.querySelector("#weather span:last-child");

        citySpan.innerText = data.name; // 도시 이름
        // 날씨와 온도 정보. data.weather는 배열이므로 첫 번째 항목을 사용
        weatherSpan.innerText = `${data.weather[0].main} / ${data.main.temp}° C`;
    })
    .catch(error => {
        //에러 처리
        console.log('날씨 정보를 가져오는 데 실패했습니다:', error);
    });