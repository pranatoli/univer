const express = require('express');
const router = express.Router();
const TeachersControllers = require('../controllers/teachers.controllers');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../helpers/helpers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('first_name').notEmpty().isString().trim().escape(),
    body('last_name').notEmpty().isString().trim().escape(),
    body('email').notEmpty().isString().isEmail().withMessage('Not a valid e-mail address').escape(),
];

const validationParamId = [
    param('id').notEmpty().isInt().withMessage('ID not correct')
]

/**
 * @swagger
 *  /teachers:
 *      get:
 *        tags: 
 *            - Teachers
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение списка всех учителей
 *        description:
 *            Получение списка всех учителей 
 *        responses:
 *          200: 
 *            description: A successful response, get all teachers
 *          400:
 *            description: bad request 
 */
router.get('/', authenticateToken, TeachersControllers.getTeachers);

/**
 * @swagger
 *  /teachers/{id}:
 *      get:
 *        tags: 
 *            - Teachers
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение данных учителя по ID
 *        description:
 *            Получение данных учителя по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID учителя, данные которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get teacher
 *          400:
 *            description: bad request 
 */
router.get('/:id', authenticateToken, validationParamId, TeachersControllers.getTeacherById);

/**
 * @swagger
 *  /teachers/{id}/courses:
 *      get:
 *        tags: 
 *            - Teachers
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение курсов учителя
 *        description:
 *            Получение курсов учителя по ID-учителя 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID учителя, курсы которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get courses
 *          400:
 *            description: bad request 
 */
router.get('/:id/courses', authenticateToken, validationParamId, TeachersControllers.getTeachersCourse);

/**
 * @swagger
 *  /teachers/{id}/students:
 *      get:
 *        tags: 
 *            - Teachers
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение студентов учителя
 *        description:
 *            Получение студентов учителя по ID-учителя 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID учителя, студентов которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get students
 *          400:
 *            description: bad request 
 */
router.get('/:id/students', authenticateToken, validationParamId, TeachersControllers.getStudentsTeacher);

/**
 *@swagger
 *  /teachers:
 *    post:
 *      tags:
 *         - Teachers
 *      security: [ { bearerAuth: [] } ]
 *      summary: Добавление нового учителя 
 *      description: Добавление нового учителя, указываем имя, фамилию, email
 *      requestBody:
 *        $ref: "#/components/requestBodies/Teacher"
 *      responses:
 *          200: 
 *            description: Teacher created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Teacher:
 *        description: Пример тела запроса, указываем имя, фамилию, email
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                first_name:
 *                  type: string
 *                  example: Дмитрий
 *                  description: имя учителя
 *                last_name:
 *                  type: string
 *                  example: Сидоров 
 *                  description: фамилия учителя
 *                email:
 *                  type: string
 *                  example: mail@mail.com 
 *                  description: email учителя
 */
router.post('/', authenticateToken, validationBody, TeachersControllers.createTeacher);

/**
 *@swagger
 *  /teachers/{id}:
 *    patch:
 *      tags:
 *         - Teachers
 *      security: [ { bearerAuth: [] } ]
 *      summary: Обновление данных учителя
 *      description: Обновление данных учителя
 *      requestBody:
 *        $ref: "#/components/requestBodies/Teacher"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID учителя, информацию которого нужно обновить
 *          required: true
 *      responses:
 *          200: 
 *            description: Teacher is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', authenticateToken, validationBody, validationParamId, TeachersControllers.updateTeacher);

/**
 *@swagger
 *  /teachers/{id}:
 *    delete:
 *      tags:
 *         - Teachers
 *      security: [ { bearerAuth: [] } ]
 *      summary: Удаление данных учителя 
 *      description: Удаление данных учителя по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID учителя, данные которого надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: Teacher is deleted
 *          400:
 *            description: bad request
 */
router.delete('/:id', authenticateToken, validationParamId, TeachersControllers.deleteTeacher);

module.exports = router;