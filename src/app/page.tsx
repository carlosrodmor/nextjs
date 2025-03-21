import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a Mi Sitio</h1>
        <p className={styles.description}>
          Esta es una página en blanco lista para desarrollar.
        </p>
      </main>
    </div>
  )
}
