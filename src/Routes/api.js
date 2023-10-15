
const express = require('express');
const { createStudent, studentLogin, updateStudentProfile, studentDetails, removeStudentProfile, createOtpforPasswordReset, verifyOtp, setPassword } = require('../Controllers/studentsControllers');
const { createWrok, findWrokDetails, updateWorkDetails, removeWorkDetails } = require('../Controllers/worksController');
const AuthVerifyMiddleware = require('../Middlewares/authVerifyMiddleware');

const router = express.Router();

//students request
router.post("/createStudent", createStudent);
router.post("/login", studentLogin);
router.put("/updateProfile", AuthVerifyMiddleware, updateStudentProfile);
router.get("/getDetails", AuthVerifyMiddleware, studentDetails);
router.delete("/removeStudent/:id", AuthVerifyMiddleware, removeStudentProfile);
router.post("/createOtp/:email" , AuthVerifyMiddleware, createOtpforPasswordReset);
router.put("/verifyOtp/:email/:otp" , AuthVerifyMiddleware,verifyOtp)
router.put("/resetPassword" , AuthVerifyMiddleware , setPassword)

//works request
router.post("/createWork", AuthVerifyMiddleware, createWrok);
router.get("/workDetails", AuthVerifyMiddleware, findWrokDetails);
router.put("/updateDeatils/:id/:status", AuthVerifyMiddleware, updateWorkDetails);
router.delete("/removeWork/:id", AuthVerifyMiddleware, removeWorkDetails);

module.exports = router;


