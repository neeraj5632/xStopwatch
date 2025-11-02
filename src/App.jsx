import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Update timer every second while running
  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  // Format as M:SS
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div
      className="stopwatch-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h2>Stopwatch</h2>
      {/* The test expects "Time: 0:00" in one line */}
      <h3>Time: {formatTime(seconds)}</h3>
      <div className="buttons" style={{ marginTop: "20px" }}>
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
