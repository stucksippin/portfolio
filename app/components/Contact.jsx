import React from 'react'
import tg from "../assets/img/tg.png"
import git from "../assets/img/git.png"
import mail from "../assets/img/mail.png"
import phone from "../assets/img/phone.png"
import Image from 'next/image'

export default function Contact() {
  return (
    <div>

      <section className='mb-24'>
        <div className='mt-9 text-3xl'>КОНТАКТЫ<span className='mr-8 text-4xl text-selfpurple'>.</span></div>
        <div className='flex border  rounded-lg p-5 bg-selfgray border-selfborder mt-5'>
          <div className='w-[50%] flex flex-col justify-center items-center'>
            <div>
              <li className='mb-3 flex'>
                <Image
                  src={tg}
                  width={25}
                  height={25}
                  alt='tg image' />
                <a className='ml-2' target="_blank" href="https://t.me/sqspwn">@sqspwn</a>
              </li>

              <li className='flex'>
                <Image
                  src={git}
                  width={25}
                  alt='github image'
                />
                <a className='ml-2' target="_blank" href="https://github.com/stucksippin">stucksippin</a>
              </li>
            </div>
          </div>

          <div className='w-[50%] flex flex-col justify-center items-center'>
            <div>
              <li className='flex mb-3'>
                <Image
                  src={mail}
                  width={25}
                  alt='mail image'
                />
                <a className='ml-2' href="#">regulationqq@mail.ru</a>
              </li>

              <li className='flex'>
                <Image
                  src={phone}
                  width={25}
                  alt='phone number image'
                />
                <a className='ml-2' href="#">+79885698637</a>
              </li>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
