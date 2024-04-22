const GradesServices = require('../services/grades.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class GradesControllers {
    async getGradeStudent(req, res) {
        try {
            console.log(req.params.student_id);
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.student_id
                const data = await GradesServices.getGradeStudent(id);
                res.status(data.status).send(data.send);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getGradeOnCourse(req, res) {
        try {
            const courseId = req.params.course_id;
            const studentId = req.params.student_id;
            const data = await GradesServices.getGradeOnCourse(studentId, courseId);
            res.status(data.status).send(data.send);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async createGrade(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const data = await GradesServices.createGrade(body);
                res.status(200).send(data);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async updateGrade(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const id = req.params.id
                const data = await GradesServices.updateGrade(body, id);
                res.status(data.status).send(data.send);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }

    async deleteGrade(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await GradesServices.deleteGrade(id);
                res.status(data.status).send(data.send);
            } else {
                res.status(400);
                res.send({
                    errors: result.array()
                })
            }
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
};

module.exports = new GradesControllers();