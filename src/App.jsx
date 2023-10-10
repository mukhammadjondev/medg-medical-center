import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import BlogDetailed from './pages/blog-detailed'
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog-detailed" element={<BlogDetailed />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
