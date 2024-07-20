import express from "express";
import jwt from "jsonwebtoken";

import userModel from "../models/userModel.js";
import articleModel from "../models/articleModel.js";
import tokenGenerator from "../utils/tokenGenerator.js";

export const login=async (req,res)=>{
    try {
        const {email,password}=req.body
        const user=await userModel.findOne({email})
        if(!user){
            return res.send({message:"User Doesn't Exist",bool:false})
        }

        if(email==user.email && password==user.password){
            console.log("user",user)
            
            const userData={email:email,name:user.fullName,id:user._id,admin:user.isAdmin}
            const token= tokenGenerator(userData,process.env.SECRETE_TOKEN,"1hr")
            console.log(token)
           return res.send({message:"Login successfully",userData,bool:true,token:token});

            }
            
        }
        
catch (error) {
        console.log("error while login",error)
    }
}


export const register=async (req,res)=>{
    try {
        const {email,password,confirmPassword,fullName}=req.body;

        if(password!==confirmPassword){
            return res.status(400).json({message:"Password does not match"});
        }

        const existingUser=await userModel.findOne({email});

        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        const newUser= await userModel({
            fullName,
            email,
            password,
        })

        if(newUser){
            await newUser.save();
            res.status(201).json({message:"User created successfully"});
        }


    } catch (error) {
        console.log('Register error:', error);
    }
    
    
}

export const validateToken=async (req,res)=>{
    const {token}=req.body;
    if(!token){
        return res.send({message:"Token not found",bool:false})
    }
    try {
        const decoded=jwt.verify(token,process.env.SECRETE_TOKEN);
        if(decoded){
            res.send({message:"Token is valid",bool:true})
        }else{
           return res.send({message:"Token is invalid",bool:false})
        }
    } catch (error) {
        console.log("error while validating token",error)
    }
}


export const articlePost=async (req,res)=>{
    try {
        const {content,author}=req.body;
        const newArticle=await articleModel.create({content,author});
        if(newArticle){
            res.status(201).json({message:"Article created successfully",newArticle})
        }
    } catch (error) {
        console.log("error while creating article",error)
    }
}


export const getArticles=async (req,res)=>{
    try {
        const articles=await articleModel.find({});
        if(articles){
            console.log("first article",articles[0])
            res.status(200).json({articles})
        }
    } catch (error) {
        console.log("error while getting articles",error)
    }
}

export const approveArticle=async (req,res)=>{
    try {
        const {articleId}=req.body;
        const article=await articleModel.findById(articleId);
        if(article){
            article.isPublished=true;
            await article.save();
            res.status(200).json({message:"Article approved successfully"})
        }else{
            res.status(404).json({message:"Article not found"})}
    } catch (error) {
        console.log("error while approving article",error)
    }
}