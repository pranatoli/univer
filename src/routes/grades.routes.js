const express = require('express');
const router = express.Router();
const GradesControllers = require('../controllers/grades.controllers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

/**
 * @swagger
 *  /grades/student/{student_id}:
 *      get:
 *        tags: 
 *            - Grades
 *        summary:
 *            Получение всех оценок студента
 *        description:
 *            Получение всех оценок по ID-студента
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
router.get('/student/:student_id', GradesControllers.getGradeStudent);

/**
 * @swagger
 *  /grades/student/{student_id}/course/{course_id}:
 *      get:
 *        tags: 
 *            - Grades
 *        summary:
 *            Получение всех оценок студента
 *        description:
 *            Получение всех оценок по ID-студента
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
router.get('/student/:student_id/course/:course_id', GradesControllers.getGradeOnCourse);

/**
 *@swagger
 *  /grades:
 *    post:
 *      tags:
 *         - Grades
 *      summary: Добавление нового учителя 
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
 *      Teacher:
 *        description: Пример тела запроса, указываем ID-студента,  ID-курса, оценку
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                teacher_id:
 *                  type: integer
 *                  example: 1
 *                  description: идентификатор преподавателя
 *                course_id:
 *                  type: integer
 *                  example: 1
 *                  description: идентификатор курса
 *                grade:
 *                  type: integer
 *                  example: 7 
 *                  description: оценка
 */
router.post('/', GradesControllers.createGrade);

/**
 *@swagger
 *  /grades/{id}:
 *    patch:
 *      tags:
 *         - Grades
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
router.patch('/:id', GradesControllers.updateGrade);

/**
 *@swagger
 *  /grades/{id}:
 *    delete:
 *      tags:
 *         - Grades
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
router.delete('/:id', GradesControllers.deleteGrade);

module.exports = router;