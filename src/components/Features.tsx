import styles from './Features.module.css'
import Image from 'next/image'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '/images/icon-design.svg',
      title: 'Diseño Único',
      description:
        'Creamos diseños personalizados que reflejan tu marca y la hacen destacar en el mundo digital.'
    },
    {
      id: 2,
      icon: '/images/icon-performance.svg',
      title: 'Alto Rendimiento',
      description:
        'Optimizamos cada detalle para garantizar velocidad y eficiencia en todas las plataformas.'
    },
    {
      id: 3,
      icon: '/images/icon-responsive.svg',
      title: 'Responsive',
      description:
        'Experiencias perfectas en cualquier dispositivo, desde móviles hasta pantallas de escritorio.'
    },
    {
      id: 4,
      icon: '/images/icon-seo.svg',
      title: 'SEO Optimizado',
      description:
        'Mejoramos tu visibilidad online con estrategias de optimización para motores de búsqueda.'
    },
    {
      id: 5,
      icon: '/images/icon-maintenance.svg',
      title: 'Fácil Mantenimiento',
      description:
        'Código limpio y bien estructurado que facilita actualizaciones y mejoras futuras.'
    },
    {
      id: 6,
      icon: '/images/icon-security.svg',
      title: 'Seguridad Avanzada',
      description:
        'Protegemos tu sitio con las últimas tecnologías de seguridad para datos e información.'
    }
  ]

  return (
    <section className={styles.features} id='features'>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Características <span className={styles.highlight}>Destacadas</span>
          </h2>
          <p className={styles.subtitle}>
            Nuestro enfoque combina diseño, tecnología y estrategia para crear
            experiencias digitales excepcionales.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map(feature => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.iconContainer}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
              <div className={styles.cardDecoration}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
