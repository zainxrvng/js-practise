import {useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => {
          setCount(count + 1)
        }}> +1 </button>
        <button onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }} disabled = {count == 0}> -1 </button>
      </div>
    </>
  );
}

export default App
