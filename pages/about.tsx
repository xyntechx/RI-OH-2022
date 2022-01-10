import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
    const deviceType = () => {
        const ua = navigator.userAgent;

        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            alert(
                "Sorry! You can only play the games on desktops or laptops, but feel free to still browse through this website!"
            );
        } else if (
            /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            alert(
                "Sorry! You can only play the games on desktops or laptops, but feel free to still browse through this website!"
            );
        }
        return 1;
    };

    useEffect(() => {
        deviceType();
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

            <main className={styles.main}>
                <h1 className={styles.title}>RI Open House 2022 Games Team</h1>
                <br />
                <p className={styles.desc}>Gerrard Tai (22S06D)</p>
                <p className={styles.desc}>Huang Ziwen (22S06D)</p>
                <p className={styles.desc}>Chang Zee Hang (22S06E)</p>
                <p className={styles.desc}>Koh Luck Heng (22S06G)</p>
                <p className={styles.desc}>Nyx Iskandar (22S06G)</p>
                <p className={styles.desc}>Gerald Nyeo (22S06Q)</p>
                <Link href="/">
                    <a className={styles.button}>Back to Home</a>
                </Link>
                <footer className={styles.footer}>
                    <Link href="https://openhouse.ri.edu.sg/">
                        <a target="_blank">RI Open House Games 2022</a>
                    </Link>
                </footer>
            </main>
        </div>
    );
};

export default About;
