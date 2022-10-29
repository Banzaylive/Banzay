import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.twitch.tv/banzay_live">Banzay.live !</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.twitch.tv/banzay_live" className={styles.card}>
            <h2>Le stream</h2>
            <p>Viens on est bien. :)</p>
          </a>

          <a
            href="https://discord.gg/gArvnvJSmh"
            className={styles.card}
          >
            <h2>Le Forum</h2>
            <p>Rejoins le discord petit batard</p>
          </a>

          <a
            href="https://www.youtube.com/channel/UC6DfPo5lMR5RU5AN2PPXrww"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Le Youtube Game</h2>
            <p>Check des vidéos de qualité !</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
