
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";

mongoose.connect("mongodb://127.0.0.1:27017/smarterp");

const app = express();
app.use(cors());
app.use(express.json());

// Middleware
const protect = (req,res,next)=>{
 const token = req.headers.authorization?.split(" ")[1];
 if(!token) return res.status(401).json({message:"Not Authorized"});
 try{
  const decoded = jwt.verify(token,"secret123");
  req.user = decoded;
  next();
 }catch(err){
  res.status(401).json({message:"Invalid Token"});
 }
};

const authorize = (...roles)=>{
 return (req,res,next)=>{
  if(!roles.includes(req.user.role))
   return res.status(403).json({message:"Access Denied"});
  next();
 }
};

// Models
import Product from "./models/Product.js";
import Purchase from "./models/Purchase.js";
import GRN from "./models/GRN.js";
import Sale from "./models/Sale.js";
import Invoice from "./models/Invoice.js";

// Routes
app.post("/api/login",(req,res)=>{
 res.json({token: jwt.sign({role:"Admin"},"secret123")});
});

app.get("/api/products",protect, async(req,res)=> res.json(await Product.find()));
app.post("/api/products",protect,authorize("Admin"),async(req,res)=> res.json(await Product.create(req.body)));

app.post("/api/purchase",protect, async(req,res)=> res.json(await Purchase.create(req.body)));
app.post("/api/grn",protect, async(req,res)=> res.json(await GRN.create(req.body)));
app.post("/api/sales",protect, async(req,res)=> res.json(await Sale.create(req.body)));
app.post("/api/invoice",protect, async(req,res)=> res.json(await Invoice.create(req.body)));
app.get("/api/invoice",protect, async(req,res)=> res.json(await Invoice.find()));

app.listen(5000,()=>console.log("Server running on 5000"));
