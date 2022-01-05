import { Menu, MenuItem } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello world</h1>
      <Menu>
        <MenuItem>123</MenuItem>
      </Menu>
    </div>
  );
}
