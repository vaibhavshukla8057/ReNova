



// import multer from "multer";
// import path from "path";
// import Request from "../models/Request.js";
// import { protect } from '../middleware/authMiddleware.js';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });
// export const upload = multer({ storage: storage });

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

// export const handleCreateRequest = async (req, res) => {
//   try {
//     const PORT = process.env.PORT || 8080;
//     const newRequestData = {
//       ...req.body,
//       // --- BADLAAV YAHAN HAI ---
//       user: req.user._id, // Middleware se mile user ki ID yahaan daalein
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
//     console.error("Error creating request:", error);
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };

// export const handleGetRequests = async (req, res) => { 
//     // Isse router mein convert karna behtar hoga
// };

// router.get('/my-requests', protect, async (req, res) => {
//     try {
//         const requests = await Request.find({ user: req.user._id }).sort({ createdAt: -1 });
//         res.json(requests);
//     } catch (error) {
//         res.status(500).json({ message: "Server Error" });
//     }
// });







import express from 'express';
import multer from "multer";
import path from "path";
import Request from "../models/Request.js";
import { protect } from '../middleware/authMiddleware.js';

// KADAM 1: Express Router ko initialize karein
const router = express.Router();

// KADAM 2: Multer (File Upload) ka setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });


// KADAM 3: Rider Assignment Logic (Helper functions)
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


// KADAM 4: Saare Routes ko define karein

// Route to get requests for the logged-in user
// GET /api/requests/my-requests
router.get('/my-requests', protect, async (req, res) => {
    try {
        const requests = await Request.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(requests);
    } catch (error) {
        console.error("Error fetching user requests:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Route to create a new pickup request
// POST /api/requests/
router.post('/', protect, upload.single('photo'), async (req, res) => {
  try {
    const PORT = process.env.PORT || 8080;
    const newRequestData = {
      ...req.body,
      user: req.user._id,
      photoUrl: req.file ? `http://localhost:${PORT}/uploads/${req.file.filename}` : undefined
    };

    const newRequest = new Request(newRequestData);
    const savedRequest = await newRequest.save();
    
    // Rider Assignment Logic
    let assignedRider = null;
    const userLat = parseFloat(req.body.latitude);
    const userLng = parseFloat(req.body.longitude);
    const quantity = parseInt(req.body.quantity, 10);

    if (userLat && userLng && quantity) {
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

    res.status(201).json({
      message: 'Pickup scheduled successfully!',
      data: savedRequest,
      assignedRider: assignedRider ? assignedRider.name : "An executive will be assigned soon."
    });

  } catch (error) {
    console.error("Error creating request:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});


// KADAM 5: Router ko aakhir mein export karein (Sabse Zaroori)
export { router };