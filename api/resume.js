const path = require('path');
const fs = require('fs');

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const resumePath = path.join(process.cwd(), 'backend', 'uploads', 'resume.pdf');

  if (!fs.existsSync(resumePath)) {
    return res.status(404).json({ message: 'Resume not found' });
  }

  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
  res.setHeader('Content-Type', 'application/pdf');

  const fileStream = fs.createReadStream(resumePath);
  fileStream.pipe(res);
}
