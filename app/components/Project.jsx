import React from 'react'
import haste from '../assets/img/haste.png'
import ithub from '../assets/img/ithub.png'
import Image from 'next/image';

export default function Project() {

    const projects = [
        {
            title: 'IThub | Справки и Админ',
            description: 'Коммерческий проект, разработанный для колледжа IThub в Ростове-на-Дону',
            role: 'Разработчик ',
            details: 'IThub | Справки – сервис для онлайн-заказа и отслеживания справок студентами, что избавляет от необходимости посещать администрацию лично. \n IThub | Admin – централизованная база данных для администраторов, упрощающая управление студентами и поддерживающая актуальность информации.',
            image: ithub
        },

        {
            title: 'Exclusive Store',
            description: 'Это некоммерческий проект, но сделан качественно',
            role: 'Разработчик',
            details: 'Централизованная управляемая база данных, разработанная для администраторов колледжа. Целью этого проекта является упрощение управления информацией о студентах и обеспечения актуальности данных в рамках всей экосистемы Ithub.',
            image: haste
        },
        {
            title: 'Сайт для фермерского хозяйства',
            description: 'Лендинг',
            role: 'Разработчик',
            details: 'Визитная карта фермерского хозяйства с характеристиками урожая и административной панелью для обновления данных параметров урожая ежегодно',
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
                                <h1 className='mb-2'>{el.title}</h1>
                                <span className='mb-2'>{el.description}</span>
                                <span className='mb-2'>{el.role}</span>
                                <span>{el.details}</span>
                            </div>
                        </div>
                    ))
                }

            </section>

        </div>
    )
}
