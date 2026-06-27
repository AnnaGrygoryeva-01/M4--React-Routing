import React, { useEffect, useState, useRef } from "react";

function StopWatch() {
  const [count, setCount] = useState(new Date(0, 0, 0, 0, 0, 0, 0));

  const idRef = useRef(null);

  const tick = () => {
    setCount((count) => {
      const newCount = new Date(count.valueOf());
      newCount.setSeconds(count.getSeconds() + 1);
      return newCount;
    });
  };

  const start = () => {
    if (!idRef.current) {
      idRef.current = setInterval(tick, 1000);
    }
  };

  const stop = () => {
    clearInterval(idRef.current);
    idRef.current = null;
  };

  const reset = () => {
    setCount(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, []);

  return (
    <article>
      <div>{count.toLocaleTimeString("en-GB")}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </article>
  );
}

export default StopWatch;
