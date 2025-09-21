// // GET /api/requests - Example: fetch all requests
// exports.handleGetRequests = (req, res) => {
//   res.json({ message: "All requests fetched!" });
// };

// // POST /api/requests - Example: create a new request
// exports.handleCreateRequest = (req, res) => {
//   // Access request data via req.body
//   res.json({ message: "Request created!" });
// };





//-------------------

// import multer from "multer";
// import path from "path";
// // Step 1: Apne naye Mongoose model ko import karein
// import Request from "../models/Request.js";

// // --- Multer Setup (File Upload Handling) ---
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });
// export const upload = multer({ storage: storage });

// const PORT = process.env.PORT || 8080;

// // --- Route Handlers ---

// // Yeh aapke 'createRequest' function ko replace karta hai
// export const handleCreateRequest = async (req, res) => {
//   try {
//     const requestData = {
//       ...req.body,
//       // Agar file upload hui hai, to uska URL add karein
//       photoUrl: req.file ? `http://localhost:${PORT}/uploads/${req.file.filename}` : undefined
//     };

//     // Step 2: Model ka istemaal karke database mein naya document banayein
//     const newRequest = new Request(requestData);
    
//     // Step 3: Naye document ko database mein save karein
//     const savedRequest = await newRequest.save();

//     console.log("Request saved to MongoDB:", savedRequest);
//     res.status(201).json({ 
//       message: 'Pickup scheduled successfully!', 
//       data: savedRequest 
//     });

//   } catch (error) {
//     console.error("Error creating request:", error);
//     // Validation error ke liye behtar message
//     if (error.name === 'ValidationError') {
//       return res.status(400).json({ message: "Validation Error", details: error.message });
//     }
//     res.status(500).json({ message: "Server error while creating request" });
//   }
// };

// // Yeh aapke 'getAllRequests' function ko replace karta hai
// export const handleGetRequests = async (req, res) => {
//   try {
//     // Step 4: Model ka istemaal karke database se saare documents dhoondhein
//     const allRequests = await Request.find().sort({ createdAt: -1 }); // Naye request sabse upar
//     res.status(200).json(allRequests);

//   } catch (error) {
//     console.error("Error fetching requests:", error);
//     res.status(500).json({ message: "Server error while fetching requests" });
//   }
// };











// //---------------------

// // routes/request.js

// import multer from "multer";
// import path from "path";
// import Request from "../models/Request.js";
// import { protect } from '../middleware/authMiddleware.js';  

// // --- Multer Setup (Yeh waise ka waisa hi rahega) ---
// // ... (multer ka code jaisa tha waisa hi rakhein)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });
// export const upload = multer({ storage: storage });

// // --- Rider Data aur Logic (Yeh naya hai) ---
// const RIDERS = [
//   { id: "r1", name: "Vidushi Singh", lat: 28.6139, lng: 77.209, capacityKg: 50 },
//   { id: "r2", name: "Rohan Tyagi", lat: 28.7041, lng: 77.1025, capacityKg: 80 },
//   { id: "r3", name: "Raunak Shivhare", lat: 28.4595, lng: 77.0266, capacityKg: 60 },
//   { id: "r4", name: "Himanshu Rathore", lat: 28.5355, lng: 77.391, capacityKg: 40 },
// ];

// function haversine(lat1, lon1, lat2, lon2) {
//   const R = 6371; const dLat = ((lat2 - lat1) * Math.PI) / 180; const dLon = ((lon2 - lon1) * Math.PI) / 180;
//   const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); return R * c;
// }

// // --- Route Handlers (Inko update karenge) ---

// export const handleCreateRequest = async (req, res) => {
//   try {
//     const PORT = process.env.PORT || 8080;
//     const newRequestData = {
//       ...req.body,
//       photoUrl: req.file ? `http://localhost:${PORT}/uploads/${req.file.filename}` : undefined
//     };

//     const newRequest = new Request(newRequestData);
//     const savedRequest = await newRequest.save();
    

//     // --- Rider Assignment Logic ---
//     let assignedRider = null;
//     const userLat = parseFloat(req.body.latitude);
//     const userLng = parseFloat(req.body.longitude);
//     const quantity = parseInt(req.body.quantity, 10);

