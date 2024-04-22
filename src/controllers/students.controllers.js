const StudentsServices = require('../services/studenst.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class StudentsControllers {
    async getStudents(req, res) {
        try {
            const courses = await StudentsServices.getStudents();
            res.status(200).send(courses);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getStudentById(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await StudentsServices.getStudentById(id);
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
    async getStudentCourse(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await StudentsServices.getStudentCourse(id);
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
    async createStudent(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const data = await StudentsServices.createStudent(body);
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
    async addCourseStudent(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const data = await StudentsServices.addCourseStudent(body);
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
    async updateStudent(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const id = req.params.id
                const data = await StudentsServices.updateStudent(body, id);
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
    async deleteStudent(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await StudentsServices.deleteStudent(id);
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

module.exports = new StudentsControllers();