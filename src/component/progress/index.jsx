import { useState } from "react";
import ProgressBar from "./progress";

const ProgressBarContainer = () => {
    const [bars, setBars] = useState([]);
    const addBar = () => {
        setBars((prev) => [...prev, {id: Date.now()}]);
    }
    return (
        <div className="progress-div">
            <button onClick={addBar}>add bar</button>
            { bars.map(({id}) => <ProgressBar key={id} />) }
        </div>
    );
};

export default ProgressBarContainer;