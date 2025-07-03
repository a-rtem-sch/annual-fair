import { useState, useEffect } from "react";
import QrModal from "./QrModal"; // твой компонент
import styles from "../styles/BottomMenu.module.css";

export default function BottomMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Массив секций и их id
  const sections = [
    { id: "home", icon: "/photos/home.png" },
    { id: "calendar", icon: "/photos/calendar.png" },
    { id: "delete", icon: "/photos/delete.png" },
  ];
  // ОПРЕДЕЛЕНИЕ ПРОСМАТРИВАЕМОЙ СЕКЦИИ
  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let current = sections[0].id;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.offsetTop;

        if (scrollPos >= top) {
          current = section.id;
        }
      }

      setActiveSection(current);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleScan(decodedText) {
    console.log("QR scanned:", decodedText);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className={styles.container}>
        {/* ОТОБРАЖЕНИЕ ИКОНОК */}
        {sections.map(({ id, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? styles.active : ""}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={icon} alt={id} />
          </a>
        ))}

        <img
          onClick={() => setIsModalOpen(true)}
          src="/photos/qr.png"
          alt="QR"
          className={styles.qrIcon}
          style={{ cursor: "pointer" }}
        />
      </div>

      <QrModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onScan={handleScan}
      />
    </>
  );
}
