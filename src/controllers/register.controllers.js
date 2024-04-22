const RegisterServices = require('../services/register.services');
const Sentry = require("@sentry/node");
const { validationResult, body } = require('express-validator');
const { Students, Profile, Teachers, Courses, Grades, StudentCourses, Admins } = require('../models/_models');


class RegisterControllers {
    async registerUser(req, res) {
        try {
            console.log('controllers');
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body;
                const users = await Admins.findAll();
                let user;
                if (users.length == 0) {
                    user = await RegisterServices.registration(body);
                } else {
                    let findUser = await Admins.findOne({ where: { login: body.login } });
                    console.log(findUser);
                    if (findUser == null) {
                        user = await RegisterServices.registration(body);
                    } else {
                        res.status(400).send("user with this login is registered");
                    }
                }
                res.status(200).send(user)
            } else {
                res.status(400),
                    res.send({
                        errors: result.array()
                    })
            }
        } catch (error) {
            Sentry.captureException(error);
        }
    }
};

module.exports = new RegisterControllers();