import React from 'react'
import Image from 'next/image'
import haste from '../assets/img/haste.png'
import movie from '../assets/img/movie.png'

export default function Project() {
  return (
    <div>
        
        <section>
            <div className='mb-8'>
            <span>MY PROJECTS</span>
            </div>

            <div className='flex mb-8 border rounded-lg size-8/14 bg-selfgray border-selfborder'>
                <Image
                src={movie}
                width={340}
                />
                <div className='flex flex-col p-5'>
                    <h1 className='mb-2'>Movie App</h1>
                    <span className='mb-2'>Movie catalog with main information about films, site</span>
                    <span className='mb-2'>Role: Developer</span>
                    <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</span>
                </div>
            </div>

            <div className='flex border rounded-lg size-8/14 bg-selfgray border-selfborder mb-8'>
            <Image
                src={haste}
                />
                <div className='flex flex-col p-5'>
                    <h1 className='mb-2'>Haste</h1>
                    <span className='mb-2'>Online coworking app</span>
                    <span className='mb-2'>Role: Developer</span>
                    <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</span>
                </div>
            </div>
        </section>

    </div>
  )
}
