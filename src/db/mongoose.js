const mongoose = require("mongoose");

const db =
  "mongodb+srv://luna123:1234@cluster0-vixcw.mongodb.net/test?retryWrites=true";

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Mongodb Connected..."))
  .catch(err => console.log(err));
