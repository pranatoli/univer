const express = require('express');
const router = express.Router();
const RegisterControllers = require('../controllers/register.controllers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('login').notEmpty().isString().trim().escape(),
    body('password').notEmpty().isString().trim().escape().isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
    })
        .withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"),
];

/**
 * @swagger
 *  /register:
 *      post:
 *        tags: 
 *            - Register
 *        summary:
 *           Регистрация
 *        description:
 *           Регистрация для дальнейшей работы 
 *        requestBody:
 *          $ref: "#/components/requestBodies/User"
 *        responses:
 *          200: 
 *            description: A successful response
 *          400:
 *            description: Login is already in use
 * components:
 *    requestBodies:
 *      User:
 *        description: User object
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                login:
 *                  type: string
 *                  example: Klen
 *                  description: Username
 *                password:
 *                  type: string
 *                  example: 1q2w3e4r_
 *                  description: User password 
 */
router.post('/', validationBody, RegisterControllers.registerUser)

module.exports = router;