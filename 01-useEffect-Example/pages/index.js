import MyCard from "../components/MyCard";
import "antd/dist/antd.css";
import { Button } from "antd";
import { useState } from "react";

export default function Home() {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <div>
                <Button
                    danger={isShow}
                    onClick={() => setIsShow((prev) => !prev)}
                >
                    {isShow ? "HIDE" : "SHOW"}
                </Button>
                {isShow && <MyCard />}
            </div>
        </>
    );
}
