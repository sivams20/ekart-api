import express from "express";
import User from '../models/users';
import mongoose from "mongoose";
import * as bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const router = express.Router();

router.post('/signup', (req, res, next)=>{

    User.find({email: req.body.email})
    .exec()
    .then(user => {
        console.log(user);
        if(user.length){
            return res.status(409).json({message: "Mail already exist!"});
        }else{
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err){
                    return res.status(500).json({error: err});
                }else{
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    });
                    user
                    .save()
                    .then(result=>{
                        console.log(result);
                        res.status(200).json({
                            message: 'User Created'
                        })
                    })
                    .catch(err=>{
                        res.status(500).json({
                            error: err
                        })
                    })
                }
            })
        }
    });
});

router.post('/signin', (req, res, next)=>{
    User.find({email: req.body.email})
    .exec()
    .then(user=>{
        if(user.length < 1){
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        const hashData = user[0];
        const password = hashData.password;
        bcrypt.compare(req.body.password, password, (error, result)=>{
            if(error){
                return res.status(401).json({
                    message: "Auth Failed"
                });
            }
            if(result){
                const token = jwt.sign({email: user[0].email, userId: user[0]._id}, 'JWT_Secret_Key',{expiresIn: "1h"});
                return res.status(200).json({
                    message: "Authentication Successful",
                    token: token
                })
            }
            res.status(401).json({message: "Authentication failed"});
        });
    })
    .catch(err=>{
        res.status(500).json({error: err});
    })
});

router.delete("/:userId", (req, res, next) => {
    User.remove({ _id: req.params.userId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "User deleted"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

export default router;