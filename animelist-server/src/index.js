import express from 'express';
import path from 'path';
const app = express();


//route to API
app.post('/api/auth', (req, res) => {
  res.status(400).json({errors: {global: 'invalid credentials'}});
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, () => console.log('Server running on port 5000'));