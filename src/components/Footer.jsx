import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Школьная Ярмарка. Все права защищены.</p>
      <p>Контакты: <a href="mailto:info@schoolfair.ru">info@schoolfair.ru</a></p>
    </footer>
  )
}
