import UserRegister from '../models/UserSchema.js';
import bcrypt from "bcrypt";
import passport from 'passport';



import { v4 as uuidv4 } from 'uuid';





const UserController = () => {

    return {

        async adduser(req, res) {

            const { fname, lname, email, phone, password } = req.body;


            const userid = "CIPH-" + uuidv4();


            try {

                const user = await UserRegister.findOne({ email: email });

                if (user) {
                    return res.status(200).json({ message: "<h3>User already exists 🙄</h3>" });
                }
                else {

                    const User = await new UserRegister({
                        user_id: userid,
                        fname: fname,
                        lname: lname,
                        email: email,
                        phone: phone,
                        password: password,

                    })

                    try {
                        User.save();
                        return res.status(200).send({ message: "Registration Successful 😊" });

                    } catch (err) {
                        console.log(err);
                        return res.status(400).send({ message: " <h3> Error in adding the User </h3> 😓" });
                    }

                }

            }
            catch (err) {
                console.log(err);
            }
        }
        ,
        async signin(req, res, next) {

            const { email, password } = req.body;

            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    return res.status(200).send({ message: info.message });
                }
                if (!user) {
                    return res.status(200).send({ message: info.message });
                }

                req.logIn(user, (err) => {
                    if (err) {

                        return res.status(200).send({ message: info.message });
                    }


                    res.cookie('sessionId', user.user_id, { sameSite: 'none', maxAge: 60 * 60 * 1000, httpOnly: true });
                    res.status(200).send({ message: "Login Success 😊", user: user.user_id });


                })

            })(req, res, next);

        }
        ,


        async logout(req, res, next) {
            req.logout(function (err) {
                if (err) {
                    return next(err);
                }



            });
        },

        async edit(req, res) {

            const { fname, lname, email, phone, about, linkedin, github, facebook, twitter, instagram, website, education, occupation } = req.body;


            const userPres = await UserRegister.find({ email: email });


            try {
                await UserRegister.findOneAndUpdate({ _id: userPres[0]._id }, { fname, lname, email, phone, about, linkedin, github, facebook, twitter, education, occupation, instagram, website });

                res.status(200).send({ message: "Edit Success 😊" });

            }
            catch (err) {
                console.log(err);
            }

        },


        async getdetails(req, res) {

            const userid = req.body.userid;


            try {


                const user = await UserRegister.find({ user_id: userid });


                return res.status(201).json(user);
            }
            catch (err) {
                console.log(err);
            }

        }
        ,
        async changepass(req, res) {

            const { pass, email } = req.body;
            console.log(req.body)


            const userPres = await UserRegister.find({ email: email });

            try {
                await UserRegister.findOneAndUpdate({ _id: userPres[0]._id }, { password: pass });
                console.log("pass updated")

                res.status(200).send({ message: "Password Changed 😊" });

            }
            catch (err) {
                console.log(err);
            }

        },
        async editUserInrests(req, res) {
            const { UserIntr, email } = req.body;
            console.log(UserIntr);
            console.log(email);


            const userPres = await UserRegister.find({ email: email });

            try {
                await UserRegister.findOneAndUpdate({ _id: userPres[0]._id }, { Intrests: UserIntr });
                console.log("Intrests  updated")


                res.status(200).send({ message: "Intrests Updated 😊" });


            }
            catch (err) {
                console.log(err);
            }


        }

    }


}

export default UserController;

