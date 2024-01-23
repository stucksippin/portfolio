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
          <p className='mt-9'>CONTACT</p>
          <div className='flex border  rounded-lg p-5 bg-selfgray border-selfborder mt-5'>
            <div className='w-[50%] flex flex-col justify-center items-center'>
              <div>
                <li className='mb-3 flex'>
                <Image
                src={tg}
                width={25}/>
                  <a className='ml-2' href="">@sqspwn</a>
                  </li>

                <li className='flex'>
                  <Image
                  src={git}
                  width={25}
                  />
                  <a className='ml-2' href="">stucksippin</a>
                  </li>
            </div>
            </div>

            <div className='w-[50%] flex flex-col justify-center items-center'>
              <div>
                <li className='flex mb-3'>
                  <Image
                  src={mail}
                  width={25}
                  />
                  <a className='ml-2' href="">regulationqq@mail.ru</a>
                  </li>

                <li className='flex'>
                  <Image
                  src={phone}
                  width={25}
                  />
                  <a className='ml-2' href="">+9885698637</a>
                  </li>
            </div>
            </div>
          </div>
        </section>
        
    </div>
  )
}
