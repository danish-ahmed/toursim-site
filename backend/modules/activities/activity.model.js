import mongoose, { Schema } from "mongoose";
import validator from "validator";
import uniqueValidator from 'mongoose-unique-validator';

const activitySchema = new Schema({
    title: {
      type: String,
      unique: true,
      required: [true, "Title is required"],
      trim: true
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
})

activitySchema.plugin(uniqueValidator, {
    message: '{VALUE} already taken'
})
export default mongoose.model("Activity", activitySchema);
