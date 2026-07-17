const express = require('express');
const app = express();
const PORT = 3000;

// This is a "Route"
app.get('/', (req, res) => {
  res.send('Hello World! Your Express server is working.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});