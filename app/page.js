import Header from './components/Header'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'

export default function Home() {
  return (

    <div>

      <div className='w-[70%] mx-auto'>
        <Header />

        <main>
          <div className='p-10 mb-8 bg-selfgray border border-selfborder rounded-lg'>
            <span className='text-6xl'>Привет! Я Великанова Дарья, <br />и<span className='text-selfpurple'> фронтенд разработчик</span> </span>
          </div>
          <Skills />
          <Project />
          <Contact />
        </main>
      </div>
    </div>
  )
}


