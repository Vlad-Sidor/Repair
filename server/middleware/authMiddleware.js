const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    
    if (req.method === "GET") {
        next()
    }

    if (req.method === "POST") {
        next()
    }

    if (req.method === "PUT") {
        next()
    }
};
