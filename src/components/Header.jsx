import styles from '../styles/Header.module.css'
import BurgerMenu from './BurgerMenu'





export default function Header() {
  return (
    <header className={styles.header}>
			<div className={styles.headerLeft}>
				<img className={styles.treeIcon} src="photos/tree.png" alt="Logo" />
				<h3>ПУТЬ <br />ЗЕРНА</h3>
			</div>
			<div className={styles.headerRight}>
				{/* <BurgerMenu /> */}
			</div>
    </header>
  )
}
