const express = require("express");
const cors = require("cors");
const ConnectDB = require("./DB_Configue/db");
const userRoutes = require("./Routes/userRoutes");
const TLRoutes = require("./Routes/TLroutes");
const employeeRoutes = require("./Routes/employeeRoutes");
const taskRoutes = require("./Routes/taskRoutes");
const app = express();
const port = 3000;
// CORS
app.use(cors({
    origin: ["https://task-manager-client-kohl.vercel.app","https://task-manager-client-gmcdtnone-ranjithbaswarajus-projects.vercel.app","http://localhost:5173"]
}));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Database Connection
ConnectDB();
// Routes
app.use("/api", userRoutes);
app.use("/api", TLRoutes);
app.use("/api", employeeRoutes);
app.use("/api", taskRoutes);
// Server
app.listen(port, () => {

    console.log(`Server Running at ${port}`);

});