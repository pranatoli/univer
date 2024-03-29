const express = require('express');
const router = express.Router();
const TeachersControllers = require('../controllers/teachers.controllers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

/**
 * @swagger
 *  /teachers:
 *      get:
 *        tags: 
 *            - Teachers
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
router.get('/', TeachersControllers.getTeachers);

/**
 * @swagger
 *  /teachers/{id}:
 *      get:
 *        tags: 
 *            - Teachers
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
router.get('/:id', TeachersControllers.getTeacherById);

/**
 *@swagger
 *  /teachers:
 *    post:
 *      tags:
 *         - Teachers
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
router.post('/', TeachersControllers.createTeacher);

/**
 *@swagger
 *  /teachers/{id}:
 *    patch:
 *      tags:
 *         - Teachers
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
router.patch('/:id', TeachersControllers.updateTeacher);

/**
 *@swagger
 *  /teachers/{id}:
 *    delete:
 *      tags:
 *         - Teachers
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
router.delete('/:id', TeachersControllers.deleteTeacher);

module.exports = router;