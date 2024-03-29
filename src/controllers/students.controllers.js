const StudentsServices = require('../services/studenst.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class StudentsControllers {
    async getStudents(req, res) {
        try {
            res.status(200).send('sdfsdfsdf');
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getStudentById(req, res) { }
    async updateStudent(req, res) { }
    async createStudent(req, res) { }
    async deleteStudent(req, res) { }
};

module.exports = new StudentsControllers();