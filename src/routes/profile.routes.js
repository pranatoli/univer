const express = require('express');
const router = express.Router();
const ProfilesControllers = require('../controllers/profile.controllers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

/**
 * @swagger
 *  /profile:
 *      get:
 *        tags: 
 *            - Profiles
 *        summary:
 *            Получение списка всех профилей
 *        description:
 *            Получение списка всех профилей 
 *        responses:
 *          200: 
 *            description: A successful response, get all profiles
 *          400:
 *            description: bad request 
 */
router.get('/', ProfilesControllers.getProfiles);

/**
 * @swagger
 *  /profile/{id}:
 *      get:
 *        tags: 
 *            - Profiles
 *        summary:
 *            Получение данных профиля по ID
 *        description:
 *            Получение данных профиля по ID 
 *        parameters:
 *            - name: id
 *              in: path
 *              description: ID профиля данные, которого нужно получить 
 *              required: true
 *        responses:
 *          200: 
 *            description: A successful response, get profiles
 *          400:
 *            description: bad request 
 */
router.get('/:id', ProfilesControllers.getProfileById);

/**
 *@swagger
 *  /profile:
 *    post:
 *      tags:
 *         - Profiles
 *      summary: Добавление нового студента 
 *      description: Добавление нового профиля, указываем имя, фамилию, дату рождения. адрес, ID-студента к которому относится профиль
 *      requestBody:
 *        $ref: "#/components/requestBodies/Profile"
 *      responses:
 *          200: 
 *            description: Profile created
 *          400:
 *            description: bad request
 * components:
 *    requestBodies:
 *      Profile:
 *        description: Пример тела запроса профиля, указываем имя, фамилию, дату рождения. адрес, ID-студента к которому относится профиль
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                first_name:
 *                  type: string
 *                  example: Иван
 *                  description: имя студента
 *                last_name:
 *                  type: string
 *                  example: Иванов
 *                  description: фамилия студента
 *                date_of_birth:
 *                  type: date
 *                  example: 1990-10-13
 *                  description: дата рождения
 *                adress:
 *                  type: string
 *                  example: Беларусь, Витебск, Ленина 23-5
 *                  description: адрес студента
 *                student_id:
 *                  type: integer
 *                  example: 1
 *                  description: идентификатор студента
 */
router.post('/', ProfilesControllers.createProfile);

/**
 *@swagger
 *  /profile/{id}:
 *    patch:
 *      tags:
 *         - Profiles
 *      summary: Обновление профиля 
 *      description: Обновление информации профиля 
 *      requestBody:
 *        $ref: "#/components/requestBodies/Profile"
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID профиля, информацию которого нужно обновить
 *          required: true
 *      responses:
 *          200: 
 *            description: Profile is update
 *          400:
 *            description: bad request
 */
router.patch('/:id', ProfilesControllers.updateProfile);

/**
 *@swagger
 *  /profile/{id}:
 *    delete:
 *      tags:
 *         - Profiles
 *      summary: Удаление профиля 
 *      description: Удаление профиля по ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID профиля, которого надо удалить
 *          required: true
 *      responses:
 *          200: 
 *            description: Profile is deleted
 *          400:
 *            description: bad request
 */
router.delete('/:id', ProfilesControllers.deleteProfile);

module.exports = router;