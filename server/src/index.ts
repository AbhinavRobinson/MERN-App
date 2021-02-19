import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";

import postRoutes from "../routes/posts";

const app = express();

app.use("/posts", postRoutes);

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// mongoose setup
fs.readFile(__dirname + "/../../secret.json", "utf8", (err, data) => {
  if (err) console.log(err);
  else {
    const secrets = JSON.parse(data);

    const CONNECTION_URL = secrets.mongoose_url;
    const PORT = process.env.PORT || 5000;

    mongoose
      .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() =>
        app.listen(PORT, () =>
          console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
      )
      .catch((error) => console.log(`${error} did not connect`));

    mongoose.set("useFindAndModify", false);
  }
});
