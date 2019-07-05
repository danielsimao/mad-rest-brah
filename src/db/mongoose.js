const mongoose = require("mongoose");

const db =
  "mongodb+srv://luna123:1234@cluster0-vixcw.mongodb.net/test?retryWrites=true";

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Mongodb Connected..."))
  .catch(err => console.log(err));

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});
