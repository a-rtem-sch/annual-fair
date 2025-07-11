import { useEffect, useRef } from "react";
import styles from "../styles/Map.module.css";

export default function Map() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const handleClick = (e) => {
      const el = e.target;
      if (el.id?.startsWith("room-")) alert("Вы кликнули на: " + el.id);
    };
    svg?.addEventListener("click", handleClick);
    return () => svg?.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={styles.wrapper}>
      <svg
        ref={svgRef}
        className={styles.mapSvg}
        viewBox="0 0 737 579"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect id="block-left" width="210" height="579" fill="#D9D9D9" />
        <rect
          id="block-right"
          x="527"
          width="210"
          height="579"
          fill="#D9D9D9"
        />
        <rect
          id="block-center-top"
          x="267"
          width="210"
          height="242"
          fill="#D9D9D9"
        />
        <rect
          id="block-center-corridor"
          x="105"
          y="219"
          width="521"
          height="200"
          fill="#D9D9D9"
        />
        <rect
          id="block-center-bottom"
          x="250"
          y="412"
          width="244"
          height="32"
          fill="#D9D9D9"
        />

        <rect id="room-red-1" width="209" height="86" fill="#A35C5C" />
        <rect id="room-red-2" x="267" width="209" height="86" fill="#A35C5C" />
        <path
          id="room-red-3"
          d="M34 116.843V86H210V154H71.7143L45.3626 140.157V124.371L34 116.843Z"
          fill="#A35C5C"
        />
        <path
          id="room-red-4"
          d="M209 395H62.7722L38 430.139V487H209V395Z"
          fill="#A35C5C"
        />
        <path
          id="room-red-5"
          d="M209 303H78.2897L61 335.824L78.2897 365.429V396H209V303Z"
          fill="#A35C5C"
        />
        <path
          id="room-red-6"
          d="M267 166V86H403V128.733L387.025 166H267Z"
          fill="#A35C5C"
        />
        <rect
          id="room-red-7"
          x="425"
          y="170"
          width="52"
          height="49"
          fill="#A35C5C"
        />
        <rect id="room-red-8" y="487" width="209" height="92" fill="#A35C5C" />

        <path
          id="room-yellow-1"
          d="M210 154V195H106.929L90 154H210Z"
          fill="#D6B94C"
        />
        <path
          id="room-yellow-2"
          d="M441 133L476.5 117V170.5H441V133Z"
          fill="#D6B94C"
        />
        <rect
          id="room-green-1"
          x="106"
          y="194"
          width="104"
          height="46"
          fill="#7BAF5C"
        />
        <rect
          id="room-green-2"
          x="267"
          y="173"
          width="104"
          height="46"
          fill="#7BAF5C"
        />
      </svg>
    </div>
  );
}
