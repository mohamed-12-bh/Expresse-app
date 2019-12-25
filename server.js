const express = require("express");
const app = express();

const date = new Date().getHours();
console.log(date);

//  app.get('/home' ,(req,res) =>{
//      res.send('is connect')
// })

// app.get('/ourservices' ,(req,res) =>{
//     res.send('is connect')
// })
// app.get('/contact' ,(req,res) =>{
//     res.send('is connect')
// })

app.use(express.static(__dirname + "/product"));
if (date >= 17 || date <=8) {
  console.log("Our office is not open now");
} else {
    console.log("welcome to our office");
}

app.listen(3000, (err) => {
if(err) console.log("server is not runing")
else console.log("server is runing on port 3000")
})