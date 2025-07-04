import React from 'react'
import tg from "../assets/img/tg.png"
import git from "../assets/img/git.png"
import mail from "../assets/img/mail.png"
import phone from "../assets/img/phone.png"
import Image from 'next/image'

export default function Contact() {
  return (
    <div>

      <section id="contact" className='section_contact mb-24'>
        <div className='mt-9 text-3xl'>КОНТАКТЫ<span className='mr-8 text-4xl text-selfpurple'>.</span></div>
        <div className='contact_container flex border  rounded-lg p-5 bg-selfgray border-selfborder mt-5 justify-around'>

          <div className='contact_column_left flex flex-col justify-center  shrink-0'>
            <div>
              <li className='mb-3 flex'>
                <Image
                  className='contact_image'
                  src={tg}
                  width={25}
                  height={25}
                  alt='tg image' />
                <a className='ml-2 hover:text-selfpurple' target="_blank" href="https://t.me/danivelin">@danivelin</a>
              </li>

              <li className='flex'>
                <Image
                  className='contact_image'
                  src={git}
                  width={25}
                  alt='github image'
                />
                <a className='ml-2 hover:text-selfpurple' target="_blank" href="https://github.com/stucksippin">stucksippin</a>
              </li>
            </div>
          </div>

          <div className='contact_column_right flex flex-col justify-center  shrink-0'>
            <div>
              <li className='flex mb-3'>
                <Image
                  className='contact_image'
                  src={mail}
                  width={25}
                  alt='mail image'
                />
                <a className='ml-2 hover:text-selfpurple' href="mailto:regulationqq@mail.ru">regulationqq@mail.ru</a>
              </li>

              <li className='flex'>
                <Image
                  className='contact_image'
                  src={phone}
                  width={25}
                  alt='phone number image'
                />
                <a className='ml-2 hover:text-selfpurple' href="tel:+7(988)569-86-37">+79885698637</a>
              </li>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
