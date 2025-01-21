const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const helmet = require("helmet");
const cors = require("cors");

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const memberRoutes = require("./routes/memberRoutes");
const borrowRoutes = require("./routes/borrowRoutes");

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/borrows", borrowRoutes);

// Fallback for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("Error syncing database:", err));

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Gracefully shutting down...");
  await sequelize.close();
  process.exit(0);
});
