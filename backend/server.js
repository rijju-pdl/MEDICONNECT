import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; //for loading environment variables from a .env file into process.env
import userRoutes from './routes/users/index.js';
import doctorRoutes from './routes/doctors/index.js';


const app = express();
const PORT = 3000;

// Load environment variables from a .env file into process.env
dotenv.config();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json()); 

//define routes

app.use('/api/users', userRoutes);
app.use('/api/doctors', doctorRoutes);

// Connect to MongoDB
const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB connected');
} catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
}
};

// Define a sample route
app.get('/', (req, res) => {
res.send('Hello, Express with MongoDB!');
});

// Start the server after DB connection
connectDB().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
});
