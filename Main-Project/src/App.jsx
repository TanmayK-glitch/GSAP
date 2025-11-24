import './App.css'
import CustomCursor from './Components/CustomCursor'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import WorkSection from './Components/WorkSection'
import Carousel from './Components/Carousel'
import AboutSection from './Components/AboutSection'
import VerticalScroll from './Components/VerticalScroll'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HomePage />
      <WorkSection />
      <Carousel />
      <AboutSection />
      <VerticalScroll />
      <Footer />
    </>
  )
}

export default App