const express = require('express');
const router = express.Router();
const CoursesControllers = require('../controllers/courses.controllers');
const { authenticateToken } = require('../helpers/helpers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('course_name').notEmpty().isString().trim().escape(),
    body('description').notEmpty().isString().trim().escape(),
    body('teacherId').notEmpty().isInt().escape(),
];

const validationParamId = [
    param('id').notEmpty().isInt().withMessage('ID not correct')
];

/**
 * @swagger
 *  /courses:
 *      get:
 *        tags: 
 *            - Courses
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение списка всех курсов
 *        description:
 *            Получение списка всех курсов 
 *        responses:
 *          200: 
 *            description: A successful response, get all courses
 *          400:
 *            description: bad request 
 */
router.get('/', authenticateToken, CoursesControllers.getCourses);

/**
 * @swagger
 *  /courses/{id}:
 *      get:
 *        tags: 
 *            - Courses
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение курса по ID
 *        description:
 *            Получение курса по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID курса который нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get course
 *          400:
 *            description: bad request 
 */
router.get('/:id', authenticateToken, validationParamId, CoursesControllers.getCourseById);

/**
 * @swagger
 *  /courses/{id}/students:
 *      get:
 *        tags: 
 *            - Courses
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение студентов курса
 *        description:
 *            Получение студентов курса по ID-курса
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID курса, студентов которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get students 
 *          400:
 *            description: bad request 
 */
router.get('/:id/students', authenticateToken, validationParamId, CoursesControllers.getStudentsCourse);

/**
 *@swagger
 *  /courses:
 *    post:
 *      tags:
 *         - Courses
 *      security: [ { bearerAuth: [] } ]
 *      summary: Добавление нового курса 
 *      description: Добавление нового курса, указываем название курса, описание курса, идентификатор преподавателя
 *      requestBody:
 *        $ref: "#/components/requestBodies/Course"
 *      responses:
 *          200: 
 *            description: Course created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Course:
 *        description: Пример тела запроса, указываем название курса, описание курса, идентификатор преподавателя
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                course_name:
 *                  type: string
 *                  example: Front-end
 *                  description: название курса
 *                description:
 *                  type: string
 *                  example: Курс по разработке фронта
 *                  description: описание курса
 *                teacherId:
 *                  type: integer
 *                  example: 1
 *                  description: идентификатор преподавателя
 */
router.post('/', authenticateToken, validationBody, CoursesControllers.createCourse);

/**
 *@swagger
 *  /courses/{id}:
 *    patch:
 *      tags:
 *         - Courses
 *      security: [ { bearerAuth: [] } ]
 *      summary: Обновление курса 
 *      description: Обновление информации курса 
 *      requestBody:
 *        $ref: "#/components/requestBodies/Course"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID курса, информацию которого нужно обновить
 *          required: true
 *      responses:
 *          200: 
 *            description: Course is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', authenticateToken, validationParamId, validationBody, CoursesControllers.updateCourse);

/**
 *@swagger
 *  /courses/{id}:
 *    delete:
 *      tags:
 *         - Courses
 *      security: [ { bearerAuth: [] } ]
 *      summary: Удаление курса 
 *      description: Удаление курса по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID курса, который надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: Course is deleted
 *          400:
 *            description: bad request
 */
router.delete('/:id', authenticateToken, validationParamId, CoursesControllers.deleteCourse);


module.exports = router;