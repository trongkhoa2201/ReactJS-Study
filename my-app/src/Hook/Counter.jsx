import React, {useState} from 'react'

const Counter = () => {
  // khởi tạo biến count và setCount với useState
  let [count, setCount] = useState(5);

  const handleClick = () => {
    const newValue = count + 1;
    setCount(newValue);
  };

  return (
    <div>
      Giá trị {count}
      <div>
        <button onClick={handleClick}>Tăng</button>
      </div>
    </div>
  )
}

export default Counter