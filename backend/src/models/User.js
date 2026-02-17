import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../configs/env.js';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      required: [true, 'Please provide an email'],
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },

    password: {
      type: String,
      required: [true, 'Please provide a password'],
      validate: [validator.isStrongPassword, 'Please use strong password'],
      select: false,
    },
    image: {
      type: String,
      default: 'default-avatar.png',
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, ENV.JWT_SECRET, {
    expiresIn: ENV.JWT_EXPIRES_IN,
  });
};

const User = mongoose.model('User', userSchema);

export default User;
