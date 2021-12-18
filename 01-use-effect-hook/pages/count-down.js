import { useEffect, useState } from "react";

export default function CountDownPage() {
    const [myCountDown, setMyCountDown] = useState(10);

    useEffect(() => {
        // Mounted
        const timerID = setInterval(() => {
            console.log("timer is running...");
            // setMyCountDown((prev) => {
            //     console.log("setMyCountDown");
            //     if (prev > 0) {
            //         return prev - 1;
            //     }
            //     return prev;
            // });
            console.log("myCountDown", myCountDown);
            setMyCountDown(myCountDown - 1);
        }, 2000);
        return () => {
            // Unmounted
        };
    }, []);

    console.log("render-logic");

    return (
        <>
            <h1>CountDown: {myCountDown}</h1>
            {console.log("render-ui")}
        </>
    );
}
