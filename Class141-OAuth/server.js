import { config } from "dotenv"
config();

import express from "express"
import morgan from "morgan";

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use(passport.initialize())
app.use(morgan("dev"))

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (_, __, profile, done) => {
    return done(null, profile);
  }
))


app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
)
app.get("/auth/google/callback",
  passport.authenticate("google", 
    { failureRedirect: "/", session: false }),
  (req, res) => {
    console.log(req.user)
    res.send("Google authentication successful")
  }
)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})