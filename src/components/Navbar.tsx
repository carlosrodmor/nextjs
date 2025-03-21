import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>Mi Sitio</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href='/' className={styles.navLink}>
          Inicio
        </Link>
        <Link href='/acerca' className={styles.navLink}>
          Acerca
        </Link>
        <Link href='/contacto' className={styles.navLink}>
          Contacto
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
