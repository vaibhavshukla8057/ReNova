// // Example User "model" object for demonstration purposes.
// // In a real app, you would connect to a database here.

// class User {
//   constructor({ id, name, email, role, status }) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.role = role || "user";
//     this.status = status || "active";
//   }
// }

// // Example: In-memory storage (replace with DB in production)
// const users = [];

// // Create a new user
// function createUser(data) {
//   const newUser = new User({
//     id: users.length + 1,
//     ...data,
//   });
//   users.push(newUser);
//   return newUser;
// }

// // Get all users
// function getAllUsers() {
//   return users;
// }

// // Export model functions
// module.exports = {
//   createUser,
//   getAllUsers,
// };


// 

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  // --- BADLAAV YAHAN HAI ---
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  // -------------------------
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
   mobile: {
    type: String,
    // Ek basic validation ki 10 digit ka number ho
    match: [/^\d{10}$/, 'Please fill a valid mobile number'],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'rider', 'admin'],
    default: 'user',
  },
});

// User save hone se PEHLE password ko hash karein
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Login ke waqt password compare karne ke liye function
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(entered-password, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;