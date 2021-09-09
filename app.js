const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config({ path: "./config/.env" });

const app = express();

connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/index"));
app.use("/api", require("./routes/api"));

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT http://127.0.0.1:${PORT}`);
  console.log("Press Ctrl-C to stop the server");
});
