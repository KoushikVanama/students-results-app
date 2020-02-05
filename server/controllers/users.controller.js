const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const config = require('../config.json');

const users = [{ id: 1, username: 'sai', password: 'saikoushik', firstName: 'Sai', lastName: 'Koushik' }];

router.post('/authenticate', (req, res, next) => {
    authenticateUser(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
});

async function authenticateUser({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

module.exports = router;
