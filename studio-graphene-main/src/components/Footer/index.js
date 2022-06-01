import React from "react"

import { colors } from "../../styles"

const containerStyles = {
  width: "100vw",
  height: 300,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.gray,
}


const Footer = () => {
  return (
    <div style={containerStyles} id="footer">
    </div>
  )
}

export default Footer
