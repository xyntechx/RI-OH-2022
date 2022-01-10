import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
    const [device, setDevice] = useState(0);

    const deviceType = () => {
        // 0 = tablet, mobile
        // 1 = desktop

        const ua = navigator.userAgent;

        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 0;
        } else if (
            /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            return 0;
        }
        return 1;
    };

    useEffect(() => {
        setDevice(deviceType());
    });

    return (
        <div className={styles.containerMain}>
            <Head>
                <title>RI Open House Games 2022</title>
                <meta
                    name="description"
                    content="Raffles Institution Open House Games 2022"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* For desktop */}
            <main className={device ? styles.main : styles.hidden}>
                <h1 className={styles.title}>
                    Will You Join Me on This Voyage?
                </h1>
                <br />
                <Link href="/play">
                    <a className={styles.button}>Let&apos;s Go</a>
                </Link>
                <Link href="/about">
                    <a className={styles.button}>About</a>
                </Link>
                <footer className={styles.footer}>
                    <Link href="https://openhouse.ri.edu.sg/">
                        <a target="_blank">RI Open House Games 2022</a>
                    </Link>
                </footer>
            </main>

            {/* For mobile/tablet */}
            <main className={device ? styles.hidden : styles.main}>
                <h1 className={styles.title}>
                    Sorry! I only work on desktops or laptops :D
                </h1>
            </main>
        </div>
    );
};

export default Home;
