// GET /api/admin - Example admin info endpoint
exports.handleGetAdmin = (req, res) => {
  res.json({ message: "Admin info fetched!" });
};

// POST /api/admin - Example admin creation endpoint
exports.handleCreateAdmin = (req, res) => {
  // You can access req.body here for posted data
  res.json({ message: "Admin created!" });
};