import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import alien from "../public/alien.png";
import astronaut from "../public/astronaut.png";
import rocket from "../public/rocket.png";

const Play: NextPage = () => {
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
                <h1 className={styles.title}>Teleport Me to a Game</h1>
                <p className={styles.text}>
                    The TOP 10 players by 16th Jan (12pm) in the leaderboards
                    will earn an EXCLUSIVE pouch!
                </p>
                <div className={styles.imgContainer}>
                    <div className={styles.tooltip}>
                        <Link href="https://RIOHGames22.github.io/madmatch/">
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
                        <span className={styles.tooltiptext}>Mad Match</span>
                    </div>
                    <br />
                    <div className={styles.tooltip}>
                        <Link href="https://RIOHGames22.github.io/beatsstrike/">
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
                        <span className={styles.tooltiptext}>Beats Strike</span>
                    </div>
                    <br />
                    <div className={styles.tooltip}>
                        <Link href="https://RIOHGames22.github.io/pictureperfect/">
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
                        <span className={styles.tooltiptext}>
                            Picture Perfect
                        </span>
                    </div>
                </div>
                <p className={styles.desc}>
                    To enter, please submit your score with a valid email!
                </p>
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

export default Play;
