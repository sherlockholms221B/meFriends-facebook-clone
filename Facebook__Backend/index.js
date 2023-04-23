import express from "express";
import router from "./Routes/index.js";
import cors from "cors";

const app = express();
const options = {
  route: "http://localhost:3000",
};
app.use(express.json())
app.use(cors());

app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
