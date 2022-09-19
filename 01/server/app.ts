import express from "express";
const app = express();

// Body parser middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Routes

app.get("/register", (req, res) => {
  res.send("Route register posts");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
