import mongoose from 'mongoose';

const { Schema } = mongoose;

const enrollmentSchema = new Schema(
  {
    user: {
      type: String,
      ref: 'User',
      required: true,
      index: true
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
      index: true
    },
    batchName: {
      type: String
    },
    progress: {
      type: Number,
      default: 0 // 0 - 100
    },
    completedLessons: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
      }
    ],
    enrolledAt: {
      type: Date,
      default: Date.now
    }
  }
);

// Unique index to prevent duplicate enrollment
enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment;
