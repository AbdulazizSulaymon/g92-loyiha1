import { useEffect, useState } from "react";
import "./style.css";

// function ClockWithHook(props) {
//     return <div>
//         <h1>{props.text}</h1>
//         <h1>00:00:00</h1>
//     </div>
// }

//destruktrizatsiya massiv
const massiv = [3, 5, 6, 7, 8];
const a = massiv[0];
const b = massiv[1];

const [d, e, ...qolgani] = massiv;
console.log(d, e);
console.log(qolgani);



const ClockWithHook = (props) => {
    const [time, setTime] = useState(new Date());

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    useEffect(() => {
        setTimeout(() => { setTime(new Date()) }, 1000)
    }, [time])

    return <div>
        <h1>{props.text}</h1>
        <h1>{hour}:{minute}:{second}</h1>
    </div>
}

export default ClockWithHook;