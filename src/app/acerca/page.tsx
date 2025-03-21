import styles from './page.module.css'
import Image from 'next/image'

export default function Acerca() {
  const teamMembers = [
    {
      id: 1,
      name: 'Laura Martínez',
      position: 'CEO & Fundadora',
      bio: 'Con más de 10 años de experiencia en diseño digital y estrategia, Laura lidera nuestra visión de crear experiencias digitales excepcionales.',
      image: '/team1.png'
    },
    {
      id: 2,
      name: 'Daniel Hernández',
      position: 'Director Creativo',
      bio: 'Daniel combina estética y funcionalidad para crear diseños minimalistas que resuenan con la audiencia y reflejan la esencia de cada marca.',
      image: '/team2.png'
    },
    {
      id: 3,
      name: 'Sofía García',
      position: 'Desarrolladora Frontend',
      bio: 'Especialista en crear interfaces de usuario fluidas y responsivas, Sofía traduce diseños elegantes en experiencias web interactivas.',
      image: '/team3.png'
    },
    {
      id: 4,
      name: 'Javier López',
      position: 'Estratega Digital',
      bio: 'Javier analiza tendencias y comportamientos para desarrollar estrategias que maximizan el impacto de cada proyecto digital.',
      image: '/team4.png'
    }
  ]

  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Nuestra <span className={styles.highlight}>Historia</span>
            </h1>
            <p className={styles.subtitle}>
              Somos un equipo apasionado por crear experiencias digitales únicas con un
              enfoque minimalista y elegante.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.sectionTitle}>Nuestra Misión</h2>
              <p className={styles.paragraph}>
                En Nova, nos dedicamos a transformar ideas en experiencias digitales
                memorables. Creemos que el diseño debe ser tanto hermoso como funcional, y
                que cada proyecto merece un enfoque personalizado que refleje la esencia
                única de cada marca.
              </p>
              <p className={styles.paragraph}>
                Nuestra misión es ayudar a empresas y emprendedores a destacar en el mundo
                digital a través de soluciones web innovadoras que combinan estética
                minimalista, usabilidad intuitiva y rendimiento excepcional.
              </p>
            </div>
            <div className={styles.missionImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src='/mission-image.png'
                  alt='Nuestra misión'
                  width={500}
                  height={400}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>✨</div>
              <h3 className={styles.valueTitle}>Excelencia</h3>
              <p className={styles.valueText}>
                Nos esforzamos por la excelencia en cada detalle, desde el diseño hasta el
                código.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Colaboración</h3>
              <p className={styles.valueText}>
                Trabajamos estrechamente con nuestros clientes en cada etapa del proceso.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3 className={styles.valueTitle}>Innovación</h3>
              <p className={styles.valueText}>
                Exploramos constantemente nuevas ideas y tecnologías para mantenernos a la
                vanguardia.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌱</div>
              <h3 className={styles.valueTitle}>Sostenibilidad</h3>
              <p className={styles.valueText}>
                Creamos soluciones duraderas y sostenibles que evolucionan con el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
          <p className={styles.sectionSubtitle}>
            Un grupo de profesionales apasionados por el diseño y la tecnología.
          </p>

          <div className={styles.teamGrid}>
            {teamMembers.map(member => (
              <div key={member.id} className={styles.teamCard}>
                <div className={styles.teamImageContainer}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className={styles.teamImage}
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamPosition}>{member.position}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
