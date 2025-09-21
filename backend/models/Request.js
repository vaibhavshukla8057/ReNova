// Example Request "model" object for demonstration purposes.
// In a real app, you would connect to a database here.

// class Request {
//   constructor({ id, title, description, status }) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.status = status || "pending";
//   }
// }

// // Example: In-memory storage (replace with DB in production)
// const requests = [];

// // Create a new request
// function createRequest(data) {
//   const newRequest = new Request({
//     id: requests.length + 1,
//     ...data,
//   });
//   requests.push(newRequest);
//   return newRequest;
// }

// // Get all requests
// function getAllRequests() {
//   return requests;
// }

// // Export model functions
// module.exports = {
//   createRequest,
//   getAllRequests,
// };



import mongoose from "mongoose";


// Yeh hamare data ka structure (Schema) hai
// Yeh aapki 'class Request' ko replace karta hai
const requestSchema = new mongoose.Schema({

user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Yeh 'User' model se juda hai
  },
  // Yeh fields aapke frontend form se match hone chahiye
  item: {
    type: String,
    required: [true, "Item type is required"],
  },
  condition: {
    type: String,
    required: [true, "Item condition is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: 1,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  pickupDate: {
    type: Date,
    required: [true, "Pickup date is required"],
  },
  latitude: String,
  longitude: String,
  photoUrl: String, // Photo ka URL store karne ke liye
  status: {
    type: String,
    enum: ['Pending', 'Assigned', 'Completed', 'Cancelled'], // Sirf yahi values ho sakti hain
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Is schema se ek model banakar export karein
// Yeh model database se communication ke saare tools provide karta hai
const Request = mongoose.model('Request', requestSchema);

export default Request;

