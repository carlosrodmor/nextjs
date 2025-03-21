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
          <div className={styles.imageGrid}>
            <div className={`${styles.imageWrapper} ${styles.mainImage}`}>
              <Image
                src='/images/hero-main.jpg'
                alt='Diseño web moderno'
                width={500}
                height={400}
                className={styles.heroImage}
                priority
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.secondaryImage}`}>
              <Image
                src='/images/hero-secondary.jpg'
                alt='Diseño minimalista'
                width={280}
                height={220}
                className={styles.heroImage}
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.tertiaryImage}`}>
              <Image
                src='/images/hero-tertiary.jpg'
                alt='Experiencia de usuario'
                width={250}
                height={200}
                className={styles.heroImage}
              />
            </div>
          </div>
          <div className={styles.backgroundElements}>
            <div className={styles.backgroundGradient}></div>
            <div className={styles.backgroundShape1}></div>
            <div className={styles.backgroundShape2}></div>
            <div className={styles.decorativeCircle}></div>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouseIcon}></div>
        <span>Desliza para descubrir</span>
      </div>
    </section>
  )
}

export default Hero
