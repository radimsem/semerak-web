import Link from "next/link";
import Image from "next/image";

// public
import logo from 'public/svg/logo-semerak.svg';

// components
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

function Home() {
  return (
    <>
      <header className='flex justify-between items-center px-5 xs:px-8 sm:py-2 md:px-16 xl:px-32'>
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
