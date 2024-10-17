import Header from './components/Header'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'

export default function Home() {
  return (

    <div>

      <div className='all_contnent mx-auto'>
        <Header />

        <main>
          <div className='welcome_block p-10 mb-8 bg-selfgray border border-selfborder rounded-lg'>
            <span className='welcome_title text-6xl'>Привет! Я Великанова Дарья, и<span className='text-selfpurple'> фронтенд разработчик</span> </span>
          </div>
          <Skills />
          <Project />
          <Contact />
        </main>
      </div>
    </div>
  )
}


