const express = require("express");
require("./connection");

const BlogModel=require("./model/model")

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } 
  catch (error) {
    console.log(error);
  }
});

// Write GET API Code

app.get('/view', async (req,res) => { 
  try {
      const data = await BlogModel.find()
      res.send(data)
  }
  
  
  catch (error) {
      console.log(error)
  }
})

var PORT = 3001;
app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
