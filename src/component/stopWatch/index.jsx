import { useEffect, useRef, useState } from "react";
import "./index.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const start = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - start);
      }, 10);
      return () => clearInterval(intervalRef.current);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleLog = () => {
    setLogs((prev) => [...prev, time]);
  };

  const handleRest = () => {
    setIsRunning(false);
    setTime(0);
    setLogs([]);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000).toString();
    const seconds = Math.floor((ms % 60000) / 1000).toString();
    const centiSeconds = Math.floor((ms % 1000) / 10).toString();
    return `${minutes} : ${seconds} : ${centiSeconds}`;
  };

  return (
    <div className="stop-watch-container">
      <p>{formatTime(time)}</p>
      <div className="controls-container">
        <button onClick={handleStartStop}>
          {isRunning ? "stop" : "start"}
        </button>
        <button onClick={handleLog}>log</button>
        <button onClick={handleRest} disabled={isRunning}>
          reset
        </button>
      </div>
      <div className="log-container">
        {logs.length ? logs.map((log) => <p>{log}</p>) : <p>No Logs</p>}
      </div>
    </div>
  );
};

export default StopWatch;
