import { useEffect, useState } from "react"
import styles from "../styles/CountdownTimer.module.css"

export default function CountdownTimer({ startDate, endDate }) {
  const [status, setStatus] = useState("before") // "before" | "during" | "after"
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  function getTimeRemaining() {
    const now = Date.now()
    const start = Date.parse(startDate)
    const end = Date.parse(endDate)

    let currentStatus = "before"
    if (now >= start && now <= end) currentStatus = "during"
    else if (now > end) currentStatus = "after"

    const diff = currentStatus === "before" ? start - now : end - now

    const seconds = Math.floor((diff / 1000) % 60)
    const minutes = Math.floor((diff / 1000 / 60) % 60)
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    return { total: diff, days, hours, minutes, seconds, currentStatus }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getTimeRemaining()
      setTimeLeft(updated)
      setStatus(updated.currentStatus)

      if (updated.currentStatus === "after") {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [startDate, endDate])

  if (status === "after") {
    return <p className={styles.expired}>✅ Мероприятие завершено</p>
  }

  if (status === "during") {
    return <p className={styles.running}>🎉 Мероприятие сейчас идёт!</p>
  }

  // status === "before"
  return (
    <div className={styles.wrapper}>
  <div className={styles.blockWrapper}>
    <div className={`${styles.block} ${styles.block1}`}>
      <span className={styles.number}>{timeLeft.days}</span>
    </div>
    <div className={styles.label}>days</div>
  </div>

  <div className={styles.blockWrapper}>
    <div className={`${styles.block} ${styles.block2}`}>
      <span className={styles.number}>{String(timeLeft.hours).padStart(2, "0")}</span>
    </div>
    <div className={styles.label}>hours</div>
  </div>

  <div className={styles.blockWrapper}>
    <div className={`${styles.block} ${styles.block3}`}>
      <span className={styles.number}>{String(timeLeft.minutes).padStart(2, "0")}</span>
    </div>
    <div className={styles.label}>minutes</div>
  </div>

  <div className={styles.blockWrapper}>
    <div className={`${styles.block} ${styles.block4}`}>
      <span className={styles.number}>{String(timeLeft.seconds).padStart(2, "0")}</span>
    </div>
    <div className={styles.label}>seconds</div>
  </div>
</div>

  )
}
