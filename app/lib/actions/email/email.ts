"use server";

import EmailTemplate from '@/app/components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to:string, subject: string, url: string) => {
  try{
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to,
      subject,
      react: EmailTemplate({to, url})
    });
  }
  catch(err){
    console.error(err)
  }
}