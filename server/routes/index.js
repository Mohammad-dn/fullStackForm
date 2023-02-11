const express=require('express');
const router=express.Router()


exports.formRoute= router.post('/login',require('./../controller/formController').formController)
