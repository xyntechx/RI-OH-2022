import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import alien from "../public/alien.png";
import astronaut from "../public/astronaut.png";
import rocket from "../public/rocket.png";
import { useState, useEffect } from "react";

const Play: NextPage = () => {
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
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={device ? styles.main : styles.hidden}>
                <h1 className={styles.title}>Choose a Game</h1>
                <div className={styles.imgContainer}>
                    <div className={styles.tooltip}>
                        <Link href="https://ohgames.herokuapp.com/mem">
                            <a target="_blank">
                                <Image
                                    src={astronaut}
                                    alt="Astronaut"
                                    width={250}
                                    height={250}
                                    className={styles.img}
                                />
                            </a>
                        </Link>
                        <span className={styles.tooltiptext}>Memory</span>
                    </div>
                    <br />
                    <div className={styles.tooltip}>
                        <Link href="https://ohgames.herokuapp.com/tap">
                            <a target="_blank">
                                <Image
                                    src={alien}
                                    alt="Alien"
                                    width={250}
                                    height={250}
                                    className={styles.img}
                                />
                            </a>
                        </Link>
                        <span className={styles.tooltiptext}>TapTap</span>
                    </div>
                    <br />
                    <div className={styles.tooltip}>
                        <Link href="https://ohgames.herokuapp.com/jig">
                            <a target="_blank">
                                <Image
                                    src={rocket}
                                    alt="Rocket"
                                    width={250}
                                    height={250}
                                    className={styles.img}
                                />
                            </a>
                        </Link>
                        <span className={styles.tooltiptext}>Jigsaw</span>
                    </div>
                </div>
                <br />
                <Link href="/">
                    <a className={styles.button}>Back to Home</a>
                </Link>
            </main>

            <main className={device ? styles.hidden : styles.main}>
                <h1 className={styles.title}>
                    Sorry! I only work on desktops/laptops
                </h1>
            </main>
        </div>
    );
};

export default Play;
