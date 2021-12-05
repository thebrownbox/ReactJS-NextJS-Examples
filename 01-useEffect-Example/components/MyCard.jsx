import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";

export default function MyCard() {
    const [myText, setMyText] = useState("");
    const [myNumber, setMyNumber] = useState(0);

    useEffect(() => {
        console.log("This function call every time any state changed!");
        return () => {
            console.log(
                "This function call before running a new useEffect call!"
            );
        };
    });

    useEffect(() => {
        console.log("This function only run the first time it mounted!");
        return () => {
            console.log("This function only run after unmounted!");
        };
    }, []);

    useEffect(() => {
        console.log("This function call every time myText is changed!");
        return () => {
            console.log("This function is called BEFORE above useEffect call");
        };
    }, [myText]);

    return (
        <>
            <h2>This is MyCard!</h2>
            <Input
                value={myText}
                onChange={(e) => setMyText(e.target.value)}
                style={{ width: 500, margin: 5 }}
            />
            <Button onClick={() => setMyNumber((prev) => prev + 1)}>ADD</Button>
            <div>Text input: {myText}</div>
            <div>My Number: {myNumber}</div>
        </>
    );
}
