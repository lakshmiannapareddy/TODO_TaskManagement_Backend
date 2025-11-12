const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration

// Add your deployed Vercel frontend URL to the CORS origin list
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://task-manager-frontend-three-rust.vercel.app",
    "https://task-manager-frontend-5sbsrfw7c-lakshmis-projects-8147081f.vercel.app"
  ],
  credentials: true
};
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Register routes outside connectDB so they are always available
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

connectDB();
app.get('/', (req, res) => {
  res.json({ message: 'Task Management API' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}`);
});