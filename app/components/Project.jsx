import React from 'react'
import haste from '../assets/img/haste.png'
import ithub from '../assets/img/ithub.png'
import event from '../assets/img/event.png'
import fumake from '../assets/img/fumake.png'
import manchini from '../assets/img/manchini.png'
import farming from '../assets/img/farming.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { ConfigProvider, Tooltip } from 'antd'
import { QuestionCircleFilled } from '@ant-design/icons'


export default function Project() {

    const projects = [

        {
            title: 'FUMAKE',
            git: 'https://github.com/stucksippin/fumake',
            link: "https://fumake.vercel.app/",
            role: 'Разработчик ',
            details: 'Онлайн-платформа для подбора и покупки мебели, в которой я реализовала полный цикл пользовательского взаимодействия. Проект включает админ-панель для управления каталогом и данными, интерактивный 3D-конструктор, позволяющий настраивать мебель под индивидуальные предпочтения, а также корзину с интегрированным эквайрингом Stripe для удобных и безопасных оплат. В работе я использовала стек технологий Next.js, Zustand, Prisma с PostgreSQL, а также библиотеку Ant Design для интерфейсов.',
            tooltip: 'Админ-панель по маршруту /admin \n Логин: admin \n Пароль: admin',
            image: fumake
        },
        {
            title: 'Task Hive',
            git: 'https://github.com/stucksippin/event-manager',
            link: 'https://task-hive-manager.vercel.app/',
            role: 'Разработчик ',
            details: 'Веб-приложение для организации личной и командной работы через удобные календари. В нём можно планировать проекты, контролировать прогресс и распределять задачи, сохраняя при этом простоту использования. Для разработки использовал стек Next.js, Zustand, Prisma с PostgreSQL и Ant Design. ',
            tooltip: 'Логин: test@mail.ru \n Пароль: test',
            image: event
        },
        {
            title: 'Manchini',
            git: 'https://github.com/stucksippin/manchini',
            link: 'https://manchini.vercel.app/',
            role: 'Разработчик',
            details: 'Онлайн-каталог квартир с удобной системой фильтрации и наглядными карточками объектов. Для каждого объявления предусмотрена встроенная карта с указанием точного местоположения, что делает процесс выбора максимально наглядным и простым.',
            image: manchini
        },
        {
            title: 'Лендинг для фермерского хозяйства',
            git: 'https://github.com/stucksippin/farming',
            link: 'https://velikanov-farming.vercel.app/',
            role: 'Разработчик',
            details: 'Одностраничный сайт, созданный для представления фермерского хозяйства и его продукции. Дизайн и структура ориентированы на простоту восприятия: акцент сделан на визуальные материалы, удобную навигацию и чёткую подачу информации.',
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
        <ConfigProvider>
            <div>

                <section className='section_project' id="project">

                    <div className='text-3xl mb-8'>ПРОЕКТЫ<span className='mr-8 text-4xl text-selfpurple'>.</span></div>

                    {
                        projects.map((el, index) => (
                            <div key={index} className='project_item flex  mb-8 border rounded-lg bg-selfgray border-selfborder items-center'>
                                {el.image && <Image width={300} loading="lazy" className=' rounded-lg object-cover flex-none h-[260px]' src={el.image} alt='project image' />}
                                <div className='project_info flex flex-col p-5 w-full '>
                                    <div className='mb-2'><span className='text-selfpurple'>ПРОЕКТ:</span> <Link href={el.link} className='project_title font-bold hover:text-selfpurple'>{el.title}</Link> </div>

                                    <span className='project_role mb-2'><span className='text-selfpurple'>РОЛЬ:</span> {el.role}</span>
                                    <span className='project_dis '>{el.details}</span>
                                    <div className='project_buttons flex h-full  items-end justify-end mt-3'>
                                        <div className='flex  gap-x-3'>

                                            {el.git && (
                                                <button className='project_button border py-1 px-10 text-[10px] rounded-md border-selfpurple'><a href={el.git} target="_blank" rel="noopener noreferrer">GitHub</a></button>
                                            )}


                                            <button className='project_button border py-1 px-10 text-[10px] rounded-md border-selfpurple'>
                                                <a href={el.link} target="_blank" rel="noopener noreferrer">Перейти к проекту</a>
                                            </button>
                                            {el.tooltip && (
                                                <Tooltip
                                                    placement='rightBottom'
                                                    title={
                                                        el.tooltip && (
                                                            <>
                                                                {el.tooltip.split(/\n|<br\s*\/?>/).map((line, i) => (
                                                                    <div key={i}>{line.trim()}</div>
                                                                ))}
                                                            </>
                                                        )
                                                    }
                                                >
                                                    <QuestionCircleFilled />
                                                </Tooltip>
                                            )}

                                        </div>



                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </section>

            </div>
        </ConfigProvider>
    )
}
