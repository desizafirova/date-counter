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

  function handlerPlusCount() {
    setCount((c) => c + step);
  }

  function handlerMinusCount() {
    setCount((c) => c - step);
  }

  function handlerReset() {
    setCount(0);
    setStep(1);
  }

  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + count);

  const passedDate = new Date(currentDate);
  passedDate.setDate(currentDate.getDate() - count * -1);

  return (
    <>
      <div className="flex-step">
        <input
          className="slider"
          type="range"
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
        />
        <p>Step: {step}</p>
      </div>
      <div className="flex-count">
        <button onClick={handlerMinusCount}>-</button>
        <input
          type="text"
          value={count}
          className="inputCount"
          onChange={(e) => setCount(Number(e.target.value))}
        />
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
      {count !== 0 || step !== 1 ? (
        <div>
          <button className="btnReset" onClick={handlerReset}>
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
}
