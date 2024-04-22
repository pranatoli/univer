const { Students, Profile, Teachers, Courses, Grades, StudentCourses, Admins } = require('../models/_models');

class StudentsServices {
    async getStudents() {
        return await Students.findAll();
    }
    async getStudentById(id) {
        const data = await Students.findByPk(id)
        return data === null ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }
    async getStudentCourse(studId) {
        const valid = await Students.findByPk(studId);
        const data = await Students.findAll({
            attributes: ["id"],
            include: {
                model: Courses,
                through: {
                    attributes: [],
                }
            },
            where: { id: studId }
        });
        return valid === null ? { status: 400, send: "данные не найдены" } : { status: 200, send: data };
    }
    async updateStudent(body, id) {
        const student = await Students.findByPk(id);
        if (student === null) {
            return { status: 400, send: 'неверный идентификатор' }
        }
        await Students.update(body, {
            where: {
                id: id,
            }
        })
        const updated = await Students.findByPk(id);
        return { status: 200, send: updated }
    }
    async createStudent(body) {
        return await Students.create(body);
    }
    async addCourseStudent(body) {
        return await StudentCourses.create(body);
    }
    async deleteStudent(id) {
        const data = await Students.destroy({ where: { id: id } })
        return data == 1 ? { status: 200, send: "данные удаленыы из базы" } : { status: 400, send: "данных с указаным ID не сущетвует" };
    }
};

module.exports = new StudentsServices();