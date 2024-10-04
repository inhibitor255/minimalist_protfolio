const express = require("express");
const path = require("path");

const app = express();
const port = 9000;

// Define the path for the dist folder
const distPath = path.join(__dirname);

// Middleware to serve static files from 'dist' folder
app.use(express.static(distPath));

// Serve the HTML file from the 'dist' folder
app.get("/", (req, res) => {
  // Adjust the path to serve index.html from the dist folder
  res.sendFile(path.join(distPath, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
  console.log("distPath", distPath);
});
