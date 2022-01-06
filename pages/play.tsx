import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import alien from "../public/alien.png";
import astronaut from "../public/astronaut.png";
import rocket from "../public/rocket.png";

const Play: NextPage = () => {
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
                <br />
                <footer className={styles.footer}>
                    <p>RI Open House Games 2022</p>
                </footer>
            </main>
        </div>
    );
};

export default Play;
