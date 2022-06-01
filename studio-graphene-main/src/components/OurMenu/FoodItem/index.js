import React from "react"

import { colors } from "../../../styles"

const foodStyles = {}

const foodTypeStyle = {
  fontSize: 62,
  color: "#333333",
  marginBottom: 40,
}

const foodNameStyle = {
  fontSize: 14,
  color: "#333333",
  marginBottom: 8,
}

const foodPriceStyle = {
  fontSize: 15,
  color: "#767676",
  marginBottom: 8,
}

const FoodItem = ({ item }) => {
  return (
    <div style={foodStyles}>
      <h2 style={foodTypeStyle}>{item.title}</h2>
      <p style={foodNameStyle}>{item.description}</p>
      <p style={foodPriceStyle}>{item.price}</p>
    </div>
  )
}

export default FoodItem
