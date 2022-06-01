import React, {useCallback, useEffect, useState} from "react"

import About from "../components/About"
import Community from "../components/Community"
import Footer from "../components/Footer"
import Location from "../components/Location"
import Navbar from "../components/Navbar"
import OurMenu from "../components/OurMenu"
import Recipes from "../components/Recipes"

import { colors, GlobalStyle } from "../styles"

const pageStyles = {
  color: colors.almostWhite,
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  const [foodItems, setFoodItems] = useState()

  const fetchFoodItems = useCallback(() => {
    fetch("https://studiographene-exercise-api.herokuapp.com/foods", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const starters = []
        const main = []
        const sides = []
        const desserts = []

        data.forEach(item => {
          if (item.type === "starters") {
            starters.push(item)
          } else if (item.type === "main_courses") {
            main.push(item)
          } else if (item.type === "sides") {
            sides.push(item)
          } else if (item.type === "desserts") {
            desserts.push(item)
          }
        })

        setFoodItems({
          starters,
          main,
          sides,
          desserts,
        })
      })
  }, [])

  useEffect(() => {
    fetchFoodItems()
  }, [])

  return (
    <>
      <GlobalStyle />

      <main style={pageStyles}>
        <title>Home Page</title>
        <Navbar />
        <About />
        <Community />
        <Location />
        <OurMenu foodItems={foodItems} />
        <Recipes />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage
