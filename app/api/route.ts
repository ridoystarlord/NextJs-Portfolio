import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'ridoy.starlord@gmail.com',
    pass: 'iqfk xkxw tfpd fmtk',
  },
});

export async function POST(req: Request) {
  try {
    const payloadBody: any = await req.json();
    const { email, subject, body, name } = payloadBody;
    const transporterOptions = {
      from: 'ridoy.starlord@gmail.com', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text:
        'Dear ' +
        name +
        '\n\n' +
        'I hope your are doing well.' +
        'Thanks for reach out to me. I will get back to your Query ASAP' +
        '\n\n' +
        'Your query: ' +
        body +
        '\n\n' +
        'Best Regards' +
        '\n' +
        'Mehedi Hasan Ridoy', // plain text body
    };
    await transporter.sendMail(transporterOptions);
    return NextResponse.json({ message: 'Email Sent Successfully' });
  } catch (err) {
    return NextResponse.json(err);
  }
}
