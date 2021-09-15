import express from "express";
import User from '../models/users';
import mongoose from "mongoose";
import * as bcrypt from 'bcrypt';

const router = express.Router();

router.post('signup', (req, res, next)=>{
    console.log('signup');
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(err){
            console.log('hash error');
            return res.status(500).json({error: err});
        }else{
            console.log('hash success');
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

});

export default router;