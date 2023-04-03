const express= require("express");
const bodyParser= require("body-parser");
const Date= require(__dirname+ "/date.js");

const app= express();
let items =["eat", "sleep", "repeat"];
let workItems= [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded("extended:true"));
app.use(express.static("public"));

app.get("/", function(req, res)
{
    let day= Date.getDate();
    
    res.render("list", {ListTitle: day, newListItems:items});

});

app.get("/work", function(req,res)
{
    res.render("list", {ListTitle: "work List", newListItems:workItems });
});


app.post("/", function(req,res)
{
    // console.log(req.body);
   let item= req.body.newItem;
   if(req.body.list==="work"){
       workItems.push(item);
       res.redirect("/work");
    }
     else{
        items.push(item);
        res.redirect("/");
    }
});


app.listen(3000, function()
{
    console.log("server is running on port 3000");
})


//let or const both are correct here