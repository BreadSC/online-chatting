import express from "express";
import * as dotenv from "dotenv";
//import connect from "../src/config/db/index.js";
import route from "./routes/index.js";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { createServer } from "node:http";
import connectToMongoDB from "./app/db/connectToMongo.js";
import { app, server } from "./app/socket/socket.js";

// authen middleware
// import checkToken from "./app/authentication/auth.js";
// CORS configuration


// const corsOptions = {
//   origin: "http://localhost:4200", // Allow requests from Angular application
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };


dotenv.config();
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());
// app.use(cors(corsOptions));

//connect();
route(app);

//app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
// app.use(checkToken);
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server started at port ${PORT}`);
  //root route http://localhost:5000/
});
