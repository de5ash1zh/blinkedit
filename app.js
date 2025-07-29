import express from "express";
const app = express();
import indexRouter from "./routes/index.js";

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log(`Server running`);
});
