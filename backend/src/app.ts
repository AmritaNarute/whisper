import express from 'express';
import authRoutes from './routes/authRoutes';
import chatRoutes from './routes/chatRoutes';
import { clerkMiddleware } from '@clerk/express'
import messageRoutes from './routes/messageRoutes';
import userRoutes from './routes/userRoute';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok", message: "server is running" })
})

app.use("/api/auth", authRoutes)
app.use("/api/chats", chatRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(errorHandler);

export default app;
