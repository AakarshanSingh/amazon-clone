import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routes/authRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import connectDB from './database/connectDB.js';

dotenv.config();

const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/', authRouter);
app.use('/admin', adminRouter);
app.use('/api', productRouter);
app.use('/api', userRouter);

app.listen(PORT, '0.0.0.0', async () => {
  await connectDB(process.env.MONGO_DB_URI);
  console.log(`Server is running on port ${PORT}`);
});
