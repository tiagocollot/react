import React from "react"

const imageCardStyle = {
  position: "relative",
  width: 222,
  height: 222,
  padding: 16,
  border: "1px solid black",
}

const imageCardIconStyle = {
  width: 60,
  height: 60,
  backgroundColor: "pink",
  position: "absolute",
  top: 0,
  right: 0,
}

const ImageCard = ({ imageUrl }) => {
  return (
    <div style={imageCardStyle}>
      <img
        src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80"
        alt="image card"
        width="100%"
        height="100%"
      />

      <div style={imageCardIconStyle}>
      </div>
    </div>
  )
}

export default ImageCard;
