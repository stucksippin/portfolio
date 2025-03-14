import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>

      <header className='header flex justify-between p-5 bg-selfgray  border border-selfborder rounded-lg mt-10 mb-10'>
        <span className='text-selfpurple'>VELIKANOVA DASHA</span>
        <nav className='header_items flex'>
          <li className='header_item mr-10 cursor-pointer hover:text-selfpurple'>
            <Link href="#skills">НАВЫКИ</Link>
          </li>
          <li className='header_item mr-10 cursor-pointer hover:text-selfpurple'>
            <Link href="#project">ПРОЕКТЫ</Link>
          </li>
          <li className='header_item mr-10 cursor-pointer hover:text-selfpurple'>
            <Link href="#contact">КОНТАКТЫ</Link>
          </li>
        </nav>
      </header>

    </div>
  )
}
