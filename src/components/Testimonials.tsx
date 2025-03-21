import styles from './Testimonials.module.css'
import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'El equipo de Nova transformó por completo nuestra presencia digital. Su enfoque minimalista y elegante ha capturado perfectamente la esencia de nuestra marca.',
      author: 'María Rodríguez',
      position: 'CEO, Innovatech',
      avatar: '/images/avatar1.jpg',
      rating: 5
    },
    {
      id: 2,
      quote:
        'Trabajar con Nova fue una experiencia excepcional. Entendieron nuestras necesidades desde el primer día y entregaron un producto que superó todas nuestras expectativas.',
      author: 'Carlos Mendoza',
      position: 'Director de Marketing, GlobalVision',
      avatar: '/images/avatar2.jpg',
      rating: 5
    },
    {
      id: 3,
      quote:
        'Nuestro sitio web no solo es visualmente impresionante, sino que también ha mejorado significativamente la conversión de visitantes a clientes. No podríamos estar más satisfechos.',
      author: 'Ana Gómez',
      position: 'Fundadora, EcoStyle',
      avatar: '/images/avatar3.jpg',
      rating: 4
    }
  ]

  const renderStars = rating => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      )
    }
    return <div className={styles.starRating}>{stars}</div>
  }

  return (
    <section className={styles.testimonials} id='testimonios'>
      <div className={styles.container}>
        <div className={styles.decorativeElement1}></div>
        <div className={styles.decorativeElement2}></div>

        <div className={styles.heading}>
          <h2 className={styles.title}>
            Lo que dicen <span className={styles.highlight}>nuestros clientes</span>
          </h2>
          <p className={styles.subtitle}>
            Colaboramos estrechamente con nuestros clientes para crear soluciones
            digitales que realmente marcan la diferencia.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.cardHeader}>
                <div className={styles.avatarContainer}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className={styles.avatar}
                  />
                  <div className={styles.avatarGlow}></div>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.author}</h4>
                  <p className={styles.authorPosition}>{testimonial.position}</p>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <div className={styles.quote}>
                <svg
                  className={styles.quoteIcon}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z' />
                </svg>
                <p className={styles.testimonialText}>{testimonial.quote}</p>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.cardDecoration}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            Ver más testimonios
            <svg
              className={styles.arrowIcon}
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 12H19M19 12L13 6M19 12L13 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
