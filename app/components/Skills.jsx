import React from 'react'
import lines from '../assets/img/lines.png'
import Image from 'next/image'

export default function Skills() {
    return (
        <section className='skills mb-10'>
            <div className='text-white text-3xl mb-10'>
                НАВЫКИ<span className='text-selfpurple text-4xl mr-8'>.</span>
            </div>
            <div className='flex flex-wrap justify-between gap-x-10 p-10 bg-selfgray border border-selfborder rounded-lg'>
                <ul>
                    <li className=' text-2xl bold text-selfpurple'>Веб-разработка</li>
                    <li className='text-lg'>Javascript, Python, Node.js, Prisma <br /> Pania, PostgreSQL</li>
                </ul>
                <ul >
                    <li className=' text-2xl bold text-selfpurple'>UX/UI</li>
                    <li className='text-lg'>Photoshop, Figma, Sketch, XMind <br /> User Research, Usability Testing.</li>
                </ul>
                <u1>
                    <li className=' text-2xl bold text-selfpurple'>Frontend разработка</li>
                    <li className='text-lg'>HTML, CSS, SASS, Bootstrap, Wordpress <br /> Next.js, Vue,js</li>
                </u1>

            </div>
        </section>
    )
}
