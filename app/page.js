import Header from './components/Header'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'
import SeoWork from './components/Seowork'

export default function Home() {
  return (

    <div>

      <div className='all_contnent mx-auto font-extralight'>
        <Header />

        <main>
          <div className='welcome_block p-10 mb-8 bg-selfgray border border-selfborder rounded-lg'>
            <span className='welcome_title text-6xl'>
              Привет! Я Великанова Дарья —{' '}
              <span className='text-selfpurple'>фронтенд разработчик</span>{' '}
              и{' '}
              <span className='text-selfpurple'>SEO-специалист</span>
            </span>
            <p className='text-gray-400 mt-4 text-base font-light max-w-2xl'>
              Делаю сайты которые хорошо работают и хорошо ранжируются — понимаю продвижение на уровне кода
            </p>
          </div>
          <Skills />
          <SeoWork />
          <Project />
          <Contact />
        </main>
      </div>
    </div>
  )
}


