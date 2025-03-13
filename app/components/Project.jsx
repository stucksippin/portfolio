import React from 'react'
import haste from '../assets/img/haste.png'
import ithub from '../assets/img/ithub.png'
import farming from '../assets/img/farming.png'
import Image from 'next/image';


export default function Project() {

    const projects = [
        {
            title: 'IThub | Справки и Admin',

            role: 'Разработчик ',
            details: 'IThub | Справки – сервис для онлайн-заказа и отслеживания справок студентами. \n IThub | Admin – централизованная система управления студентами для администраторов.',
            image: ithub
        },
        {
            title: 'Лендинг для фермерского хозяйства',
            role: 'Разработчик',
            details: 'Визитная карта фермера для продажи своего урожая',
            image: farming
        },

        {
            title: 'Haste',
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
                            {el.image && <Image className='project_image rounded-lg shrink-0' src={el.image} alt='project image' />}
                            <div className='project_info flex flex-col p-5'>
                                <div className='mb-2'><span className='text-selfpurple'>Проект:</span> <span className='project_title font-bold'>{el.title}</span> </div>
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
