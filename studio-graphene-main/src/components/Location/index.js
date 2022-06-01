import React from "react"

import { colors } from "../../styles"

const containerStyles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.gray,
}

const textStyles = {
  fontSize: 24,
  color: colors.white,
}

const Location = () => {
  return (
    <div style={containerStyles} id="location">
      <h2 style={textStyles}>LOCATION</h2>
    </div>
  )
}

export default Location
