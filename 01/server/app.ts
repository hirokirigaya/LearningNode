import express from "express";
import Post from './models/Post';
const app = express();
// Body parser middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Routes

app.post("/register", (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
  }).then(() => {
    res.send("Post created with success!")
    res.status(200)
  }).catch((err: any) => {
      res.status(400).json({
      type: "error",
      error: err
    })
  })
});

app.get("/posts", (req, res) => {
  Post.findAll().then((posts) => {
    res.status(200).json({
      type: "success",
      posts
    })
  }).catch((err: any) => {
    res.status(400).json({
      type: "error",
      error: err
    })
  })
})

app.delete("delete/:id", (req, res) => {
  Post.destroy({where: {id: req.params.id}}).then(() => {
    res.status(200).json({
      type: "success",
      message: "Post deleted with success!"
    })
  }).catch((err: any) => {
    res.status(400).json({
      type: "error",
      error: err
    })
  })
})

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
