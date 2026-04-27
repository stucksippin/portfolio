import React from 'react'
import Link from 'next/link'
import { ConfigProvider, Tooltip } from 'antd'
import { QuestionCircleFilled } from '@ant-design/icons'
import {
    FumakeCover,
    TaskHiveCover,
    DiplomCover,
    WarehouseCover,
    SupCover,
    ManchiniCover,
    FarmingCover,
    HasteCover,
} from './covers'

export default function Project() {

    const projects = [
        {
            title: 'FUMAKE',
            git: 'https://github.com/stucksippin/fumake',
            role: 'Разработчик',
            details: 'Платформа для подбора и покупки мебели. Сделала полный цикл: каталог с фильтрами, интерактивный 3D-конструктор для кастомизации, корзину с оплатой через Stripe и админ-панель для управления товарами. Стек: Next.js, Zustand, Prisma, PostgreSQL, Ant Design.',
            tooltip: 'Админ-панель по маршруту /admin \n Логин: admin \n Пароль: admin',
            cover: <FumakeCover />,
        },
        {
            title: 'Task Hive',
            git: 'https://github.com/stucksippin/event-manager',
            role: 'Разработчик',
            details: 'Таск-менеджер для личной и командной работы. Реализовала планирование через календари, управление проектами и распределение задач между участниками. Стек: Next.js, Zustand, Prisma, PostgreSQL, Ant Design.',
            tooltip: 'Логин: test@mail.ru \n Пароль: test',
            cover: <TaskHiveCover />,
        },
        {
            title: 'ДипломПортал',
            git: 'https://github.com/stucksippin/diploma-manager',
            gitOnly: true,
            role: 'Разработчик',
            details: 'Система согласования тем дипломных работ для университета. Студент подаёт тему и проверяет её уникальность, преподаватель согласует или отклоняет с комментарием, администратор управляет пользователями и формирует отчёты. Автоматическая проверка на совпадение с архивными темами.',
            cover: <DiplomCover />,
        },
        {
            title: 'Складской учёт',
            git: 'https://github.com/stucksippin/warehouse-report',
            gitOnly: true,
            role: 'Разработчик',
            details: 'Веб-приложение для розничного магазина компьютерного оборудования. Автоматизирует ежедневный учёт складских остатков и формирование отчётов для сотрудников — избавляет от ручного ведения таблиц.',
            cover: <WarehouseCover />,
        },
        {
            title: 'СУП',
            git: 'https://github.com/stucksippin/sup',
            gitOnly: true,
            role: 'Разработчик',
            details: 'Система управления проектами для автоматизации процессов внутри организации. Заменяет таблицы, переписку и бумажные отчёты единым цифровым пространством — задачи, проекты, участники и статусы в одном месте.',
            cover: <SupCover />,
        },
        {
            title: 'Manchini',
            git: 'https://github.com/stucksippin/manchini',
            role: 'Разработчик',
            details: 'Каталог квартир с фильтрацией и карточками объектов. Для каждого объявления встроила карту с геолокацией — можно сразу оценить расположение.',
            cover: <ManchiniCover />,
        },
        {
            title: 'Лендинг для фермерского хозяйства',
            git: 'https://github.com/stucksippin/farming',
            role: 'Разработчик',
            details: 'Одностраничный сайт для фермерского хозяйства. Делала упор на визуал и простую структуру — чтобы посетитель сразу понял что продаётся и как заказать.',
            cover: <FarmingCover />,
        },

    ]

    return (
        <ConfigProvider>
            <div>
                <section className='section_project' id="project">

                    <div className='text-3xl mb-8'>
                        РАЗРАБОТКА<span className='mr-8 text-4xl text-selfpurple'>.</span>
                    </div>

                    {projects.map((el, index) => (
                        <div key={index} className='project_item flex mb-8 border rounded-lg bg-selfgray border-selfborder items-center'>
                            <div className='rounded-lg flex-none h-[260px] w-[300px] overflow-hidden'>
                                {el.cover}
                            </div>
                            <div className='project_info flex flex-col p-5 w-full'>
                                <div className='mb-2'>
                                    <span className='text-selfpurple'>ПРОЕКТ:</span>{' '}
                                    <a
                                        href={el.gitOnly ? el.git : el.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='project_title font-bold hover:text-selfpurple'
                                    >
                                        {el.title}
                                    </a>
                                </div>
                                <span className='project_role mb-2'>
                                    <span className='text-selfpurple'>РОЛЬ:</span> {el.role}
                                </span>
                                <span className='project_dis'>{el.details}</span>
                                <div className='project_buttons flex h-full items-end justify-end mt-3'>
                                    <div className='flex gap-x-3'>
                                        {el.gitOnly ? (
                                            <button className='project_button border py-1 px-10 text-[10px] rounded-md border-selfpurple'>
                                                <a href={el.git} target="_blank" rel="noopener noreferrer">GitHub</a>
                                            </button>
                                        ) : (
                                            <>
                                                {el.git && (
                                                    <button className='project_button border py-1 px-10 text-[10px] rounded-md border-selfpurple'>
                                                        <a href={el.git} target="_blank" rel="noopener noreferrer">GitHub</a>
                                                    </button>
                                                )}
                                                {el.link && (
                                                    <button className='project_button border py-1 px-10 text-[10px] rounded-md border-selfpurple'>
                                                        <a href={el.link} target="_blank" rel="noopener noreferrer">Перейти к проекту</a>
                                                    </button>
                                                )}
                                            </>
                                        )}
                                        {el.tooltip && (
                                            <Tooltip
                                                placement='rightBottom'
                                                title={
                                                    <>
                                                        {el.tooltip.split(/\n|<br\s*\/?>/).map((line, i) => (
                                                            <div key={i}>{line.trim()}</div>
                                                        ))}
                                                    </>
                                                }
                                            >
                                                <QuestionCircleFilled />
                                            </Tooltip>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </section>
            </div>
        </ConfigProvider>
    )
}