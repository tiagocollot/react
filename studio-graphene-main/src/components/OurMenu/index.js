import React from "react"

import FoodItem from "./FoodItem"

import { colors } from "../../styles"

const containerStyles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
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
  fontSize: 62,
  color: colors.charcoal,
  alignSelf: "center",
}

const OurMenu = ({ foodItems }) => {
  return (
    <div style={containerStyles} id="our-menu">
      <h1 style={menuTitleStyle}>OUR MENU</h1>

      <div style={menuContentStyle}>
        <div>
          <h1 style={menuTitleStyle}>STARTERS</h1>
          {foodItems?.starters?.map((item, index) => (
            <FoodItem key={index} item={item} />
          ))}
        </div>

        <div>
          <h1 style={menuTitleStyle}>MAIN COURSES</h1>
          {foodItems?.main?.map((item, index) => (
            <FoodItem key={index} item={item} />
          ))}
        </div>

        <div>
          <h1 style={menuTitleStyle}>SIDES</h1>
          {foodItems?.sides?.map((item, index) => (
            <FoodItem key={index} item={item} />
          ))}
        </div>

        <div>
          <h1 style={menuTitleStyle}>DESSERTS</h1>
          {foodItems?.desserts?.map((item, index) => (
            <FoodItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurMenu
