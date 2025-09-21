// import express from "express";
// import { handleGetRequest, handleCreateRequest } from "./routes/request";

// const app = express();
// app.use(express.json());

// app.get("/api/request", handleGetRequest);
// app.post("/api/request", handleCreateRequest);

// // ...existing code...

// app.get("/api/ping", (req, res) => {
//   res.json({ message: "pong" });
// });

// // Start the server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });





//------------------------------

// server.js

// import express from "express";
// import authRoutes from './routes/auth.js';
// import cors from "cors";
// import path from "path";
// import fs from "fs";
// import { fileURLToPath } from "url";
// import mongoose from "mongoose"; // Mongoose ko import karein

// import { handleGetRequests, handleCreateRequest, upload } from "./routes/requests.js";
// app.use(cors());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // --- Database Connection ---
// const MONGO_URI = "mongodb://localhost:27017/e-waste-pickup"; // Aapke local MongoDB ka connection URL
// mongoose.connect(MONGO_URI)
//   .then(() => console.log("MongoDB connected successfully! ✅"))
//   .catch(err => console.error("MongoDB connection error: ❌", err));

//   app.use('/api/auth', authRoutes); // <-- Auth routes ko register karein
// app.get("/api/requests", handleGetRequests);
// app.post("/api/request", upload.single('photo'), handleCreateRequest);
// // -------------------------

// app.use(cors());
// app.use(express.json());

// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//     fs.mkdirSync(uploadsDir);
// }
// app.use('/uploads', express.static(uploadsDir));

// // API Routes
// app.get("/api/requests", handleGetRequests);
// app.post("/api/request", upload.single('photo'), handleCreateRequest);

// app.get("/api/ping", (req, res) => {
//   res.json({ message: "pong" });
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// KADAM 1: Saare Imports ek saath upar
// import express from "express";
// import cors from "cors";
// import path from "path";
// import fs from "fs";
// import { fileURLToPath } from "url";
// import mongoose from "mongoose";
// import { router as requestRoutes } from './routes/auth.js';
// import requestRoutes from './routes/requests.js';
// import userRoutes from './routes/userRoutes.js';

// // Routes ko import karein


// import { handleGetRequests, handleCreateRequest, upload } from "./routes/requests.js";

// // KADAM 2: App ko initialize karein
// const app = express();

// // File path ke liye configuration
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // KADAM 3: Database Connection
// const MONGO_URI = "mongodb://localhost:27017/e-waste-pickup";
// mongoose.connect(MONGO_URI)
//   .then(() => console.log("MongoDB connected successfully! ✅"))
//   .catch(err => console.error("MongoDB connection error: ❌", err));

//   app.use('/api/auth', authRoutes);
// app.use('/api/requests', requestRoutes);
// app.use('/api/users', userRoutes);

// // KADAM 4: Saare Middlewares ek saath (Routes se pehle)
// app.use(cors()); // CORS middleware
// app.use(express.json()); // JSON body ko parse karne ke liye

// // 'uploads' folder ko public/static banayein
// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//     fs.mkdirSync(uploadsDir);
// }
// app.use('/uploads', express.static(uploadsDir));

// // KADAM 5: Saare API Routes ek saath
// app.use('/api/auth', authRoutes);
// app.get("/api/requests", handleGetRequests);
// // Note: Aapke do route the /api/request aur /api/requests, maine dono rakhe hain
// app.post("/api/request", upload.single('photo'), handleCreateRequest);

// app.get("/api/ping", (req, res) => {
//   res.json({ message: "pong" });
// });
// app.post("/api/request", protect, upload.single('photo'), handleCreateRequest);

// app.use('/api/auth', authRoutes);
// app.use('/api/requests', requestRoutes);
// app.use('/api/users', userRoutes); 



// // KADAM 6: Server ko aakhir mein start karein
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// KADAM 1: Saare Imports ek saath
// import express from "express";
// import cors from "cors";
// import path from "path";
// import fs from "fs";
// import { fileURLToPath } from "url";
// import mongoose from "mongoose";

// // Route imports ko theek kiya gaya
// import authRoutes from './routes/auth.js';
// import requestRoutes from './routes/requests.js';
// import userRoutes from './routes/userRoutes.js';

// // NOTE: 'protect' middleware ko uski file se import karna zaroori hai. Example:
// // import { protect } from './middleware/authMiddleware.js';


// // KADAM 2: App ko initialize karein
// const app = express();

// // File path ke liye configuration
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// // KADAM 3: Database Connection
// const MONGO_URI = "mongodb://localhost:27017/e-waste-pickup";
// mongoose.connect(MONGO_URI)
//   .then(() => console.log("MongoDB connected successfully! ✅"))
//   .catch(err => console.error("MongoDB connection error: ❌", err));


// // KADAM 4: Core Middlewares (Yeh hamesha Routes se pehle aane chahiye)
// app.use(cors()); // CORS errors se bachne ke liye
// app.use(express.json()); // req.body mein JSON data ko parse karne ke liye

// // 'uploads' folder ko public/static banayein
// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//     fs.mkdirSync(uploadsDir);
// }
// app.use('/uploads', express.static(uploadsDir));


// // KADAM 5: Saare API Routes ko register karein (sirf ek baar)
// app.use('/api/auth', authRoutes);
// app.use('/api/requests', requestRoutes);
// app.use('/api/users', userRoutes);

// app.get("/api/ping", (req, res) => {
//   res.json({ message: "pong" });
// });

// // NOTE: Aapke baaki ke routes jaise GET /api/requests aur POST /api/request
// // ab apne-apne router files (e.g., requests.js) ke andar hone chahiye.
// // Isse aapka server.js saaf rehta hai.


// // KADAM 6: Server ko aakhir mein start karein
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

import authRoutes from './routes/auth.js';
import { router as requestRoutes } from './routes/requests.js'; 
import userRoutes from './routes/userRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGO_URI = "mongodb://localhost:27017/e-waste-pickup";
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully! ✅"))
  .catch(err => console.error("MongoDB connection error: ❌", err));

app.use(cors());
app.use(express.json());

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}
app.use('/uploads', express.static(uploadsDir));

app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/users', userRoutes);

app.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});