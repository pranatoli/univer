const express = require('express');
const router = express.Router();
const GradesControllers = require('../controllers/grades.controllers');
const { authenticateToken } = require('../helpers/helpers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('studentId').notEmpty().isInt().escape(),
    body('courseId').notEmpty().isInt().escape(),
    body('grade').notEmpty().isInt().escape(),
];

const validationId = [
    param('id').notEmpty().isInt().withMessage('ID not correct'),
    param('student_id').notEmpty().isInt().withMessage('ID not correct'),
    param('course_id').notEmpty().isInt().withMessage('ID not correct')
];

const validationCourseId = [
    param('course_id').notEmpty().isInt().withMessage('ID not correct')
];
const validationStudId = [
    param('student_id').notEmpty().isInt().withMessage('ID not correct'),
];

/**
 * @swagger
 *  /grades/student/{student_id}:
 *      get:
 *        tags: 
 *            - Grades
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение всех + средней оценки оценок студента
 *        description:
 *            Получение всех оценок + средней оценки по ID-студента
 *        parameters:
 *            - name: student_id
 *              in: path
 *              description: ID студента, оценки которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get students grades
 *          400:
 *            description: bad request 
 */
router.get('/student/:student_id', authenticateToken, validationStudId, GradesControllers.getGradeStudent);

/**
 * @swagger
 *  /grades/student/{student_id}/course/{course_id}:
 *      get:
 *        tags: 
 *            - Grades
 *        security: [ { bearerAuth: [] } ]
 *        summary:
 *            Получение всех оценок + средней оценки студента за определенный курс
 *        description:
 *            Получение всех оценок + средней оценки по ID-студента и ID-курса
 *        parameters:
 *            - name: student_id
 *              in: path
 *              description: ID студента, оценки которого нужно получить 
 *              required: true
 *            - name: course_id
 *              in: path
 *              description: ID курса студента, оценки которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get students grades on course
 *          400:
 *            description: bad request 
 */
router.get('/student/:student_id/course/:course_id', authenticateToken, validationStudId, validationCourseId, GradesControllers.getGradeOnCourse);

/**
 *@swagger
 *  /grades:
 *    post:
 *      tags:
 *         - Grades
 *      security: [ { bearerAuth: [] } ]
 *      summary: Добавление оценки 
 *      description: Добавление новой оценки, указываем ID-студента,  ID-курса, оценку
 *      requestBody:
 *        $ref: "#/components/requestBodies/Grade"
 *      responses:
 *          200: 
 *            description: Teacher created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Grade:
 *        description: Пример тела запроса, указываем ID-студента,  ID-курса, оценку
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                studentId:
 *                  type: integer
 *                  example: 1
 *                  description: идентификатор преподавателя
 *                courseId:
 *                  type: integer
 *                  example: 1
 *                  description: идентификатор курса
 *                grade:
 *                  type: integer
 *                  example: 7 
 *                  description: оценка
 */
router.post('/', authenticateToken, GradesControllers.createGrade);

/**
 *@swagger
 *  /grades/{id}:
 *    patch:
 *      tags:
 *         - Grades
 *      security: [ { bearerAuth: [] } ]
 *      summary: Обновление оценки
 *      description: Обновление оценки
 *      requestBody:
 *        $ref: "#/components/requestBodies/Grade"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID оценки, которую нужно обновить
 *          required: true
 *      responses:
 *          200: 
 *            description: Grade is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', authenticateToken, validationId, GradesControllers.updateGrade);

/**
 *@swagger
 *  /grades/{id}:
 *    delete:
 *      tags:
 *         - Grades
 *      security: [ { bearerAuth: [] } ]
 *      summary: Удаление оценки 
 *      description: Удаление оценки
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID оценки, которую надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: Grade is deleted
 *          400:
 *            description: bad request
 */
router.delete('/:id', authenticateToken, validationId, GradesControllers.deleteGrade);

module.exports = router;