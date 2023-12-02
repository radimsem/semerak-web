"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(from: string, to: string, subject: string, text: string) {
  try {
    const { id } = await resend.emails.send({
      from,
      to,
      subject,
      text
    })
    return !!id;
    
  } catch (e) {
    const err = e as Error;
    console.error(err.message);
    return false;
  }
}