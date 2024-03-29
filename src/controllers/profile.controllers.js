const ProfilesServices = require('../services/profile.services');
const Sentry = require("@sentry/node");
const { validationResult } = require('express-validator');

class ProfilesControllers {
    async getProfiles(req, res) {
        try {
            res.status(200).send('sdfsdfsdf');
        } catch (err) {
            Sentry.captureException(err);
            res.status(400).json({
                err: err.message
            })
        }
    }
    async getProfileById(req, res) { }
    async updateProfile(req, res) { }
    async createProfile(req, res) { }
    async deleteProfile(req, res) { }
};

module.exports = new ProfilesControllers();