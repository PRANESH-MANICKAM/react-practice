import { useEffect, useState } from "react";
import "./progress.css";

const ProgressBar = () => {
    const [bar, setBar] = useState(0);
    useEffect(() => {
        const inetrval = setInterval(() => {
            setBar((prev) => {
                if(prev >= 100) {
                    clearInterval(inetrval);
                } else {
                    return Math.min(prev + 5, 100);
                }
            })
        }, 1000);
        return () => clearInterval(inetrval);
    }, []);
    return (
        <div className="progress">
            <div className="progress-container">
                <div className="progress-bar" style={{ transform: `translateX(${bar - 100}%)`}}></div>
            </div>
        </div>
    )
};

export default ProgressBar;