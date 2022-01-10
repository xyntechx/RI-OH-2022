import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
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
        <div className={styles.container}>
            <Head>
                <title>RI Open House Games 2022</title>
                <meta
                    name="description"
                    content="Raffles Institution Open House Games 2022"
                />
                <link rel="icon" href="/favicon.ico?v=2" />
            </Head>

            <Image src="/bgplanets.jpg" alt="Earth Background" layout="fill" />

            <main className={device ? styles.main : styles.hidden}>
                <h1 className={styles.title}>RI Open House 2022 Games Team</h1>
                <br />
                <h1 className={styles.subtitle}>Website</h1>
                <Link href="https://github.com/xyntechx">
                    <a target="_blank" className={styles.desc}>
                        Nyx Iskandar 22S06G
                    </a>
                </Link>
                <Link href="https://github.com/flyyee">
                    <a target="_blank" className={styles.desc}>
                        Gerrard Tai 22S06D
                    </a>
                </Link>
                <br />
                <h1 className={styles.subtitle}>Mad Match</h1>
                <Link href="https://github.com/geraldnyeo">
                    <a target="_blank" className={styles.desc}>
                        Gerald Nyeo 22S06Q
                    </a>
                </Link>
                <Link href="https://github.com/xyntechx">
                    <a target="_blank" className={styles.desc}>
                        Nyx Iskandar 22S06G
                    </a>
                </Link>
                <br />
                <h1 className={styles.subtitle}>Beats Strike</h1>
                <Link href="https://github.com/flyyee">
                    <a target="_blank" className={styles.desc}>
                        Gerrard Tai 22S06D
                    </a>
                </Link>
                <Link href="https://github.com/Lol-Hi">
                    <a target="_blank" className={styles.desc}>
                        Koh Luck Heng 22S06G
                    </a>
                </Link>
                <br />
                <h1 className={styles.subtitle}>Picture Perfect</h1>
                <Link href="https://github.com/palpatinezw">
                    <a target="_blank" className={styles.desc}>
                        Huang Ziwen 22S06D
                    </a>
                </Link>
                <Link href="https://github.com/Zeephdek">
                    <a target="_blank" className={styles.desc}>
                        Chang Zee Hang 22S06E
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.button}>Back to Home</a>
                </Link>
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

export default About;
