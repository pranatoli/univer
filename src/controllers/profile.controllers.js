const ProfilesServices = require('../services/profile.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class ProfilesControllers {
    async getProfiles(req, res) {
        try {
            const profiles = await ProfilesServices.getProfiles();
            res.status(200).send(profiles);
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getProfileById(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await ProfilesServices.getProfileById(id);
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
    async updateProfile(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const id = req.params.id
                const data = await ProfilesServices.updateProfile(body, id);
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
    async createProfile(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const body = req.body
                const data = await ProfilesServices.createProfile(body);
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

    async deleteProfile(req, res) {
        try {
            const result = validationResult(req);
            if (result.isEmpty()) {
                const id = req.params.id
                const data = await ProfilesServices.deleteProfile(id);
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

module.exports = new ProfilesControllers();