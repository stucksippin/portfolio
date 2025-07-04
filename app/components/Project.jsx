import React from 'react'
import haste from '../assets/img/haste.png'
import ithub from '../assets/img/ithub.png'
import event from '../assets/img/event.png'
import fumake from '../assets/img/fumake.png'
import manchini from '../assets/img/manchini.png'
import farming from '../assets/img/farming.jpg'
import Image from 'next/image';
import Link from 'next/link';


export default function Project() {

    const projects = [

        {
            title: 'FUMAKE',
            link: 'https://github.com/stucksippin/fumake',
            role: 'Разработчик ',
            details: 'Мебельный маркетплейс',
            image: fumake
        },
        {
            title: 'Manchini',
            link: 'https://github.com/stucksippin/manchini',
            role: 'Разработчик',
            details: 'Интернет-каталог для продажи недвижимости',
            image: manchini
        },
        {
            title: 'Event Manager',
            link: 'https://github.com/stucksippin/event-manager',
            role: 'Разработчик ',
            details: 'Сервис для управления личными и командными задачами ',
            image: event
        },
        {
            title: 'IThub | Справки и Admin',
            link: 'https://github.com/stucksippin/ithub-admin',
            role: 'Разработчик ',
            details: 'IThub | Справки – сервис для онлайн-заказа и отслеживания справок студентами. \n IThub | Admin – централизованная система управления экосистемой IThub для администраторов.',
            image: ithub
        },
        {
            title: 'Лендинг для фермерского хозяйства',
            link: 'https://github.com/stucksippin/farming',
            role: 'Разработчик',
            details: 'Визитная карта фермера для продажи своего урожая',
            image: farming
        },

        {
            title: 'Haste',
            link: 'https://www.figma.com/design/jHChCg1lwrvf8OlUDmewXH/HASTE?node-id=214-444&p=f&t=ffZmKYNJYJf2xrRy-0',
            role: 'Дизайнер',
            details: 'Дизайн для мобильного приложения онлайн-коворкинга',
            image: haste
        },

    ];

    return (
        <div>

            <section className='section_project' id="project">

                <div className='text-3xl mb-8'>ПРОЕКТЫ<span className='mr-8 text-4xl text-selfpurple'>.</span></div>

                {
                    projects.map((el, index) => (
                        <div key={index} className='project_item flex mb-8 border rounded-lg bg-selfgray border-selfborder '>
                            {el.image && <Image width={300} loading="lazy" className=' rounded-lg object-cover flex-none h-[260px]' src={el.image} alt='project image' />}
                            <div className='project_info flex flex-col p-5'>
                                <div className='mb-2'><span className='text-selfpurple'>Проект:</span> <Link href={el.link} className='project_title font-bold hover:text-selfpurple'>{el.title}</Link> </div>
                                <span className='project_role mb-2'><span className='text-selfpurple'>Роль:</span> {el.role}</span>
                                <span className='project_dis'>{el.details}</span>
                            </div>
                        </div>

                    ))
                }

            </section>

        </div>
    )
}
