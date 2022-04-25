const express = require('express');
const passport = require('passport');
const session = require('express-session');

require('./auth');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

const app = express();
app.use(session({ secret: 'google' }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/resource');
    }
);

app.get('/resource', isLoggedIn, (req, res) => {
    res.send(`Resource ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
});

app.use(function (request, response) {
    response.sendStatus(404);
});

app.listen(3000, () => console.log('listening on 3000'));
