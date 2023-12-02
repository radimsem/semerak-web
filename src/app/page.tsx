import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// public
import logo from 'public/svg/logo-semerak.svg';

// components
const Navigation = dynamic(() => import('@/components/layouts/Navigation'));
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/sections/Hero";
const Benefits = dynamic(() => import('@/components/sections/Benefits'));
const Process = dynamic(() => import('@/components/sections/Process'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

function Home() {
  return (
    <>
      <header className='flex justify-between items-center px-5 py-2 xs:px-8 md:px-16 xl:px-32'>
        <div className="logo">
          <Link href="/">
            <figure>
              <Image 
                src={logo} 
                alt="Logo Semerak" 
                width={175}
                height={47.5}
              />
            </figure>
          </Link>
        </div>
        <Navigation />
      </header>

      <main className='flex flex-col'>
        <Hero />
        <Benefits />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home;
