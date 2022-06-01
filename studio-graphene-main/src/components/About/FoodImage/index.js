import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const foodImageStyles = {
  position: "absolute",
  left: 0,
}

const FoodImage = () => {
  return (
    <div style={foodImageStyles}>
      <StaticImage
        src="../../../images/about-food.webp"
        alt="The best food experience"
        placeholder="blurred"
      />
    </div>
  )
}

export default FoodImage
