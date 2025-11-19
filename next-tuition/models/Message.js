import mongoose, { Schema } from 'mongoose'

const MessageSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  status: { type: String, enum: ['new','reviewed','archived'], default: 'new' }
},{ timestamps: true })

export default mongoose.models.Message || mongoose.model('Message', MessageSchema)
