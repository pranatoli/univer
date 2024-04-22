const TeachersServices = require('../services/teachers.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class TeachersControllers {
    async getTeachers(req, res) {
        try {
            const teachers = await TeachersServices.getTeachers();
            res.status(200).send(teachers);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getTeacherById(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await TeachersServices.getTeacherById(id);
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
    async getTeachersCourse(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await TeachersServices.getTeachersCourse(id);
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

    async getStudentsTeacher(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await TeachersServices.getStudentsTeacher(id);
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
    async updateTeacher(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const id = req.params.id
                const data = await TeachersServices.updateTeacher(body, id);
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
    async createTeacher(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const data = await TeachersServices.createTeacher(body);
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
    async deleteTeacher(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await TeachersServices.deleteTeacher(id);
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

module.exports = new TeachersControllers();