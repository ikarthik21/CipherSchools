import express from 'express';
const router = express.Router();
import UserController from '../app/Controllers/UserController.js'

router.get("/", (req, res) => {

     res.send("hello");

})


router.get("/getfollowers", UserController().getFollowers);


// //Register a new user
// router.post('/adduser', UserController().adduser);



// // Login User
// router.post('/login', UserController().signin);


// //Edit Profile Details
// router.post('/editUser', UserController().edit);


// // Get user Details
// router.post('/getuser', UserController().getdetails);


// // Change password
// router.post('/changepass',  UserController().changepass);


// // Edit  User Intrests

// router.post('/editintrests',  UserController().editUserInrests);



export default router;