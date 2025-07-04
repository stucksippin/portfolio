import React from 'react'
import lines from '../assets/img/lines.png'
import Image from 'next/image'

export default function Skills() {
    return (
        <section id="skills" className='section_skills  mb-10'>
            <div className='text-white text-3xl mb-10'>
                НАВЫКИ<span className='text-selfpurple text-4xl mr-8'>.</span>
            </div>


            <div className='skills_containers flex justify-between p-10 bg-selfgray border border-selfborder rounded-lg'>

                <ul className='skills_container'>
                    <li className='skills_title text-2xl bold text-selfpurple'>Веб-разработка</li>
                    <li className='skills_dis text-lg'>Javascript, Python, Node.js, Prisma <br /> Pania, PostgreSQL, RenJS</li>
                </ul>

                <ul className='skills_container'>
                    <li className='skills_title text-2xl bold text-selfpurple'>UX/UI</li>
                    <li className='skills_dis text-lg'>Photoshop, Figma, Sketch, XMind <br /> User Research, Usability Testing.</li>
                </ul>

                <u1 className='skills_container frontend_box'>
                    <li className='skills_title text-2xl bold text-selfpurple'>Frontend разработка</li>
                    <li className='skills_dis text-lg'>HTML, CSS, SASS, Bootstrap, Wordpress <br /> Next.js, Vue.js, Tailwind CSS</li>
                </u1>

            </div>
        </section>
    )
}
