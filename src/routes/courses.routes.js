const express = require('express');
const router = express.Router();
const CoursesControllers = require('../controllers/courses.controllers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

/**
 * @swagger
 *  /courses:
 *      get:
 *        tags: 
 *            - Courses
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
router.get('/', CoursesControllers.getCourses);

/**
 * @swagger
 *  /courses/{id}:
 *      get:
 *        tags: 
 *            - Courses
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
router.get('/:id', CoursesControllers.getCourseById);

/**
 *@swagger
 *  /courses:
 *    post:
 *      tags:
 *         - Courses
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
 *                teacher_id:
 *                  type: integer
 *                  example: 1
 *                  description: идентификатор преподавателя
 */
router.post('/', CoursesControllers.createCourse);

/**
 *@swagger
 *  /courses/{id}:
 *    patch:
 *      tags:
 *         - Courses
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
router.patch('/:id', CoursesControllers.updateCourse);

/**
 *@swagger
 *  /courses/{id}:
 *    delete:
 *      tags:
 *         - Courses
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
router.delete('/:id', CoursesControllers.deleteCourse);


module.exports = router;