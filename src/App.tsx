import Card from "./components/techonologies/Card"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import type { ITechnology } from "./types/techonologiesType"
import { Suspense } from "react"
import Techonologies from "./components/techonologies/Techonologies"


 const techonologiesFetch = async(): Promise<ITechnology[]> => {{
        const res = await fetch('/data.json')
        const data = await res.json()
        return data;
    }}


function App() {

  const techonologiesPromise = techonologiesFetch()
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Footer/>
    <Suspense fallback={<div>Loading...</div>}>   
    <Techonologies techonologiesPromise={techonologiesPromise}/>
    </Suspense>
     
    </>
  )
}

export default App
