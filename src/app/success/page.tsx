"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function Success() {
  const [title, setTitle] = useState('Formulář úspěšně odeslán');
  const params = useSearchParams();
  
  useEffect(() => {
    const value = params.get('value');
    if (value === 'false') setTitle('Formulář se nepodařilo odeslat');
  }, [params])

  return (
    <header className="flex flex-col justify-center items-center text-center gap-5 px-5 h-screen">
      <h1 className="font-heading text-3xl font-semibold xl:text-4xl xl:leading-tight">
        {title}
      </h1>
      <Link 
        href='/'
        className='inline-flex items-center justify-center text-sm text-primary-foreground h-10 px-4 py-2 bg-gray-700 rounded-md transition-short hover:bg-gray-800'
      >
        Zpět na web
      </Link>
    </header>  
  )
}

export default Success;