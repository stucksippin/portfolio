import React from 'react'

export default function Skills() {
    return (
        <section id="skills" className='section_skills mb-10'>
            <div className='text-white text-3xl mb-10'>
                НАВЫКИ<span className='text-selfpurple text-4xl mr-8'>.</span>
            </div>

            <div className='skills_containers p-10 bg-selfgray border border-selfborder rounded-lg grid grid-cols-2 gap-8'>

                <ul className='skills_container'>
                    <li className='skills_title text-2xl bold text-selfpurple'>Веб-разработка</li>
                    <li className='skills_dis text-lg mt-2'>Javascript, Node.js, Prisma, Pania, PostgreSQL, RenJS, OAuth, Docker</li>
                </ul>

                <ul className='skills_container'>
                    <li className='skills_title text-2xl bold text-selfpurple'>UX/UI</li>
                    <li className='skills_dis text-lg mt-2'>Photoshop, Figma, Sketch, XMind, User Research, Usability Testing.</li>
                </ul>

                <ul className='skills_container'>
                    <li className='skills_title text-2xl bold text-selfpurple'>Frontend разработка</li>
                    <li className='skills_dis text-lg mt-2'>Next.js, Vue.js, React.js, Tailwind CSS, Zustand, HTML, CSS, SASS, Bootstrap, Wordpress</li>
                </ul>

                <ul className='skills_container'>
                    <li className='skills_title text-2xl bold text-selfpurple'>SEO</li>
                    <li className='skills_dis text-lg mt-2'>Яндекс, Google, Topvisor, Keys.so, Семантика, аудит, аналитика, Core Web Vitals</li>
                </ul>

            </div>
        </section>
    )
}