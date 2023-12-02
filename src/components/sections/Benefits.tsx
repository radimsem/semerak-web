"use client";

import Image from 'next/image';

// hooks
import { useBenefits } from '@/hooks/useBenefits';

function Benefits() {
  const benefits = useBenefits();

  return (
    <section className='content-sec mx-5 my-10 bg-indigo-50 bg-opacity-70 rounded-xl xs:mx-8'>
      {benefits.map(benefit => (
        <article key={benefit.id} className={`content-art xl:justify-center xl:gap-8 ${benefit.id === 3 ? 'sm:border-b-0' : ''}`}>
          <Image
            src={`/svg/icons/${benefit.icon}.svg`}
            alt={`Icon ${benefit.icon}`}
            width={55}
            height={55}
          />
          <div className='flex flex-col gap-2 max-w-[175px]'>
            <h3 className='font-semibold'>
              {benefit.title}
            </h3>
            <p className='text-sm'>
              {benefit.content}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Benefits;  