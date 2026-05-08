'use client'
import React, { useState, useEffect, useCallback } from 'react'
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
} from './Covers'

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
    const [current, setCurrent] = useState(startIndex)

    const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])
    const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])

    useEffect(() => {
        const onKey = e => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [prev, next, onClose])

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed', inset: 0, zIndex: 1000,
                background: 'rgba(0,0,0,0.92)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
                animation: 'fadeIn 0.2s ease',
            }}
        >
            <style>{`
                @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
                @keyframes slideUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
            `}</style>

            {/* Close */}
            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: 24, right: 28,
                    background: 'none', border: 'none', color: '#fff',
                    fontSize: 28, cursor: 'pointer', opacity: 0.6,
                    lineHeight: 1, padding: 4,
                }}
            >×</button>

            {/* Counter */}
            <div style={{
                position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: '0.15em',
                fontFamily: 'monospace',
            }}>
                {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>

            {/* Image */}
            <div
                onClick={e => e.stopPropagation()}
                style={{ animation: 'slideUp 0.25s ease', maxWidth: '85vw', maxHeight: '85vh' }}
            >
                <img
                    key={current}
                    src={images[current]}
                    alt=""
                    style={{
                        maxWidth: '85vw', maxHeight: '82vh',
                        objectFit: 'contain',
                        borderRadius: 6,
                        boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                        display: 'block',
                    }}
                />
            </div>

            {/* Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={e => { e.stopPropagation(); prev() }}
                        style={arrowStyle('left')}
                    >‹</button>
                    <button
                        onClick={e => { e.stopPropagation(); next() }}
                        style={arrowStyle('right')}
                    >›</button>
                </>
            )}

            {/* Dots */}
            {images.length > 1 && (
                <div style={{
                    position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', gap: 6,
                }}>
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={e => { e.stopPropagation(); setCurrent(i) }}
                            style={{
                                width: i === current ? 20 : 6,
                                height: 6, borderRadius: 3,
                                background: i === current ? '#a78bfa' : 'rgba(255,255,255,0.25)',
                                border: 'none', cursor: 'pointer', padding: 0,
                                transition: 'all 0.25s ease',
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

const arrowStyle = side => ({
    position: 'absolute',
    [side]: 20,
    top: '50%', transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff', fontSize: 28, cursor: 'pointer',
    width: 44, height: 44, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 0.2s',
    lineHeight: 1,
    padding: 0,
})

// ─── Screenshot Stack ─────────────────────────────────────────────────────────
function ScreenshotStack({ images, onOpen }) {
    const [hovered, setHovered] = useState(false)

    if (!images || images.length === 0) return null

    const visible = images.slice(0, 3)

    const stackTransforms = [
        { rotate: '0deg', translateX: '0px', translateY: '0px', z: 3 },
        { rotate: '-4deg', translateX: '-10px', translateY: '4px', z: 2 },
        { rotate: '5deg', translateX: '10px', translateY: '6px', z: 1 },
    ]

    const hoverTransforms = [
        { rotate: '0deg', translateX: '0px', translateY: '0px', z: 3 },
        { rotate: '-12deg', translateX: '-50px', translateY: '8px', z: 2 },
        { rotate: '12deg', translateX: '50px', translateY: '8px', z: 1 },
    ]

    return (
        <div
            className="screenshot-stack-wrapper"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ position: 'relative', width: 160, height: 110 }}
        >
            <style>{`
                .screenshot-card {
                    position: absolute;
                    top: 0; left: 0;
                    width: 150px; height: 100px;
                    border-radius: 6px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
                    border: 1px solid rgba(167,139,250,0.15);
                }
                .screenshot-card img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    display: block;
                    filter: grayscale(20%);
                    transition: filter 0.3s;
                }
                .screenshot-card:hover img { filter: grayscale(0%); }
                .screenshot-count {
                    position: absolute;
                    bottom: -20px; right: 0;
                    font-size: 10px;
                    letter-spacing: 0.12em;
                    color: rgba(167,139,250,0.5);
                    font-family: monospace;
                    white-space: nowrap;
                }
            `}</style>

            {[...visible].reverse().map((src, revIdx) => {
                const idx = visible.length - 1 - revIdx
                const t = hovered ? hoverTransforms[idx] : stackTransforms[idx]
                return (
                    <div
                        key={idx}
                        className="screenshot-card"
                        style={{
                            zIndex: t.z,
                            transform: `rotate(${t.rotate}) translateX(${t.translateX}) translateY(${t.translateY})`,
                            boxShadow: hovered
                                ? '0 12px 32px rgba(0,0,0,0.4)'
                                : '0 4px 16px rgba(0,0,0,0.3)',
                        }}
                        onClick={() => onOpen(idx)}
                    >
                        <img src={src} alt="" />
                    </div>
                )
            })}

            {images.length > 1 && (
                <span className="screenshot-count">+{images.length} фото</span>
            )}
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Project() {
    const [lightbox, setLightbox] = useState(null) // { images, index }

    const base = '/image/cases'

    const projects = [
        {
            title: 'FUMAKE',
            git: 'https://github.com/stucksippin/fumake',
            role: 'Разработчик',
            details: 'Платформа для подбора и покупки мебели. Сделала полный цикл: каталог с фильтрами, интерактивный 3D-конструктор для кастомизации, корзину с оплатой через Stripe и админ-панель для управления товарами. Стек: Next.js, Zustand, Prisma, PostgreSQL, Ant Design.',
            tooltip: 'Админ-панель по маршруту /admin \n Логин: admin \n Пароль: admin',
            cover: <FumakeCover />,
            images: [`${base}/fumake/f1.png`, `${base}/fumake/f2.png`, `${base}/fumake/f3.png`],
        },
        {
            title: 'СУП',
            git: 'https://github.com/stucksippin/sup',
            gitOnly: true,
            role: 'Разработчик',
            details: 'Система управления проектами для автоматизации процессов внутри организации. Заменяет таблицы, переписку и бумажные отчёты единым цифровым пространством.',
            cover: <SupCover />,
            images: [
                `${base}/syp/syp1.webp`, `${base}/syp/syp2.webp`, `${base}/syp/syp3.webp`,
                `${base}/syp/syp4.webp`, `${base}/syp/syp5.webp`, `${base}/syp/syp6.webp`,
            ],
        },
        {
            title: 'ДипломПортал',
            git: 'https://github.com/stucksippin/diploma-manager',
            gitOnly: true,
            role: 'Разработчик',
            details: 'Система согласования тем дипломных работ для университета. Студент подаёт тему и проверяет её уникальность, преподаватель согласует или отклоняет с комментарием, администратор управляет пользователями и формирует отчёты.',
            cover: <DiplomCover />,
            images: [`${base}/diploma/d1.webp`, `${base}/diploma/d2.webp`],
        },

        {
            title: 'Manchini',
            git: 'https://github.com/stucksippin/manchini',
            role: 'Разработчик',
            details: 'Каталог квартир с фильтрацией и карточками объектов. Для каждого объявления встроила карту с геолокацией — можно сразу оценить расположение.',
            cover: <ManchiniCover />,
            images: [
                `${base}/manchini/m1.webp`, `${base}/manchini/m2.webp`,
                `${base}/manchini/m3.webp`, `${base}/manchini/m4.webp`,
            ],
        },
        {
            title: 'Лендинг для фермерского хозяйства',
            git: 'https://github.com/stucksippin/farming',
            role: 'Разработчик',
            details: 'Одностраничный сайт для фермерского хозяйства. Делала упор на визуал и простую структуру — чтобы посетитель сразу понял что продаётся и как заказать.',
            cover: <FarmingCover />,
            images: [
                `${base}/farm/f1.webp`, `${base}/farm/f2.webp`,
                `${base}/farm/f3.webp`, `${base}/farm/f4.webp`,
            ],
        },
        {
            title: 'Task Hive',
            git: 'https://github.com/stucksippin/event-manager',
            role: 'Разработчик',
            details: 'Таск-менеджер для личной и командной работы. Реализовала планирование через календари, управление проектами и распределение задач между участниками. Стек: Next.js, Zustand, Prisma, PostgreSQL, Ant Design.',
            tooltip: 'Логин: test@mail.ru \n Пароль: test',
            cover: <TaskHiveCover />,
            images: [], // добавь пути если есть
        },
        {
            title: 'Складской учёт',
            git: 'https://github.com/stucksippin/warehouse-report',
            gitOnly: true,
            role: 'Разработчик',
            details: 'Веб-приложение для розничного магазина компьютерного оборудования. Автоматизирует ежедневный учёт складских остатков и формирование отчётов для сотрудников.',
            cover: <WarehouseCover />,
            images: [], // добавь пути если есть
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
                        <div
                            key={index}
                            className='project_item flex mb-8 border rounded-lg bg-selfgray border-selfborder items-center'
                        >
                            {/* Cover */}
                            <div className='rounded-lg flex-none h-[260px] w-[300px] overflow-hidden'>
                                {el.cover}
                            </div>

                            {/* Info */}
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

                                {/* Bottom row: screenshots + buttons */}
                                <div className='flex items-end justify-between mt-5'>

                                    {/* Screenshot stack */}
                                    {el.images && el.images.length > 0 ? (
                                        <ScreenshotStack
                                            images={el.images}
                                            onOpen={(idx) => setLightbox({ images: el.images, index: idx })}
                                        />
                                    ) : <div />}

                                    {/* Buttons */}
                                    <div className='flex gap-x-3 items-center'>
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

                {/* Lightbox */}
                {lightbox && (
                    <Lightbox
                        images={lightbox.images}
                        startIndex={lightbox.index}
                        onClose={() => setLightbox(null)}
                    />
                )}
            </div>
        </ConfigProvider>
    )
}