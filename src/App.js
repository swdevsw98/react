import { useEffect, useRef, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const addHandler = () => {
    setNum(num + 1);
  }

  const subHandler = () => {
    setNum(num - 1);
  }

  useEffect(()=> {
  },[num])



  return (
    <div className="App">
      <button onClick={() => addHandler()}>up</button>
      {num}
      <button onClick={() => subHandler()}>down</button>
    </div>
  );
}

export default App;
