const express = require('express');
const router = express.Router();
const StudentsControllers = require('../controllers/students.controllers');
const { authenticateToken } = require('../helpers/helpers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('email').notEmpty().isString().isEmail().withMessage('Not a valid e-mail address').escape(),
];

const validationAddCourse = [
    body('studentId').notEmpty().isInt().trim().escape(),
    body('courseId').notEmpty().isInt().trim().escape(),
];

const validationParamId = [
    param('id').notEmpty().isInt().withMessage('ID not correct')
]

/**
 * @swagger
 *  /students:
 *      get:
 *        tags: 
 *            - Students
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение списка всех студентов
 *        description:
 *            Получение списка всех студентов 
 *        responses:
 *          200: 
 *            description: A successful response, get all studenst
 *          400:
 *            description: bad request 
 */
router.get('/', authenticateToken, StudentsControllers.getStudents);

/**
 * @swagger
 *  /students/{id}:
 *      get:
 *        tags: 
 *            - Students
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение данных студента по ID
 *        description:
 *            Получение данных студента по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID студента данные, которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get studenst
 *          400:
 *            description: bad request 
 */
router.get('/:id', authenticateToken, validationParamId, StudentsControllers.getStudentById);
/**
 * @swagger
 *  /students/{id}/courses:
 *      get:
 *        tags: 
 *            - Students
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение курсов на которые записан студент
 *        description:
 *            Получение курсов на которые записан студент 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID студента данные, которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get studenst
 *          400:
 *            description: bad request 
 */
router.get('/:id/courses', authenticateToken, validationParamId, StudentsControllers.getStudentCourse);

/**
 *@swagger
 *  /students:
 *    post:
 *      tags:
 *         - Students
 *      security: [ { bearerAuth: [] } ]
 *      summary: Добавление нового студента 
 *      description: Добавление нового студента, указываем email
 *      requestBody:
 *        $ref: "#/components/requestBodies/Student"
 *      responses:
 *          200: 
 *            description: Student created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Student:
 *        description: Пример тела запроса, указываем email
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: lalala@gmail.com
 *                  description: название курса
 */
router.post('/', authenticateToken, validationBody, StudentsControllers.createStudent);

/**
 *@swagger
 *  /students/course:
 *    post:
 *      tags:
 *         - Students
 *      security: [ { bearerAuth: [] } ]
 *      summary: Добавление студента на курс
 *      description: Добавление студента на курс, указываем ID-студента, ID-курса
 *      requestBody:
 *        $ref: "#/components/requestBodies/StudentCourse"
 *      responses:
 *          200: 
 *            description: Student add course
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      StudentCourse:
 *        description: Пример тела запроса, указываем ID-студента, ID-курса
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                studentId:
 *                  type: integer
 *                  example: 1
 *                  description: ID-студента
 *                courseId:
 *                  type: integer
 *                  example: 1
 *                  description: ID-курса
 */
router.post('/course', authenticateToken, validationAddCourse, StudentsControllers.addCourseStudent);

/**
 *@swagger
 *  /students/{id}:
 *    patch:
 *      tags:
 *         - Students
 *      security: [ { bearerAuth: [] } ]
 *      summary: Обновление курса 
 *      description: Обновление информации студента 
 *      requestBody:
 *        $ref: "#/components/requestBodies/Student"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID студента, информацию которого нужно обновить
 *          required: true
 *      responses:
 *          200: 
 *            description: Student is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', authenticateToken, validationParamId, validationBody, StudentsControllers.updateStudent);

/**
 *@swagger
 *  /students/{id}:
 *    delete:
 *      tags:
 *         - Students
 *      security: [ { bearerAuth: [] } ]
 *      summary: Удаление студента 
 *      description: Удаление студента по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID студента, которого надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: Student is deleted
 *          400:
 *            description: bad request
 */
router.delete('/:id', authenticateToken, validationParamId, StudentsControllers.deleteStudent);


module.exports = router;