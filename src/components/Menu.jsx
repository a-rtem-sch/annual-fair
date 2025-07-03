import styles from "../styles/Menu.module.css"

export default function Menu({ isOpen }) {
  return (
    <nav className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
      <a href="#section1">Секция 1</a>
      <a href="#section2">Секция 2</a>
      <a href="#section3">Секция 3</a>
      <a href="#section4">Секция 4</a>
      <a href="#section5">Секция 5</a>
      <a href="#section6">Секция 6</a>
    </nav>
  )
}
