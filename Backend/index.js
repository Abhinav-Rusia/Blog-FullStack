import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"

dotenv.config();
// const test = process.env.TEST
const app = express();

app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/comments", commentRouter)



app.listen(3000, () => console.log("Server running on port http://localhost:3000"))