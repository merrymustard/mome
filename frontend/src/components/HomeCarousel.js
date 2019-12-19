import React from "react"
import { Gallery, GalleryImage } from "react-gesture-gallery"
import { withRouter } from "react-router-dom"
import { SliderFullWidth } from "../styledComponents/StyledComps"

const images = [
  "images/carousel-ppl.jpg",
  "images/carousel-men.jpg",
  "images/carousel-women.jpg"
]

function CarouselHome() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0)
      } else {
        setIndex(prev => prev + 1)
      }
    }, 6000)
    return () => clearInterval(timer)
  }, [index])

  return (
    <SliderFullWidth>
      <Gallery
        style={{
          height: "100vh",
          width: "100vw",
          padding: 0,
          margin: 0
        }}
        index={index}
        OonRequestChange={i => {
          setIndex(i)
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
    </SliderFullWidth>
  )
}

export default withRouter(CarouselHome)
