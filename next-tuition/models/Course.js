import mongoose, { Schema } from 'mongoose'

const PriceSchema = new Schema({
  monthly: { type: Number, required: true },
  quarterly: { type: Number, required: true },
  yearly: { type: Number, required: true },
},{ _id:false })

const CourseSchema = new Schema({
  title: { type: String, required: true },
  level: { type: String, enum: ['Nursery','LKG','UKG','Primary','High School','Intermediate','Degree'], required: true },
  description: String,
  subjects: [String],
  syllabus: [String],
  pricing: { type: PriceSchema, required: true },
  demoVideos: [String],
  category: { type: String, default: 'General' }
},{ timestamps: true })

export default mongoose.models.Course || mongoose.model('Course', CourseSchema)
