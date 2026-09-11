import Card from "./components/Card"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Footer/>
    <Card
      technology={{
        id: "1",
        name: "React",
        category: "Frontend",
        description: "A JavaScript library for building user interfaces.",
        icon: "/path/to/react-icon.png",
        rating: 4.8,
        difficulty: "Intermediate",
        badge: "Popular"
      }}
    />
     
    </>
  )
}

export default App
