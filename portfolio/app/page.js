import Image from 'next/image'
import Header from './components/Header'
import Project from './components/Project'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

export default function Home() {
  return (

    <div>

    <div className='w-[70%] mx-auto'>
    <Header/>
    
    <main>
      <div className='p-10 mb-8 bg-selfgray border border-selfborder rounded-lg'>
    <span className='text-6xl'>Hi, I'm Dasha Velikanova, <br/>I'm a <span className='text-selfpurple'> Frontend Developer</span> </span>
    </div>
    <Project/>
    <AboutMe/>
    <Contact/>
    </main>
    </div>
    </div>
  )
}


