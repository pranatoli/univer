const LoginServices = require('../services/login.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class LoginControllers {
    async loginUser(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const user = await LoginServices.login(req.body);
                res.status(user.status).send(user.send)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (error) {
            Sentry.captureException(error);
        }
    }
};

module.exports = new LoginControllers();