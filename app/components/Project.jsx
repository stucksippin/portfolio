import React from 'react'
import haste from '../assets/img/haste.png'
import ithub from '../assets/img/ithub.png'
import farming from '../assets/img/farming.png'
import Image from 'next/image';


export default function Project() {

    const projects = [
        {
            title: 'IThub | Справки и Админ',

            role: 'Разработчик ',
            details: 'IThub | Справки – сервис для онлайн-заказа и отслеживания справок студентами, что избавляет от необходимости посещать администрацию лично. \n IThub | Admin – централизованная база данных для администраторов, упрощающая управление студентами и поддерживающая актуальность информации.',
            image: ithub
        },

        {
            title: 'Сайт для фермерского хозяйства',
            role: 'Разработчик',
            details: 'Визитная карта фермерского хозяйства с характеристиками урожая и административной панелью для обновления данных параметров урожая ежегодно',
            image: farming
        },
        {
            title: 'Haste',
            role: 'Дизайнер',
            details: 'Дизайн для мобильного приложения онлайн-коворкинга',
            image: haste
        }
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
                                <h1 className='mb-2'><span className='text-selfpurple'>Проект:</span> <span className='project_title font-bold'>{el.title}</span> </h1>
                                <span className='mb-2'><span className='text-selfpurple'>Роль:</span> {el.role}</span>
                                <span className='project_dis'>{el.details}</span>
                            </div>
                        </div>
                    ))
                }

            </section>

        </div>
    )
}
