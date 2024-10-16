import React from 'react'

export default function Header() {
  return (
    <div>

      <header className='flex justify-between p-5 bg-selfgray mt-10 mb-10'>
        <span className='text-selfpurple'>VELIKANOVA DASHA</span>
        <nav className='flex '>
          <li className='mr-10 cursor-pointer'><a href=""></a>НАВЫКИ</li>
          <li className='mr-10 cursor-pointer'><a href=""></a>ПРОЕКТЫ</li>
          <li className='mr-10 cursor-pointer'><a href=""></a>ОБО МНЕ</li>
          <li className='mr-10 cursor-pointer'><a href=""></a>КОНТАКТЫ</li>
        </nav>
      </header>

    </div>
  )
}
