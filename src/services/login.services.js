require('dotenv').config();
const { Students, Profile, Teachers, Courses, Grades, StudentCourses, Admins } = require('../models/_models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class LoginServices {
    async login(req) {
        const { login, password } = req;
        const user = await Admins.findOne({ where: { login: login } });
        if (user != null) {
            const isPassEquals = bcrypt.compareSync(password, user.password);
            if (isPassEquals) {
                const token = jwt.sign({ userLogin: login }, process.env.ACCES_TOKEN_SECRET, { noTimestamp: true });
                return { status: 200, send: token };
            } else {
                return { status: 400, send: 'incorrect password' };
            }
        } else {
            return { status: 400, send: 'User with such an email is not registered' };
        }
    }
};

module.exports = new LoginServices();