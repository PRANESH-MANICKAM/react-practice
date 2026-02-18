import { useEffect } from "react";
import "./index.css";

const Throttle = () => {
  const throttle = function (fn, delay) {
    let lastCall = 0;
    return function (...arg) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn.apply(this, arg);
      }
    };
  };

  // with throttle
  const handleScroll = throttle(() => {
    console.log("scroll triggered");
  }, 500);

  //without throttle
  const handleScroll2 = () => {
    console.log("scroll triggered");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return <div className="throttle">throttle</div>;
};

export default Throttle;
