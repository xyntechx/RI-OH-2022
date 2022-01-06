import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Help: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>RI Open House Games 2022</title>
                <meta
                    name="description"
                    content="Raffles Institution Open House Games 2022"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                help
            </main>
        </div>
    );
};

export default Help;
