const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.plugin(uniqueValidator);

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: 'User with email "{VALUE}" already exist',
      lowercase: true,
      required: 'Email is required',
      trim: true,
    },
    password: {
      type: String,
      required: 'Password is required',
      trim: true,
    },
    firstName: {
      type: String,
      lowercase: true,
      required: 'Firts name is required',
      trim: true,
    },
    lastName: {
      type: String,
      lowercase: true,
      required: 'Last name is required',
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.statics.createFields = [
  'email',
  'firstName',
  'lastName',
  'password',
];

UserSchema.pre('save', next => {
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(10);

    this.password = bcrypt.hashSync(this.password, salt);
  }

  next();
});

UserSchema.methods.comparePasswords = password =>
  bcrypt.compareSync(password, this.password);

UserSchema.static.findOneWithPublicFields = (params, cb) => {
  return this.findOne(params, cb).select({ password: 0, _id: 0, __v: 0 });
};

module.exports = mongoose.model('user', UserSchema);
