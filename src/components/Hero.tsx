import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Diseños <span className={styles.highlight}>Únicos</span> para
            <br /> un Mundo Digital
          </h1>
          <p className={styles.subtitle}>
            Transformamos ideas en experiencias digitales memorables con un enfoque
            minimalista y elegante que destaca por su funcionalidad.
          </p>
          <div className={styles.cta}>
            <button className={styles.primaryButton}>Comenzar Ahora</button>
            <button className={styles.secondaryButton}>Ver Proyecto</button>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Clientes Satisfechos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>85+</span>
              <span className={styles.statLabel}>Proyectos Completados</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Tasa de Retención</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src='/hero-image.png'
              alt='Diseño web moderno'
              width={600}
              height={600}
              className={styles.heroImage}
              priority
            />
          </div>
          <div className={styles.backgroundGradient}></div>
          <div className={styles.backgroundShape}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
