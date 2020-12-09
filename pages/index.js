import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Divertidamentes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Em construção...
        </h1>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://cavica.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por {' '}
          Cavica
        </a>
      </footer>
    </div>
  )
}
