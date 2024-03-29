const TeachersServices = require('../services/teachers.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class TeachersControllers {
    async getTeachers(req, res) {
        try {
            res.status(200).send('sdfsdfsdf');
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getTeacherById(req, res) { }
    async updateTeacher(req, res) { }
    async createTeacher(req, res) { }
    async deleteTeacher(req, res) { }
};

module.exports = new TeachersControllers();