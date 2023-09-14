"use client";

import Image from 'next/image';
import Link from 'next/link';

// icons
import { IconType } from 'react-icons';
import { BsChatText, BsBrush, BsPuzzle, BsBarChartLine } from 'react-icons/bs';

// hooks
import { useProcess } from '@/hooks/useProcess';
import { useTechnologies } from '@/hooks/useTechnologies';

// ui
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


function Process() {
  const processData = useProcess();
  const technologies = useTechnologies();
  const ICONS: IconType[] = [
    BsChatText,
    BsBrush,
    BsPuzzle,
    BsBarChartLine
  ]

  return (
    <section className='main-sec gap-6 process-sec py-10'>
      <div className='absolute w-full h-full inset-0 bg-black bg-opacity-80'></div>
      <article className='relative my-5'>
        <h1 className='font-heading text-2xl text-center text-white'>
          Jak spolupráce fungují?
        </h1>
      </article>
      <section className='content-sec py-0 bg-gray-500 bg-opacity-40 backdrop-blur-[4px] rounded-xl xl:py-5'>
        {processData.map(process => {
          const Icon = ICONS.filter(icon => icon.name === process.icon).at(0);  

          return (
            <article key={process.id} className={`content-art xl:justify-center ${process.id === 3 ? 'sm:border-b-0' : ''}`}>
              {Icon && <Icon className='text-5xl w-full fill-white xl:w-auto' />}
              <div className='flex flex-col gap-2 max-w-[175px]'>
                <h3 className='font-semibold text-white'>
                  {process.title}
                </h3>
                <p className='text-sm text-gray-200'>
                  {process.content}
                </p>
              </div>

              {process.label && (
                <Link 
                  href='/#kontakt'
                  className='absolute top-3 right-0 text-sm px-3 py-1 text-white bg-indigo-600 rounded xl:right-3'
                >
                  {process.label}
                </Link>
              )}
            </article>
          )
        })}
      </section>  
      <article className='flex flex-col sm:items-center gap-10'>
        <article className='relative mt-8'>
          <h1 className='font-heading text-2xl text-center text-white'>
            Technologie
          </h1>
        </article>
        <section className='content-sec grid grid-cols-3 gap-5 pt-0 sm:grid-cols-4 sm:gap-10 xl:gap-12'>
          {technologies.map(tech => (
            <article key={tech.id} className='grid relative'>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='cursor-auto justify-self-center'>
                    <Image
                      src={tech.src} 
                      alt={`Logo ${tech.name}`}
                      width={55}
                      height={55}
                    />
                  </TooltipTrigger>
                  <TooltipContent className='px-3 py-1 text-white bg-indigo-600 border-none transition duration-300'>
                    {tech.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </article>
          ))}
        </section>
      </article>
    </section>  
  )
}

export default Process;