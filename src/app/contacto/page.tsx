import styles from './page.module.css'

export default function Contacto() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Hablemos sobre tu <span className={styles.highlight}>Proyecto</span>
            </h1>
            <p className={styles.subtitle}>
              Estamos aquí para ayudarte a crear una presencia digital excepcional.
              Completa el formulario y nos pondremos en contacto contigo pronto.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactContainer}>
            <div className={styles.formContainer}>
              <h2 className={styles.sectionTitle}>Envíanos un mensaje</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor='name' className={styles.label}>
                    Nombre completo
                  </label>
                  <input
                    type='text'
                    id='name'
                    className={styles.input}
                    placeholder='Tu nombre'
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor='email' className={styles.label}>
                    Correo electrónico
                  </label>
                  <input
                    type='email'
                    id='email'
                    className={styles.input}
                    placeholder='correo@ejemplo.com'
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor='phone' className={styles.label}>
                      Teléfono (opcional)
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      className={styles.input}
                      placeholder='+34 123 456 789'
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='budget' className={styles.label}>
                      Presupuesto estimado
                    </label>
                    <select id='budget' className={styles.select} required>
                      <option value=''>Seleccionar</option>
                      <option value='1000-3000'>1,000€ - 3,000€</option>
                      <option value='3000-5000'>3,000€ - 5,000€</option>
                      <option value='5000-10000'>5,000€ - 10,000€</option>
                      <option value='10000+'>Más de 10,000€</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor='service' className={styles.label}>
                    Servicio de interés
                  </label>
                  <select id='service' className={styles.select} required>
                    <option value=''>Seleccionar</option>
                    <option value='web-design'>Diseño Web</option>
                    <option value='development'>Desarrollo</option>
                    <option value='branding'>Branding</option>
                    <option value='marketing'>Marketing Digital</option>
                    <option value='other'>Otro</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor='message' className={styles.label}>
                    Tu mensaje
                  </label>
                  <textarea
                    id='message'
                    className={styles.textarea}
                    rows={5}
                    placeholder='Cuéntanos sobre tu proyecto...'
                    required
                  ></textarea>
                </div>

                <button type='submit' className={styles.submitButton}>
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Información de contacto</h3>
                <p className={styles.infoText}>
                  No dudes en contactarnos directamente usando la siguiente información.
                </p>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📧</div>
                  <a href='mailto:info@novadesign.com' className={styles.infoLink}>
                    info@novadesign.com
                  </a>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <a href='tel:+34123456789' className={styles.infoLink}>
                    +34 123 456 789
                  </a>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <address className={styles.address}>
                    Calle Ejemplo 123
                    <br />
                    28001 Madrid, España
                  </address>
                </div>

                <div className={styles.socialLinks}>
                  <a href='#' className={styles.socialLink}>
                    Twitter
                  </a>
                  <a href='#' className={styles.socialLink}>
                    LinkedIn
                  </a>
                  <a href='#' className={styles.socialLink}>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
