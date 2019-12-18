import React from "react"
import { Gallery, GalleryImage } from "react-gesture-gallery"
import { withRouter } from "react-router-dom"

const images = ["images/mensfashion.jpg", "mensfashion.jpg", "mensfashion.jpg"]

function CarouselHome() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0)
      } else {
        setIndex(prev => prev + 1)
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [index])

  return (
    <Gallery
      style={{
        Height: "100px",
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
  )
}

export default withRouter(CarouselHome)
