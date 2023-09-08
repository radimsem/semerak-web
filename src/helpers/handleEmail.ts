import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

// models
import Offer from '@/models/Offer';

// helpers
import { sendEmail } from './sendEmail';
import { prepareEmail } from './prepareEmail';

export async function handleEmail(formData: FormData) {
  "use server";

  const SERVER_HOST = process.env.SERVER_HOST ?? '';
  const SENDER = process.env.SENDER ?? '';
  const RECIPIENT = process.env.RECIPIENT ?? '';
  const SERVER_USERNAME = process.env.SERVER_USERNAME ?? '';
  const SERVER_PASSWORD = process.env.SERVER_PASSWORD ?? '';
  const transporter = nodemailer.createTransport({
    host: SERVER_HOST,
    auth: {
      user: SERVER_USERNAME,
      pass: SERVER_PASSWORD
    }
  })

  const offer = Object.fromEntries(formData.entries()) as Offer;
  const { subject, text } = prepareEmail(offer);

  const success = await sendEmail(transporter, SENDER, RECIPIENT, subject, text);

  function handleSuccess(value: boolean) { redirect(`/success?value=${value}`) };

  handleSuccess(success);
}