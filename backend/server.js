const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (for resume PDF)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New contact message from ${name} (${email}): ${message}`);
  // In a real app, you could save to database or send email here
  res.json({ message: 'Message received successfully!' });
});

app.get('/api/resume', (req, res) => {
  const resumePath = path.join(__dirname, 'uploads', 'resume.pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
  res.sendFile(resumePath, (err) => {
    if (err) {
      res.status(404).json({ message: 'Resume not found' });
    }
  });
});

// Basic route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Portfolio API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
