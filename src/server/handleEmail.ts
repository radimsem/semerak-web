"use server";

import { redirect } from 'next/navigation';

// models
import Offer from '@/models/Offer';

// helpers
import { sendEmail } from './sendEmail';
import { prepareEmail } from '../helpers/prepareEmail';

export async function handleEmail(formData: FormData) {
  const RECIPIENT = process.env.RECIPIENT ?? '';

  const offer = Object.fromEntries(formData.entries()) as Offer;
  const { email, subject, text } = prepareEmail(offer);

  const success = await sendEmail(email, RECIPIENT, subject, text);

  function handleSuccess(value: boolean) { redirect(`/success?value=${value}`) };

  handleSuccess(success);
}