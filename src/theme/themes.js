import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  bgPrimary: "#FFF",
  bgSecondary: "#F8F8F8",
  bgHero: "#FFEFFD",
  textPrimary: "#402C36",
  textSecondary: "#C2B7BD",
}

export const darkTheme = {
  bgPrimary: "#1D1D1D",
  bgSecondary: "#454545",
  bgHero: "#1D1D1D",
  bgNavbar: "#323232",
  blurFon: "#2D1E29",
  textPrimary: "#FFF",
  textSecondary: "#C2B7BD",
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.bgPrimary};
  }
`