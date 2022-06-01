import React, { useEffect, useState } from "react"

import NavbarLink from "./NavbarLink"

import { colors } from "../../styles"

const navbarStyles = {
  position: "fixed",
  top: 0,
  zIndex: 9999,
  paddingTop: 28,
  paddingBottom: 28,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}

const navbarLinkStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const changeNavbarColor = () =>{
      if (window.scrollY >= 80) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", changeNavbarColor)

    return () => {
      window.removeEventListener("scroll", changeNavbarColor)
    }
  }, [])

  return (
    <div style={{ ...navbarStyles, backgroundColor: hasScrolled ? colors.white : colors.lightSalmon }}>
      <div style={navbarLinkStyles}>
        <NavbarLink path="about" title="About" />
        <NavbarLink path="community" title="Community" />
        <NavbarLink path="location" title="Location" />
        <NavbarLink path="our-menu" title="Our Menu" />
        <NavbarLink path="recipes" title="Recipes" />
      </div>

      <div style={navbarLinkStyles}>
        <NavbarLink path="contact" title="Contact" />
        <NavbarLink path="login" title="Login" />
      </div>
    </div>
  )
}

export default Navbar
