import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  const USERNAME = 'paraspraj'
  return (
    <div className={styles.container}>
      <Head>
        <title>Paras Praj - Software Engineer</title>
        <meta
          name="description"
          content="I enjoy building software and solving problems"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Paras Praj
        </h1>

        <p className={styles.description}>
          I enjoy building software and solving problems.
          <br />
          More content coming soon.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            GitHub - {' '}
            <a
              href={`https://github.com/${USERNAME}`}
              rel="noreferrer"
              target="_blank"
            >
              @{USERNAME}
            </a>
          </div>
          <div className={styles.card}>
            LinkedIn - {' '}
            <a
              href={`https://linkedin.com/in/${USERNAME}`}
              rel="noreferrer"
              target="_blank"
            >
              @{USERNAME}
            </a>
          </div>
          {/* <div className={styles.card}>
            Twitter - {' '}
            <a
              href={`https://twitter.com/${USERNAME}`}
              rel="noreferrer"
              target="_blank"
            >
              @{USERNAME}
            </a>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  )
}
