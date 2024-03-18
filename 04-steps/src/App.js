import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [stap, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (stap > 1) setStep(stap - 1);
  }
  function handleNext() {
    if (stap < 3) setStep(stap + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={stap >= 1 ? "active" : ""}>1</div>
            <div className={stap >= 2 ? "active" : ""}>2</div>
            <div className={stap >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {" "}
            stap {stap}: {messages[stap - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: "#7958f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ background: "#7958f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
