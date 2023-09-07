import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function sendEmail(transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>, from: string, to: string, subject: string, text: string) {
  try {
    const { accepted } = await transporter.sendMail({
      from,
      to,
      subject,
      text
    })
    return accepted.includes(to);
    
  } catch (e) {
    const err = e as Error;
    console.error(err.message);
    return false;
  }
}