const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
const PORT = 8080;
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

const datasSchema = new mongoose.Schema({
  name: String,
  desc: String,
});
const dataModel = mongoose.model("Data", datasSchema);
async function main() {
  await mongoose
    .connect(
      "mongodb+srv://Fatima:ijnEQVtmu6lD7MZR@nft-cluster.lkpcrzn.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(console.log("connected"));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/data", async (req, res) => {
  let data = await dataModel.find({});
  res.send(data);
});

app.get("/data/:id", async (req, res) => {
  const id = req.params.id;
  let dataById = await dataModel.findById({ id });
  res.send(dataById);
});
app.delete("/data/:id", async (req, res) => {
  const id = req.params.id;
  let deleteById = await dataModel.findByIdAndDelete({ id });
  res.send(deleteById);
  console.log(deleteById)
});

app.post("/data", async (req, res) => {
  let newData = new dataModel({...req.body});
  newData.save();
  res.send(newData);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//ijnEQVtmu6lD7MZR
