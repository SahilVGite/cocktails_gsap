import { useState } from 'react'
import './App.css'
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <Navbar />
      <Hero />
      <Cocktails />
     </main>
    </>
  )
}

export default App
