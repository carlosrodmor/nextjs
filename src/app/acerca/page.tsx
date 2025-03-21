import styles from '../page.module.css'

export default function Acerca() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Acerca de Nosotros</h1>
        <p className={styles.description}>
          Esta es la página de información sobre nuestro sitio.
        </p>
      </main>
    </div>
  )
}
