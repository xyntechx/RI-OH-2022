import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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

            <Image src="/bg.png" alt="Earth Background" layout="fill" />

            <main className={styles.main}>
                <h1 className={styles.title}>Ready to Play Some Games?</h1>
                <br />
                <div className={styles.tooltip}>
                    <Link href="/play">
                        <a className={styles.button}>I&apos;m Ready!</a>
                    </Link>
                    <span className={styles.tooltiptext}>
                        By pressing this button, I confirm that I am not on a
                        mobile device as I would be unable to play the games if
                        I were using one!
                    </span>
                </div>
                <br />
                <footer className={styles.footer}>
                    <p>RI Open House Games 2022</p>
                </footer>
            </main>
        </div>
    );
};

export default Home;
