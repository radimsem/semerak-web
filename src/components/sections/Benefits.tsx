"use client";

// icons
import { IconType } from 'react-icons';
import { BsGraphUpArrow, BsWindowSidebar, BsSpeedometer, BsAlarm } from 'react-icons/bs';

// hooks
import { useBenefits } from '@/hooks/useBenefits';

function Benefits() {
  const benefits = useBenefits();
  const icons: IconType[] = [
    BsGraphUpArrow,
    BsWindowSidebar,
    BsSpeedometer,
    BsAlarm
  ]

  return (
    <section className='content-sec mx-5 my-10 bg-indigo-50 bg-opacity-70 rounded-xl xs:mx-8'>
      {benefits.map(benefit => {
        const Icon = icons.filter(icon => icon.name === benefit.icon).at(0);
        
        return (
          <article key={benefit.id} className={`content-art xl:justify-center xl:gap-8 ${benefit.id === 3 ? 'sm:border-b-0' : ''}`}>
            {Icon && <Icon className='text-5xl w-full xl:w-auto' />}
            <div className='flex flex-col gap-2 max-w-[175px]'>
              <h3 className='font-semibold'>
                {benefit.title}
              </h3>
              <p className='text-sm'>
                {benefit.content}
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Benefits;