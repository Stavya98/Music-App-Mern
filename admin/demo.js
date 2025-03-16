const jwt = require('jsonwebtoken');

// Replace with your actual private key
const privateKey = '5fd553c91e34faaa05c906bd6cbd05ee588b6dd524d32ec6354a72b0e185fcf137d5ddb79ef605f1dfda87c1709bd166765a6eea0abd92b63b5cd1864f51f6b0';

// Function to generate a JWT token for an admin user
function generateAdminToken() {
  const payload = {
    userId: 'admin123',  // Replace with the actual user ID
    role: 'admin'
  };

  // Generate the token using the private key
  const token = jwt.sign(payload, privateKey, { algorithm: 'HS256', expiresIn: '1h' });

  return token;
}

// Example usage
const adminToken = generateAdminToken();
console.log('Admin JWT Token:', adminToken);
