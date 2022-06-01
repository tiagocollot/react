import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles"

const TextContainer = styled.div`
  position: absolute;
  right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-Content: center;
  width: 30px;
  height: 100px;
  cursor: pointer;
  transition: 0.3s;
  background-color: white;
  opacity: 1;

  :hover {
    opacity: 0.85;
  }
`

const textContainerStyles = {
  position: "relative",
}

const textStyles = {
  color: colors.charcoal,
  width: 100,
  transform: "matrix(0,-1,1,0,0,0)",
  fontSize: 12,
  textAlign: "center",
}

const RequestInfo = () => {
  return (
    <TextContainer>
      <div style={textContainerStyles}>
        <h3 style={textStyles}>REQUEST INFO</h3>
      </div>
    </TextContainer>
  )
}

export default RequestInfo
