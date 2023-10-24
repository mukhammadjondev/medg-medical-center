import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar, Footer } from "./components"
import Home from "./pages/home"
import BlogDetailed from './pages/blog-detailed'
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./theme/themes"
import { useState } from "react"

function App() {
  const [theme, setTheme] = useState('light')

  const toggleMode = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("mode", newTheme)
  }

  return (
    <ThemeProvider theme={localStorage.getItem('mode') === 'dark' ? darkTheme : lightTheme}>
      <Router>
        <Navbar toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog-detailed/:id" element={<BlogDetailed />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App