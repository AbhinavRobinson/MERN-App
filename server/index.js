import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// mongoose setup
fs.readFile("./secret.json", "utf8", (err, data) => {
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
