import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Stamp = () => {
  return (
    <StaticImage
      src="../../../images/stamp.png"
      alt="Stamp"
      placeholder="blurred"
      layout="fixed"
    />
  )
}

export default Stamp
