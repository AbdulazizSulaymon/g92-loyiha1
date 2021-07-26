import { useEffect, useState } from "react";

const Loading = (props) => {
    const [step, setStep] = useState(0);
    const [color, setColor] = useState("red")

    useEffect(() => {
        setTimeout(() => {
            if (step >= 30 && step < 70) setColor("yellow");
            else if (step >= 70) setColor("green");
            if (step < 100) setStep(step + 1)
        }, 100)
    }, [step])

    return <div className="loadingContainer">
        <div className="loading"
            style={{ width: `${step}%`, backgroundColor: color }}>
            {step}%
        </div>
    </div>
}

export default Loading;