//     if (userLat && userLng) {
//       const feasibleRiders = RIDERS.filter(r => r.capacityKg >= quantity);
//       if (feasibleRiders.length > 0) {
//         let nearest = feasibleRiders.reduce((best, current) => {
//           const distance = haversine(userLat, userLng, current.lat, current.lng);
//           if (distance < best.distance) {
//             return { rider: current, distance: distance };
//           }
//           return best;
//         }, { rider: feasibleRiders[0], distance: haversine(userLat, userLng, feasibleRiders[0].lat, feasibleRiders[0].lng) });
//         assignedRider = nearest.rider;
//         // Yahaan aap 'savedRequest' ko rider ki ID ke saath update bhi kar sakte hain
//         // await Request.findByIdAndUpdate(savedRequest._id, { assignedRider: assignedRider.id });
//       }
//     }
//     // ----------------------------

//     console.log("Request saved to MongoDB:", savedRequest);
//     console.log("Assigned Rider:", assignedRider ? assignedRider.name : "None");

//     res.status(201).json({
//       message: 'Pickup scheduled successfully!',
//       data: savedRequest,
//       assignedRider: assignedRider ? assignedRider.name : "An executive will be assigned soon."
//     });

//   } catch (error) {
//     // ... error handling
//   }
// };

// export const handleGetRequests = async (req, res) => { /* ... yeh waise hi rahega ... */ };



import multer from "multer";
import path from "path";
import Request from "../models/Request.js";
import { protect } from '../middleware/authMiddleware.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
export const upload = multer({ storage: storage });

const RIDERS = [
  { id: "r1", name: "Vidushi Singh", lat: 28.6139, lng: 77.209, capacityKg: 50 },
  { id: "r2", name: "Rohan Tyagi", lat: 28.7041, lng: 77.1025, capacityKg: 80 },
  { id: "r3", name: "Raunak Shivhare", lat: 28.4595, lng: 77.0266, capacityKg: 60 },
  { id: "r4", name: "Himanshu Rathore", lat: 28.5355, lng: 77.391, capacityKg: 40 },
];

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; const dLat = ((lat2 - lat1) * Math.PI) / 180; const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); return R * c;
}

export const handleCreateRequest = async (req, res) => {
  try {
    const PORT = process.env.PORT || 8080;
    const newRequestData = {
      ...req.body,
      // --- BADLAAV YAHAN HAI ---
      user: req.user._id, // Middleware se mile user ki ID yahaan daalein
      photoUrl: req.file ? `http://localhost:${PORT}/uploads/${req.file.filename}` : undefined
    };

    const newRequest = new Request(newRequestData);
    const savedRequest = await newRequest.save();
    
    // --- Rider Assignment Logic ---
    let assignedRider = null;
    const userLat = parseFloat(req.body.latitude);
    const userLng = parseFloat(req.body.longitude);
    const quantity = parseInt(req.body.quantity, 10);

    if (userLat && userLng) {
      const feasibleRiders = RIDERS.filter(r => r.capacityKg >= quantity);
      if (feasibleRiders.length > 0) {
        let nearest = feasibleRiders.reduce((best, current) => {
          const distance = haversine(userLat, userLng, current.lat, current.lng);
          if (distance < best.distance) {
            return { rider: current, distance: distance };
          }
          return best;
        }, { rider: feasibleRiders[0], distance: haversine(userLat, userLng, feasibleRiders[0].lat, feasibleRiders[0].lng) });
        assignedRider = nearest.rider;
      }
    }
    // ----------------------------

    console.log("Request saved to MongoDB:", savedRequest);
    console.log("Assigned Rider:", assignedRider ? assignedRider.name : "None");

    res.status(201).json({
      message: 'Pickup scheduled successfully!',
      data: savedRequest,
      assignedRider: assignedRider ? assignedRider.name : "An executive will be assigned soon."
    });

  } catch (error) {
    console.error("Error creating request:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const handleGetRequests = async (req, res) => { 
    // Isse router mein convert karna behtar hoga
};

router.get('/my-requests', protect, async (req, res) => {
    try {
        const requests = await Request.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});