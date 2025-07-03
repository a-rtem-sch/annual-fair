import { useEffect } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import styles from "../styles/QrModal.module.css"

export default function QrModal({ isOpen, onClose, onScan }) {
  useEffect(() => {
    if (!isOpen) return

    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    })

    scanner.render(
      (decodedText) => {
        onScan(decodedText)
        scanner.clear().then(onClose)
      },
      (errorMessage) => {
        // Можно логировать ошибку, если нужно
      }
    )

    return () => {
      scanner.clear().catch(err => console.error("Ошибка остановки QR", err))
    }
  }, [isOpen, onClose, onScan])

  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <h3 className={styles.title}>Сканируйте QR-код</h3>
        <div id="qr-reader" className={styles.qrContainer}></div>
      </div>
    </div>
  )
}
