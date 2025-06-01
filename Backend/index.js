import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import uploadRouter from "./routes/upload.route.js";
import connectDB from "./lib/connectDB.js";

dotenv.config();

const app = express();

// CORS configuration for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? [process.env.FRONTEND_URL, 'https://your-frontend.vercel.app']
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Basic middleware
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", (req, res) => {
  res.send("API is Working");
});

// Routes
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/upload", uploadRouter);

const PORT = process.env.PORT || 3001;

// Connect to database
connectDB();

// For Vercel deployment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel
export default app;