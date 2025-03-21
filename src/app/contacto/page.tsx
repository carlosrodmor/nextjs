import styles from '../page.module.css'

export default function Contacto() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contacto</h1>
        <p className={styles.description}>
          Esta es la página de contacto. Puedes ponerte en contacto con nosotros aquí.
        </p>
      </main>
    </div>
  )
}
