import Image from 'next/image';

// public
import favicon from 'public/favicon.ico';

function Footer() {
  return (
    <footer className='mt-16 py-5 bg-gradient-to-br from-white to-indigo-50'>
      <article className='flex flex-col items-center text-sm text-center gap-3 sm:text-base'>
        <figure>
          <Image 
            src={favicon} 
            alt="Logo Favicon Semerak"
            width={60} 
          />
        </figure>
        <div className='flex flex-col gap-1'>
          <p>Copyright © {new Date().getFullYear()} Radim Semerák. All rights reserved.</p>
          <p>
            This website is open-source on 
            <a 
              href="https://github.com/radimsem/semerak-web"
              className='transition-colors hover:text-gray-600'
            > GitHub</a>
          </p>
          <a 
            href="/docs/Zásady ochrany osobních údajů.docx"
            className='transition-colors hover:text-gray-600'
          >
            Ochrana osobních údajů GDPR
          </a>
        </div>
      </article>
    </footer>  
  )
}

export default Footer;