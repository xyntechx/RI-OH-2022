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
                <Link href="/play">
                    <a className={styles.button}>Let&apos;s Go</a>
                </Link>
                <Link href="/help">
                    <a className={styles.button}>
                        I Need Help (With the Games)
                    </a>
                </Link>
                <br />
                <footer className={styles.footer}>
                    <p>RI Open House Games 2022</p>
                </footer>
            </main>
        </div>
    );
};

export default Home;
