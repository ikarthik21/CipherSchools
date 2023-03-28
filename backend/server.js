import dotenv from 'dotenv'; dotenv.config();
import express from "express";
import router from './Routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';




const app = express();
const PORT = 3100;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieParser());





// Mongo Connection //

const url = process.env.MONGO_CONNECTION_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });

// Mongo Connection //



// Session Config //

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_CONNECTION_URL
    }),

    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },

}))

// Session Config //



// Passport Config //

import InitPass from './app/Config/Passport.js';
InitPass(passport);
app.use(passport.initialize());
app.use(passport.session());

// Passport Config //




app.use('/', router);

app.listen(PORT, (req, res) => {
    console.log(`Backend is listening on port ${PORT}`);

})




