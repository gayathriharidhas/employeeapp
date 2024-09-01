const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://gayathriharidas001:qTnabMgnfExnALJD@cluster0.fcmku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" )

  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
