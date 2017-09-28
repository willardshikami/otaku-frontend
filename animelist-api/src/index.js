import express from 'express';
import path from 'path';
const app = express();

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, () => console.log('Server running on port 5000'));