const GradesServices = require('../services/grades.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class GradesControllers {
    async getGradeStudent(req, res) {
        try {
            const studentId = req.params.student_id;
            res.status(200).send(`student_id: ${studentId}`);
        } catch (err) {
            Sentry.captureException(err); s
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getGradeOnCourse(req, res) {
        try {
            const courseId = req.params.course_id;
            const studentId = req.params.student_id;

            res.status(200).send(`student_id: ${studentId} , course_id: ${courseId}`);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async updateGrade(req, res) { }
    async createGrade(req, res) { }
    async deleteGrade(req, res) { }
};

module.exports = new GradesControllers();