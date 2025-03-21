'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <span className={styles.logoText}>Nova</span>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href='/' className={styles.navLink}>
            Inicio
          </Link>
          <Link href='/acerca' className={styles.navLink}>
            Nosotros
          </Link>
          <Link href='/servicios' className={styles.navLink}>
            Servicios
          </Link>
          <Link href='/contacto' className={styles.navLink}>
            Contacto
          </Link>
        </div>
        <button className={styles.ctaButton}>Comenzar</button>
      </div>
    </nav>
  )
}

export default Navbar
