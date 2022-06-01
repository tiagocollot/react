import React from "react"

import { colors } from "../../../styles"

const socialMediaCardStyle = {
  width: 250,
  height: 250,
  padding: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const socialMediaCardContentStyle = {
  width: 250,
  height: 250,
  padding: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
};

const socialMediaCountStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
}

const titleStyles = {
  color: colors.charcoal,
}

const SocialMediaCard = () => {
  return (
    <div style={socialMediaCardStyle}>
      <div style={socialMediaCardContentStyle}>
        <h3 style={titleStyles}>@buzzfeedfood</h3>

        <p style={titleStyles}>
          It’s taco Tuesday! These tacos from @jesseszewczyk have no added
          sugars and are SO good 🌮. Find the recipe from the link in our bio!
          📸: @taylormillerphoto
        </p>
      </div>

      <div style={socialMediaCountStyle}>
        <p style={{...titleStyles, marginRight: 8}}>60</p>
        <p style={titleStyles}>14.7k</p>
      </div>
    </div>
  )
}

export default SocialMediaCard
