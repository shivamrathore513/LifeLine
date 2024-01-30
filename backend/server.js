const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");

const app = express();
const port = process.env.PORT || 4000;

// app.use(cors({
//   origin: `${process.env.BASE_HOST_URL}`,
//   credentials: true, // If you're sending credentials (e.g., cookies) with the request
// }));

// const corsOptions = {
//   origin: 'http://127.0.0.1:3000' ,
//   methods:'GET, POST, PUT,PATCH,DELETE,HEAD',
//   credentials:true,
// }


app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(port, () => {
  console.log(`server is running at ${port}`)
});
