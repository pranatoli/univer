const CoursesServices = require('../services/courses.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class CoursesControllers {
    async getCourses(req, res) {
        try {
            res.status(200).send('sdfsdfsdf');
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getCourseById(req, res) { }
    async updateCourse(req, res) { }
    async createCourse(req, res) { }
    async deleteCourse(req, res) { }
};

module.exports = new CoursesControllers();