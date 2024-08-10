import { useState } from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const currentDate = new Date();

  function handlerPlusStep() {
    setStep((s) => s + 1);
  }

  function handlerMinusStep() {
    setStep((s) => (s > 1 ? s - 1 : 1));
  }

  function handlerPlusCount() {
    setCount((c) => c + step);
  }

  function handlerMinusCount() {
    setCount((c) => c - step);
  }

  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + count);

  const passedDate = new Date(currentDate);
  passedDate.setDate(currentDate.getDate() - count * -1);

  return (
    <>
      <div className="flex-step">
        <button onClick={handlerMinusStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={handlerPlusStep}>+</button>
      </div>
      <div className="flex-count">
        <button onClick={handlerMinusCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={handlerPlusCount}>+</button>
      </div>
      {count === 0 && <p>Today is {currentDate.toDateString()}</p>}
      {count > 0 && (
        <p>
          {count} days from today is {futureDate.toDateString()}
        </p>
      )}
      {count < 0 && (
        <p>
          {count * -1} days ago was {passedDate.toDateString()}
        </p>
      )}
    </>
  );
}
