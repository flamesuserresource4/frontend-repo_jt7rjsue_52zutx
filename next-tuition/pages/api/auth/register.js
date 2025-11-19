import { dbConnect } from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' })
  try {
    await dbConnect()
    const { name, email, password, role } = req.body
    if(!name || !email || !password) return res.status(400).json({ error:'Missing fields' })
    const exists = await User.findOne({ email })
    if(exists) return res.status(400).json({ error:'Email already used' })
    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hash, role: role||'student' })
    return res.status(201).json({ id: user._id })
  } catch (e){
    console.error(e)
    return res.status(500).json({ error:'Server error' })
  }
}
