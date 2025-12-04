import mongoose, { Schema } from "mongoose";


const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, index: 'text' },
  description: String,

  instructor: { type: Schema.Types.ObjectId, ref: 'User'},

  instructorName: { type: String, required: true, index: true},

  syllabus: [{ title: String, description: String }],

  price: { type: Number, required: true, default: 0,index:true },

  category: { type: String, index: true },

  thumbnail: { type: String },

  tags: [{ type: String, index: true }],

  lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],

  batches: [{
    name: String,
    startDate: Date,
    endDate: Date
  }],


 
},{timestamps:true});

// Compound index example to speed up listings by category+price
courseSchema.index({ category: 1, price: 1 });

const Course = mongoose.model('Course', courseSchema)
export default Course