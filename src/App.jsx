import { use, useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import styles from "./App.module.css";
import BottomMenu from "./components/BottomMenu";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  // ТУТ ПРОМОТКА ЭКРАНА
  const scrollTargetRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.app}>
      {/* <Header /> */}
      <section id="modal" className={styles.modal}>
        <BottomMenu />
      </section>
      <section id="home">
        <Introduction />
      </section>
      <section
        id="calendar"
        ref={scrollTargetRef}
        style={{ height: "100vh", backgroundColor: "" }}
      >
        <CountdownTimer
          startDate="2025-07-14T09:00:00"
          endDate="2025-07-14T18:00:00"
        />
      </section>
      <section id="delete">
        <Footer />
      </section>
    </div>
  );
}

export default App;
