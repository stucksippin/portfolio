import React from 'react'

const cases = [
    {
        name: 'Прицепер',
        desc: 'Продажа прицепов · Уфа',
        url: 'https://priceper.ru/',
        traffic: '×4',
        top: '76',
        months: '2 мес',
    },
    {
        name: 'Глобал Спец Транс',
        desc: 'Аренда спецтехники · Ростов-на-Дону',
        url: 'https://globalspeciatrans.ru/',
        traffic: '×3',
        top: '62',
        months: '4 мес',
    },
    {
        name: 'Атриум',
        desc: 'Товары для дома и офиса · Ростов-на-Дону',
        url: 'https://atrium61.ru/',
        traffic: '×3.8',
        top: '322',
        months: '7 мес',
    }
]

const services = [
    'Технический аудит',
    'Семантическое ядро',
    'Оптимизация страниц',
    'Контентная стратегия',
    'Перелинковка',
    'Коммерческие факторы',
    'Разработка сайта под SEO',
    'Аналитика и отчётность',
]

export default function SeoWork() {
    return (
        <section className='mb-10'>
            <div className='text-3xl mb-2'>
                ПРОДВИЖЕНИЕ<span className='text-selfpurple text-4xl'>.</span>
            </div>
            <p className='text-sm text-gray-400 mb-8'>
                Параллельно с разработкой занимаюсь продвижением сайтов — понимаю техническую часть изнутри
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-3 mb-6 sm:grid-cols-4'>
                {[
                    { label: 'Проектов', val: '20+' },
                    { label: 'Средний рост трафика', val: '×3.5' },
                    { label: 'Запросов в топ-10', val: '500+' },
                    { label: 'Опыт', val: '3 года' },
                ].map((s) => (
                    <div key={s.label} className='bg-selfgray border border-selfborder rounded-lg p-4'>
                        <div className='text-2xl font-bold text-selfpurple'>{s.val}</div>
                        <div className='text-xs text-gray-400 mt-1'>{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Services */}
            <div className='bg-selfgray border border-selfborder rounded-lg p-5 mb-6'>
                <div className='text-xs text-gray-400 uppercase tracking-widest mb-3'>Что делаю</div>
                <div className='flex flex-wrap gap-2'>
                    {services.map((s) => (
                        <span key={s} className='text-xs border border-selfborder rounded px-3 py-1 text-gray-300'>
                            {s}
                        </span>
                    ))}
                </div>
            </div>

            {/* Cases */}
            <div className='text-xs text-gray-400 uppercase tracking-widest mb-3'>Кейсы</div>
            <div className='flex flex-col gap-3'>
                {cases.map((c) => (
                    <div
                        key={c.name}
                        className='bg-selfgray border border-selfborder rounded-lg p-5 flex items-center justify-between gap-4 flex-wrap'
                    >
                        <div>
                            <div className='font-semibold text-white mb-0.5'>{c.name}</div>
                            <div className='text-xs text-gray-400'>{c.desc}</div>
                        </div>

                        <div className='flex items-center gap-6 flex-wrap'>
                            <div className='flex gap-6'>
                                <div className='text-center'>
                                    <div className='text-selfpurple font-bold text-lg'>{c.traffic}</div>
                                    <div className='text-xs text-gray-400'>трафик</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-selfpurple font-bold text-lg'>{c.top}</div>
                                    <div className='text-xs text-gray-400'>топ-10</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-white font-bold text-lg'>{c.months}</div>
                                    <div className='text-xs text-gray-400'>срок</div>
                                </div>
                            </div>

                            <a
                                href={c.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='project_button border py-1 px-10 text-[10px] rounded-md border-selfpurple hover:text-selfpurple transition-colors whitespace-nowrap'
                            >
                                Перейти к сайту
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}