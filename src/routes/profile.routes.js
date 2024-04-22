const express = require('express');
const router = express.Router();
const ProfilesControllers = require('../controllers/profile.controllers');
const { authenticateToken } = require('../helpers/helpers');
const { body, query, param, matchedData, validationResult } = require('express-validator');

const validationBody = [
    body('first_name').notEmpty().isString().trim().escape(),
    body('last_name').notEmpty().isString().trim().escape(),
    body('date_of_birth').notEmpty().isDate().trim().escape(),
    body('adress').notEmpty().isString().trim().escape(),
    body('studentId').notEmpty().isInt().trim().escape(),
];

const validationParamId = [
    param('id').notEmpty().isInt().withMessage('ID not correct')
]

/**
 * @swagger
 *  /profile:
 *      get:
 *        tags: 
 *            - Profiles
 *        security: [ { bearerAuth: [] } ]
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
router.get('/', authenticateToken, ProfilesControllers.getProfiles);

/**
 * @swagger
 *  /profile/{id}:
 *      get:
 *        tags: 
 *            - Profiles
 *        security: [ { bearerAuth: [] } ]
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
router.get('/:id', authenticateToken, validationParamId, ProfilesControllers.getProfileById);

/**
 *@swagger
 *  /profile:
 *    post:
 *      tags:
 *         - Profiles
 *      security: [ { bearerAuth: [] } ]
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
 *                studentId:
 *                  type: integer
 *                  example: 1
 *                  description: идентификатор студента
 */
router.post('/', authenticateToken, ProfilesControllers.createProfile);

/**
 *@swagger
 *  /profile/{id}:
 *    patch:
 *      tags:
 *         - Profiles
 *      security: [ { bearerAuth: [] } ]
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
router.patch('/:id', authenticateToken, validationParamId, ProfilesControllers.updateProfile);

/**
 *@swagger
 *  /profile/{id}:
 *    delete:
 *      tags:
 *         - Profiles
 *      security: [ { bearerAuth: [] } ]
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
router.delete('/:id', authenticateToken, validationParamId, ProfilesControllers.deleteProfile);

module.exports = router;