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

            <section>

                <div className='text-3xl mb-8'>ПРОЕКТЫ<span className='mr-8 text-4xl text-selfpurple'>.</span></div>

                {
                    projects.map((el, index) => (
                        <div key={index} className='flex mb-8 border rounded-lg size-8/14 bg-selfgray border-selfborder'>
                            {el.image && <Image className='shrink-0' src={el.image} width={350} alt='project image' />}
                            <div className='flex flex-col p-5'>
                                <h1 className='mb-2'><span className='text-selfpurple'>Проект:</span> <span className='font-bold'>{el.title}</span> </h1>
                                <span className='mb-2'><span className='text-selfpurple'>Роль:</span> {el.role}</span>
                                <span>{el.details}</span>
                            </div>
                        </div>
                    ))
                }

            </section>

        </div>
    )
}
