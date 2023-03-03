import styles from "@/styles/Home.module.css";
import Head from "next/head";
export default function Room() {
  return (
    <>
      <Head>
        <title>TaskList</title>
        <meta name="description" content="TaskList" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Room</h1>
      </main>
    </>
  );
}
