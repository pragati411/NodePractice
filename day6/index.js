import Mongoose from "mongoose";
Mongoose
  .connect(`mongodb://127.0.0.1:27017/cohort7`)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error");
  });

//  await Mongoose.connect("mongodb://localhost:27017/cohort7");

const Batch = Mongoose.model("Batch", { name: String, isActive: Boolean },);

const engineer = new Batch({ name: "Shruthi", isActive: true });
engineer.save().then(() => console.log("Record Created"));

Batch.find().then((data) => console.log(data));