import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Post Routes
import postRoutes from "../routes/posts";

const app = express();

// use post routes
app.use("/posts", postRoutes);

// set limit of 30mb for uploaded post images
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// mongoose setup >> using mongodb atlas
var CONNECTION_URL = process.env.MONGOOSE_URL || "NO API KEY";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL as string, {
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

