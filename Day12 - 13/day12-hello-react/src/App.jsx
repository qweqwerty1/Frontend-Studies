// 1. react 라이브러리에서 useState를 가져옵니다.
import { useState } from "react";

function App() {
  // 2. useState를 사용하여 'count'라는 state를 만듭니다.
  // count: 현재 상태 값 (초기값: 0)
  // setCount: count 상태를 변경하는 함수
  const [count, setCount] = useState(0);

  // 3. 버튼 클릭 시 실행될 함수
  const handleIncrease = () => {
    //setCount 함수를 호출하여 count 값을 1 증가시킵니다.
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={handleIncrease}>증가 (+)</button>
      <button onClick={handleDecrease}>감소 (-)</button>
    </div>
  );
}

export default App;