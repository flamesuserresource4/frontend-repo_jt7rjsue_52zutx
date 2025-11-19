import { dbConnect } from '@/lib/mongodb'
import Message from '@/models/Message'
import nodemailer from 'nodemailer'

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' })
  try{
    await dbConnect()
    const { name, email, phone, message } = req.body
    const doc = await Message.create({ name, email, phone, message })

    if(process.env.EMAIL_SERVER_HOST){
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT || 587,
        secure: false,
        auth: { user: process.env.EMAIL_SERVER_USER, pass: process.env.EMAIL_SERVER_PASSWORD }
      })
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'no-reply@tuition.com',
        to: process.env.EMAIL_FROM || 'admin@tuition.com',
        subject: 'New Contact Message',
        text: `${name} (${email}, ${phone}) says: ${message}`
      })
    }

    return res.status(201).json({ id: doc._id })
  } catch(e){
    console.error(e)
    return res.status(500).json({ error:'Server error' })
  }
}
