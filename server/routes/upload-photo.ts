import type { RequestHandler } from "express";
import multer from "multer";
import path from "path";

// Storage config (uploads/ folder me save hoga)
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    // Only allow jpg, jpeg, png
    if (["image/jpeg", "image/png", "image/jpg"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .jpeg, .png files are allowed!"));
    }
  },
});

export const handlePhotoUpload = [
  upload.single("photo"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({ message: "Photo uploaded!", filename: req.file.filename });
  },
];