import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from '../src/routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;

// MongoDB connection
const uri = `${process.env.MONGO_URI}/saasmonk-assignment`;
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

// Use the router
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});