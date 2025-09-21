// Example Rider "model" object for demonstration purposes.
// In a real app, you would connect to a database here.

class Rider {
  constructor({ id, name, email, status }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.status = status || "active";
  }
}

// Example: In-memory storage (replace with DB in production)
const riders = [];

// Create a new rider
function createRider(data) {
  const newRider = new Rider({
    id: riders.length + 1,
    ...data,
  });
  riders.push(newRider);
  return newRider;
}

// Get all riders
function getAllRiders() {
  return riders;
}

// Export model functions
module.exports = {
  createRider,
  getAllRiders,
};