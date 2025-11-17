import './App.css'
import heroBg from './assets/Hero_Img.jpg'
import Navbar from './Components/navbar'
import HeroSection from './Components/heroSection'
import ScrollScreen from './Components/scrollComponent'

function App() {

  return (
    <div className="min-h-screen text-white">
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Navbar />
        <HeroSection />
      </section>
      <section className="bg-black text-white px-10 py-24">
        <ScrollScreen />
      </section>
    </div>
  )
}

export default App
