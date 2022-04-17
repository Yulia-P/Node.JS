const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    session = require("express-session"),
    passport = require("passport"),
    localStrategy = require("passport-local").Strategy,
    users = require("./users").Users;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "123" }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(
    new localStrategy((username, password, done) => {
        for (let user of users) {
            if (username === user.users && password === user.password)
                return done(null, user);
        }
        return done(null, false, { message: "Wrong" });

    })
);

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/resource",
        failureRedirect: "/login",
    })
);

app.get(
    "/resource",
    (req, res, next) => {
        if (req.user) next();
        else res.status(401).send("Not authorized");
    },
    (req, res) => {
        res.send(`resource   ${req.user.users}    ${req.user.password}`);
    }
);

app.get("/logout", (req, res) => {
    req.logout();
    res.send(`logout`);
});

app.use(function (request, response) {
    response.sendStatus(404);
});

app.listen(3000);