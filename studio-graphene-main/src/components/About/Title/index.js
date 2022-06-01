import React from "react"

import { colors } from "../../../styles"

const titleContainerStyles = {
  marginTop: 48,
}

const primaryTitleStyles = {
  color: colors.white,
  fontSize: 115,
  textAlign: "center",
}

const secondaryTitleStyles = {
  color: colors.white,
  fontSize: 82,
  textAlign: "center",
}

const tertiaryTitleStyles = {
  color: colors.white,
  fontSize: 35,
  marginTop: 16,
  textAlign: "center",
}

const Title = () => {
  return (
    <div style={titleContainerStyles}>
      <h1 style={secondaryTitleStyles}>THE BEST FOODIE</h1>
      <h2 style={primaryTitleStyles}>EXPERIENCE</h2>
      <h4 style={tertiaryTitleStyles}>NOW IN LONDON</h4>
    </div>
  )
}

export default Title
