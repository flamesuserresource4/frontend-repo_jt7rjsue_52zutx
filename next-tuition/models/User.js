import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ['student','teacher','admin'], default: 'student' },
  classesEnrolled: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  paymentHistory: [{
    amount: Number,
    plan: { type: String, enum: ['monthly', 'quarterly', 'yearly'] },
    status: { type: String, enum: ['paid','pending','failed'], default: 'pending' },
    date: { type: Date, default: Date.now },
    reference: String
  }]
},{ timestamps: true })

export default mongoose.models.User || mongoose.model('User', UserSchema)
