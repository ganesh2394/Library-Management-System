const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const memberRoutes = require("./routes/memberRoutes");
const borrowRoutes = require("./routes/borrowRoutes");

const app = express();

app.use((req, res, next)=>{
  console.log(`Request Method : ${req.method} and URL : ${req.url}`);
  next();
});

dotenv.config();
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/borrows", borrowRoutes);

sequelize
  .sync({ force: true, alter: true })
  .then(() => {
    console.log("Database synced successfully.");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("Error syncing database:", err));
