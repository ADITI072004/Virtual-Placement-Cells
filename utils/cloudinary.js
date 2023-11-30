require("dotenv").config()
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dhlqkx25x', 
  api_key: '114516546113696', 
  api_secret: 'H7x1o6qNdUb9E7bfpsSdFIQ_rW8' 
});

module.exports = cloudinary;