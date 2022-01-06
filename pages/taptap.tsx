import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const TapTap: NextPage = () => {
    return (
        <iframe src="/taptap/index.html" width="100%" height="100%"></iframe>
    );
};

export default TapTap;
