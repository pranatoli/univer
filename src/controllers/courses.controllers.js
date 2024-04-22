const CoursesServices = require('../services/courses.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class CoursesControllers {
    async getCourses(req, res) {
        try {
            const courses = await CoursesServices.getCourses();
            res.status(200).send(courses);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getCourseById(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await CoursesServices.getCourseById(id);
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
    async getStudentsCourse(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await CoursesServices.getStudentsCourse(id);
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

    async updateCourse(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const id = req.params.id
                const data = await CoursesServices.updateCourse(body, id);
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
    async createCourse(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const data = await CoursesServices.createCourse(body);
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

    async deleteCourse(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await CoursesServices.deleteCourse(id);
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

module.exports = new CoursesControllers();