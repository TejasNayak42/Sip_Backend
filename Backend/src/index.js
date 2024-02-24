import express from "express";

const app = express();

// app.get("/user/:id", (req, res) => {
//   res.json({ ...req.params });
// });

app.get("/bookings/:from.:to", (req, res) => {
  res.json({ ...req.params });
});

const middleware = function (req, res, next) {
  let id = req.params.id;
  if (parseInt(id)) {
    next();
  } else {
    res.json({ data: "Need an integer" });
  }
};
// parameter
app.get("/user/:id", middleware, (req, res) => {
  res.json({ ...req.params });
});

app.get(
  "/user/:id",
  (req, res, next) => {
    let id = req.params.id;
    if (parseInt(id)) {
      next();
    } else {
      res.json({ data: "Need an integer" });
    }
  },
  (req, res) => {
    res.json({ ...req.params });
  }
);
const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
