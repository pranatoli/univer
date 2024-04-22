const express = require('express');
const router = express.Router();
const LoginControllers = require('../controllers/login.controllers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('login').notEmpty().isString().escape(),
    body('password').notEmpty().isString().trim().escape().isLength({ min: 8 }),
];

/**
 * @swagger
 *  /login:
 *      post:
 *        tags: 
 *            - Login
 *        summary:
 *            Проверка пользователя  
 *        description:
 *            Проверяет, существует ли такой пользователь в системе, проверяет пароль и возвращает токен JWT, если все в порядке. 
 *        requestBody:
 *          $ref: "#/components/requestBodies/UserLogin"
 *        responses:
 *          200: 
 *            description: A successful response, user created, retrn new object
 *          400:
 *            description: Email is already in use
 * components:
 *    requestBodies:
 *      UserLogin:
 *        description: Users email and password
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                login: 
 *                  type: string
 *                  example: Klen
 *                  description: User login
 *                password:
 *                  type: string
 *                  example: 1Q2w3e4r_
 *                  description: User password 
 */
router.post('/', LoginControllers.loginUser)

module.exports = router;