"use client";

import Image from 'next/image';

// public
import heroImg from 'public/img/client-design-example.webp';

// ui
import { buttonVariants } from "../ui/button";

// hooks
import { useClients } from "@/hooks/useClients";

function Hero() {
  const clients = useClients();

  return (
    <>
      <section className="flex flex-col gap-5 my-8 px-5 xs:px-8 sm:flex-row sm:items-center sm:justify-between sm:my-16 lg:px-16 xl:px-32 xl:my-24">
        <article className="flex flex-col gap-2 lg:max-w-lg xl:gap-3">
          <h1 className="font-heading text-3xl font-semibold xl:text-4xl xl:leading-tight">
            Udělejme váš web tak,
            aby <span className="heading-underline">fungoval</span> pro vaši firmu
          </h1>
          <p>
            Pomáhám majitelům firem a podnikatelům na volné noze, 
            vytvořit web, který objasní vaše sdělení, vygeneruje více klientů a zvýší vaše zisky.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a 
              href='/#kontakt' 
              className={`${buttonVariants({ variant: "default" })} bg-indigo-500 transition-short hover:bg-indigo-600`}
            >
              Návrh zdarma
            </a>
            <a 
              href='/#reference'
              className={`${buttonVariants({ variant: "default" })} bg-gray-700 transition-short hover:bg-gray-800`}
            >
              Moje práce
            </a>
          </div>
        </article>
        <article>
          <figure>
            <Image 
              src={heroImg} 
              alt="Příklad webového projektu pro klienta na počítači a mobilu"
              width={500}
            />
          </figure>
        </article>
      </section>
      <section className="flex flex-col gap-5 items-center mb-10 p-5 bg-gray-100 xl:py-8">
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {clients.map(client => (
            <article key={client.id} className='relative grid max-w-fit justify-self-center'>
              <figure className='relative justify-self-center'>
                <img 
                  src={client.src}
                  alt={`Logo klienta ${client.name}`}
                  className="grayscale opacity-80 h-[50px]"
                  height={50}
                />
              </figure>
            </article>
          ))}
        </section>
      </section>
    </>
  )
}

export default Hero;