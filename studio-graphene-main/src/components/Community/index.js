import React from "react"

import ImageCard from "./ImageCard"
import SocialMediaCard from "./SocialMediaCard"

import { colors } from "../../styles"

const containerStyles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.almostWhite,
}

const menuStyle = {
  display: "flex",
  flexDirection: "column",
}

const menuContentStyle = {
  display: "flex",
  flexDirection: "row",
}

const menuTitleStyle = {
  color: colors.charcoal,
  fontSize: 50,
}

const topRowStyle = {
  display: "flex",
  flexDirection: "row",
}

const knowMoreStyles = {
  width: 95,
  height: 30,
  padding: 8,
  marginTop: 16,
  marginBottom: 40,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.lightSalmon,
}

const knowMoreTextStyles = {
  color: colors.charcoal,
  textAlign: "center",
}

const loremStyles = {
  width: 200,
  fontSize: 22,
  wrap: "flexWrap",
  color: colors.charcoal,
}

const Community = () => {
  return (
    <div style={containerStyles} id="community">
      <div style={topRowStyle}>
        <div style={{ marginRight: 30 }}>
          <h2 style={menuTitleStyle}>MEET OUR</h2>
          <h2 style={menuTitleStyle}>COMMUNITY</h2>

          <div style={knowMoreStyles}>
            <h3 style={knowMoreTextStyles}>KNOW MORE</h3>
          </div>

          <h4 style={loremStyles}>
            LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN
            TORNA ENTALTO
          </h4>
        </div>

        <ImageCard />
        <SocialMediaCard />
      </div>

      <div style={topRowStyle}>
        <ImageCard />
        <SocialMediaCard />
      </div>

      <div style={topRowStyle}>
        <ImageCard />
        <SocialMediaCard />
      </div>
    </div>
  )
}

export default Community
