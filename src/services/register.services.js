const { Students, Profile, Teachers, Courses, Grades, StudentCourses, Admins } = require('../models/_models');
const bcrypt = require('bcrypt');

class RegisterServices {
    async registration(body) {
        console.log('services');
        const { login, password } = body;
        const hashPass = bcrypt.hashSync(password, 3);
        const user = { login, password: hashPass }
        await Admins.create(user)

        return body;
    }
};

module.exports = new RegisterServices();