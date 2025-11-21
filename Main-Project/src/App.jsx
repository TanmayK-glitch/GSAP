import './App.css'
import CustomCursor from './assets/Components/CustomCursor'
import Navbar from './assets/Components/Navbar'
import HomePage from './assets/Components/HomePage'
import WorkSection from './assets/Components/WorkSection'
import Carousel from './assets/Components/Carousel'
import AboutSection from './assets/Components/AboutSection'
import VerticalScroll from './assets/Components/VerticalScroll'
import Footer from './assets/Components/Footer'


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
