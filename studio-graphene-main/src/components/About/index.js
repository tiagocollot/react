import React from "react"

import FoodImage from "./FoodImage"
import RequestInfo from "./RequestInfo"
import Stamp from "./Stamp"
import Title from "./Title"

import { colors } from "../../styles"

const aboutContainerStyles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.lightSalmon,
}

const aboutContentStyles = {
  position: "relative",
  width: "60vw",
}

const About = ({ path, title }) => {
  return (
    <div style={aboutContainerStyles} id="about">
      <FoodImage />

      <div style={aboutContentStyles}>
        <Stamp />
        <Title />
      </div>

      <RequestInfo />
    </div>
  )
}

export default About
