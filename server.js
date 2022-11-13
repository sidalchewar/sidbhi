var  express=require('express');
var app=express();

//middleware setting

app.use(express.static('public'));
const jsonParser = express.json();
app.use(jsonParser);
app.use(express.urlencoded({ extended: true }));


//map incomming request with callback function
//Rrequest routing logic
//HTTP Handlers
//HTTP Requests are mapped with HTTP handlers
app.get("/", (req, res)=>{res.sendFile('index.html')});
app.get("/Register Here",(req, res)=>{res.send("register.html");});
app.get("/aboutus",(req,res)=>{res.send("aboutus.html")});
app.get("/contactus",(req,res)=>{res.send("contactus.html")});
//app.get("/products",(req, res)=>{

// var flowers=[{"id":12,"title":"Gerbera", "description":"Wedding Flower","unitprice":5,
//               "quatity":5000},
//               {"id":13,"title":"Rose", "description":"valentine Flower","unitprice":15,
//               "quatity":5000},
//               {"id":14,"title":"Lotus", "description":"Worship Flower","unitprice":22,
//               "quatity":5000},
//               {"id":15,"title":"Jasmine", "description":"Smelling Flower","unitprice":5,
//               "quatity":5000},
//               {"id":16,"title":"Tulip", "description":"Wedding Flower","unitprice":5,
//               "quatity":5000},
//               {"id":17,"title":"Orchid", "description":"Wedding Flower","unitprice":5,
//               "quatity":5000}
//             ]
//     res.send(flowers);
// });

// app.post("/login",(req, res)=>{
//     console.log(req.body);
//     console.log("data is posted from client");
//     let user=req.body;
//     let status="";
//     if(user.email==="sid" && user.password==="sid"){
//         status="The Beast is Here....";
//     }
//     else{
//         status="GOD....";
//     }
//     res.send(status);
// });

// app.post("/addtocart",(req, res)=>{

// });


app.listen(600);
console.log("server is listening on port 8888");

