import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

import { colors } from "../../../styles"

const NavItem = styled(AnchorLink)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const linkStyles = {
  color: colors.charcoal,
  fontSize: 18,
  fontWeight: "bold",
  textDecoration: "none",
}

const NavbarLink = ({ path, title }) => {
  return (
    <NavItem to={`#${path}`} title={title}>
      <span style={linkStyles}>{title.toUpperCase()}</span>
    </NavItem>
  )
}

export default NavbarLink
