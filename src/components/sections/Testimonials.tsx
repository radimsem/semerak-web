"use client";

import Image from 'next/image';

// icons
import { BsStarFill, BsStar } from 'react-icons/bs';

// hooks
import { useTestimonials } from '@/hooks/useTestimonials';

function Testimonials() {
  const testimonials = useTestimonials();

  return (
    <section id='reference' className="main-sec gap-2 md:px-24">
      <article className='relative my-5'>
        <h1 className='font-heading text-2xl text-center mb-3'>
          Úspěšné projekty
        </h1>
      </article>
      <section className="content-sec flex flex-col p-0 gap-5">
        {testimonials.map(testimonial => (
          <article key={testimonial.id} className='flex flex-col gap-5 sm:flex-row sm:items-center xl:justify-center xl:gap-10'>
            <article className={`flex flex-1 xl:flex-none ${testimonial.id % 2 === 0 ? `sm:order-last` : ''}`}>
              <figure>
                <Image 
                  src={testimonial.projectSrc} 
                  alt={`Přistávací stránka na počítači i mobilu projektu ${testimonial.project}`}
                  width={500}
                  height={350}
                />
              </figure>
            </article>
            <article className="relative flex flex-col flex-1 gap-6 mb-5 p-8 pt-12 bg-indigo-50 bg-opacity-70 rounded-lg xl:flex-none xl:max-w-sm">
              <i>
                {testimonial.content}
              </i>
              <div className='flex items-center gap-4'>
                <Image 
                  src={testimonial.clientSrc}
                  alt={`Linkedin profil klienta ${testimonial.client}`}
                  width={70}
                  height={70}
                  className='rounded-full'
                />
                <div className='flex flex-col gap-1'>
                  <h3>{testimonial.client}</h3>
                  <p className='text-sm'>
                    {testimonial.profession}
                  </p>
                </div>
              </div>

              <ul className='absolute flex items-center gap-1 top-4 right-4'>
                {testimonial.stars.map(star => (
                  <li key={star.id}>
                    {star.fill ? (
                      <BsStarFill className='fill-indigo-400' />
                    ) : (
                      <BsStar className='fill-indigo-400' />
                    )}
                  </li>
                ))}
              </ul>
            </article>
          </article>  
        ))}
      </section>
    </section>  
  )
}

export default Testimonials;