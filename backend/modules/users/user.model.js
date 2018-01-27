import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt, { compareSync, hashSync } from "bcrypt-nodejs";
import jwt from "jsonwebtoken";
import uniqueValidator from 'mongoose-unique-validator';


const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    trim: true,
    lowercase: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: "{VALUE} is not a valid email"
    }
  },
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    trim: true
  }
});
userSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
  }
  return next();
});

userSchema.methods = {
  authenticatePassword: function(password) {
    return compareSync(password, this.password);
  },
  _hashPassword: function(password) {
    return hashSync(password);
  },
  generateJWT: function() {
    return jwt.sign(
      {
        id: this.id
      },
      process.env.jwtSecret
    );
  },
  toAuthJSON: function() {
    return {
      email: this.email,
      username: this.username,
      isAdmin: this.isAdmin,
      isEmailVerified: this.isEmailVerified,
      token: this.generateJWT()
    };
  }
};


export default mongoose.model("User", userSchema);
