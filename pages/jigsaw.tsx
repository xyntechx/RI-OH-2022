import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Jigsaw: NextPage = () => {
    return (
        <iframe src="/jigsaw/index.html" width="100%" height="100%"></iframe>
    );
};

export default Jigsaw;
