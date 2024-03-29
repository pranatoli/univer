const express = require('express');
const router = express.Router();
const StudentsControllers = require('../controllers/students.controllers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

/**
 * @swagger
 *  /students:
 *      get:
 *        tags: 
 *            - Students
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
router.get('/', StudentsControllers.getStudents);

/**
 * @swagger
 *  /students/{id}:
 *      get:
 *        tags: 
 *            - Students
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
router.get('/:id', StudentsControllers.getStudentById);

/**
 *@swagger
 *  /students:
 *    post:
 *      tags:
 *         - Students
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
 *      Students:
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
router.post('/', StudentsControllers.createStudent);

/**
 *@swagger
 *  /students/{id}:
 *    patch:
 *      tags:
 *         - Students
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
router.patch('/:id', StudentsControllers.updateStudent);

/**
 *@swagger
 *  /students/{id}:
 *    delete:
 *      tags:
 *         - Students
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
router.delete('/:id', StudentsControllers.deleteStudent);


module.exports = router;