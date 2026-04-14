import "dotenv/config";
import express from "express";
import connection from "./database/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./database/models/User.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());

(async () => {
  try {
    await connection.sync();
  } catch (err) {
    console.error(err);
  }
})();

app.use(authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server in ${process.env.PORT}`);
});
