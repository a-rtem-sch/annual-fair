import { useEffect, useRef } from "react"
import { Html5Qrcode } from "html5-qrcode"
import styles from "../styles/QrModal.module.css"

export default function QrModal({ isOpen, onClose, onScan }) {
  const scannerRef = useRef(null)

  useEffect(() => {
  if (!isOpen) return

  const qrRegionId = "qr-reader"
  const html5QrCode = new Html5Qrcode(qrRegionId)
  scannerRef.current = html5QrCode

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: { width: 250, height: 250 } },
    async (decodedText) => {
      if (!scannerRef.current) return

      try {
        await scannerRef.current.stop()
        scannerRef.current.clear()
        scannerRef.current = null
        onScan(decodedText)
        onClose()
      } catch (err) {
        console.error("Ошибка при остановке:", err)
      }
    },
    (errorMessage) => {
    }
  )

  return () => {
    if (scannerRef.current) {
      scannerRef.current
        .stop()
        .then(() => scannerRef.current.clear())
        .catch(err => console.warn("Не удалось остановить QR-сканер:", err))
        .finally(() => scannerRef.current = null)
    }
  }
}, [isOpen, onClose, onScan])


  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img
          src="/photos/close.png"
          alt="Закрыть"
          className={styles.closeBtn}
          onClick={onClose}
        />
        <h2 className={styles.title}>SCAN QR</h2>
        <div id="qr-reader" className={styles.qrContainer}></div>
      </div>
    </div>
  )
}
