import { dbConnect } from '@/lib/mongodb'
import Course from '@/models/Course'

export default async function handler(req,res){
  await dbConnect()
  if(req.method === 'GET'){
    const { level } = req.query
    const filter = level ? { level } : {}
    const courses = await Course.find(filter).sort({ createdAt: -1 })
    return res.status(200).json(courses)
  }
  if(req.method === 'POST'){
    // admin only in production — simplified for MVP
    const course = await Course.create(req.body)
    return res.status(201).json(course)
  }
  return res.status(405).json({ error:'Method not allowed' })
}
