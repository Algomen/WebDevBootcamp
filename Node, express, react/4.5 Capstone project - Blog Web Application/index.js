import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// const posts = [
//   { id: 1, title: "Post no 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
//   { id: 2, title: "Post no 2", body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" }
// ];

const posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});


app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/newpost", (req, res) => {
  res.render("newpost.ejs");
});

app.post("/submitpost", (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    body: req.body.body
  };
  posts.push(post);
  res.redirect("/");
});


app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);

  if (post) {
    res.render("post.ejs", { postP: post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


  // Render the edit form
app.get("/editpost/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);

  if (post) {
    res.render("editpost.ejs", { postP: post });
  } else {
    res.status(404).send("Post not found");
  }
});

// Handle the form submission and update the post
app.post("/updatepost/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    posts[postIndex].title = req.body.title;
    posts[postIndex].body = req.body.body;
    res.redirect(`/posts/${postId}`);
  } else {
    res.status(404).send("Post not found");
  }
});

// Handle the post deletion
app.get("/deletepost/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.redirect("/");
  } else {
    res.status(404).send("Post not found");
  }
});
