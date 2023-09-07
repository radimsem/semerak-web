import Image from 'next/image';

// public
import favicon from 'public/favicon.ico';

function Footer() {
  return (
    <footer className='mt-16 py-5 bg-indigo-50 bg-opacity-70'>
      <article className='flex flex-col items-center text-center gap-3'>
        <figure>
          <Image 
            src={favicon} 
            alt="Logo Favicon Semerak"
            width={60} 
          />
        </figure>
        <div className='flex flex-col gap-1'>
          <p>Copyright © {new Date().getFullYear()} Radim Semerák. All rights reserved.</p>
          <a 
            href="/docs/Zásady ochrany osobních údajů.docx"
            className='transition-short hover:text-gray-600'
          >
            Ochrana osobních údajů GDPR
          </a>
        </div>
      </article>
    </footer>  
  )
}

export default Footer;