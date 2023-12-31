"use client";

import { useState, useRef } from "react";

// ui
import { Checkbox } from "../ui/checkbox";

// utils
import { handleEmail } from "@/server/handleEmail";

function Contact() {
  const [formTimer, setFormTimer] = useState(0);
  const [errorMess, setErrorMess] = useState("");
  const SPAM_BORDER = 5000;

  const firstInput = useRef<HTMLInputElement>(null);

  function handleSubmit(data: FormData) {
    if (Date.now() - formTimer < SPAM_BORDER) {
      setErrorMess("Formulář odeslán příliš rychle. Podezření ze spamu!");
      return;
    }

    handleEmail(data);
  }

  return (
    <section id="kontakt" className="contact-sec main-sec gap-10 mt-0 sm:items-center">
      <article className='relative flex flex-col items-center gap-3 mt-8 mb-2'>
        <h1 className='font-heading text-2xl text-center'>
          Pojďme společně zrealizovat Váš projekt
        </h1>
        <p className="text-center sm:w-2/3">
          Napište mi vaše myšlenky a požadavky. 
          A budu moct přeměnit vaši vizi do reality v podobně návrhu zdarma.
        </p>
      </article>
      <article className="flex flex-col px-5 py-8 bg-white rounded-xl shadow sm:px-10 sm:py-10">
        <form 
          action={handleSubmit}
          className="flex flex-col gap-6 sm:min-w-[300px]"
        >
          <p className="text-xs text-center text-red-500">{errorMess}</p>
          <div className="relative">
            <label 
              htmlFor="client"
              className="contact-label"
            >
              Jméno
            </label>
            <input 
              type="text" 
              name="client"
              id="client"
              placeholder="Vaše jméno a příjmení"
              className="contact-input"
              ref={firstInput}
              onFocus={() => setFormTimer(Date.now())}
              required
            />
          </div>
          <div className="relative">
            <label 
              htmlFor="email"
              className="contact-label"
            >
              Email
            </label>
            <input 
              type="text" 
              name="email"
              id="email"
              placeholder="Váš @email"
              className="contact-input"
              required
            />
          </div>
          <div className="relative">
            <label 
              htmlFor="message"
              className="contact-label"
            >
              Vaše představa
            </label>
            <textarea 
              name="message"
              id="message"
              rows={6}
              placeholder="Popište zde váš projekt, vaše potřeby a cíle"
              className="contact-input h-full pt-3"
            ></textarea>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="gdpr"
              aria-label="Contact Form GDPR Checkbox"
              className="border-gray-500 checked:bg-indigo-300" 
            />
            <label 
              htmlFor="gdpr"
              className="text-xs"
            >
              Souhlasím se zpracováním <a href="/docs/Zásady ochrany osobních údajů.docx" download>osobních údajů</a>
            </label>
          </div>
          <button 
            type="submit"
            className="contact-input text-white bg-indigo-400 border-none transition-colors hover:bg-indigo-500"
          >
            Odeslat
          </button>
        </form>
      </article>
    </section>
  )
}

export default Contact;