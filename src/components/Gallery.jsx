import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../styles/gallery.css" // если хочешь свой стиль

export default function Gallery() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.5,  // Показывает 1.5 картинки (вторая чуть видна)
      spacing: 10,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <img src="../../public/photos/parrot.avif" alt="1" />
      </div>
      <div className="keen-slider__slide">
        <img src="../../public/photos/woman.jpg" alt="2" />
      </div>
      <div className="keen-slider__slide">
        <img src="../../public/photos/parrot.avif" alt="3" />
      </div>
      {/* Добавь больше слайдов по желанию */}
    </div>
  )
}
