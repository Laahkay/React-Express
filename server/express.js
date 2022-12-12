const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const {saveDetails} = require('./routes/postRoutes')

let PORT =7000;
let STATUS = 200;


app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://kgothatsoKgatho:kgothatso24@cluster0.bp4ew.mongodb.net/?retryWrites=true&w=majority";

  mongoose
  .connect(uri)
  .then((res) => console.log("mangoDB is connected"))
  .catch((e) => console.log("e", e));
saveDetails(app);

app.listen(PORT, () => {
  console.log(`Server in ${STATUS} mode,active on port:${PORT}`);
});
