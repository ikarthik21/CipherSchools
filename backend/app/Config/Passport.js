import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import UserRegister from '../models/UserSchema.js';

function InitPass(passport) {

    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try {

            const user = await UserRegister.findOne({ email: email });


            if (!user) {
                return done(null, false, { message: "<h3>User doesn't exist <span>😢</span></h3>" });
            }

            const isMatch = await bcrypt.compare(password, user.password);


            if (!isMatch) {
                return done(null, false, { message: "<h3>Invalid credentials <span>😒</span> </h3>" });
            }


            return done(null, user);

        } catch (err) {
            return done(err);
        }
    }));


    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await UserRegister.findById(id);
            const userinfo = {
                username: user.name
            }
            done(null, userinfo);
        } catch (err) {
            done(err);
        }
    });


}


export default InitPass;