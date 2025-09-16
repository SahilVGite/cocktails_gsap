import React from 'react'
import { navLinks } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    });

    navTween.fromTo('nav', {
      backgroundColor: 'transparant'
    }, {
      backgroundColor: '#00000050',
      backgroundFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut'
    })
  })

  return (
    <nav>
      <div>
        <a href="#hero" className='flex items-center gap-2' onClick={(e) => {e.preventDefault();document.getElementById('hero')?.scrollIntoView({ behavior: "smooth" });}}>
          <img src="/cocktails_gsap/images/logo.png" alt="Logo" />
            <p>Velvet Pour</p>
        </a>

        <ul>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a href={`#${link.id}`} onClick={(e) => {e.preventDefault();document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });}}>{link.title}</a>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
