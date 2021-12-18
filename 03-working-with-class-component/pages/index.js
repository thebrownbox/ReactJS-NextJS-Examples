import { Button, Col, Row } from "antd";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const changePage = (pageName) => {
        console.log("Change to page: " + pageName);
        router.push("/" + pageName);
    };

    return (
        <div className={styles.container}>
            <Row>
                <Button
                    shape="round"
                    onClick={() => changePage("01-basic")}
                    type="primary"
                >
                    Basic Class Component
                </Button>
                <Button
                    shape="round"
                    onClick={() => changePage("02-state")}
                    type="primary"
                >
                    State in Class component
                </Button>
                <Button
                    shape="round"
                    onClick={() => changePage("03-life-cycle")}
                    type="primary"
                >
                    Life Cycle in Class component
                </Button>
            </Row>
        </div>
    );
}
