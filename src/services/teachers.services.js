
const { Students, Profile, Teachers, Courses, Grades, StudentCourses, Admins } = require('../models/_models');

class TeachersServices {
    async getTeachers() {
        return await Teachers.findAll();
    }
    async getTeacherById(id) {
        const data = await Teachers.findByPk(id)
        return data === null ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }
    async updateTeacher(body, id) {
        const teacher = await Teachers.findByPk(id);
        if (teacher === null) {
            return { status: 400, send: 'неверный идентификатор' }
        }
        await Teachers.update(body, {
            where: {
                id: id,
            }
        })
        const updated = await Teachers.findByPk(id);
        return { status: 200, send: updated }
    }
    async getTeachersCourse(id) {
        const data = await Courses.findAll({ where: { teacherId: id } });
        return data.length === 0 ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }
    async createTeacher(body) {
        return await Teachers.create(body);
    }
    async deleteTeacher(id) {
        const data = await Teachers.destroy({ where: { id: id } })
        return data == 1 ? { status: 200, send: "данные удаленыы из базы" } : { status: 400, send: "данных с указаным ID не сущетвует" };
    }
    async getStudentsTeacher(teacherId) {
        const data = await Courses.findAll({
            where: { teacherId: teacherId }
        })
        const courseID = data.map(item => item.id);
        const students = await Courses.findAll({
            attributes: ["course_name"],
            include: {
                model: Students,
                through: {
                    attributes: [],
                },
            },
            where: { id: [...courseID] }
        });
        return data.length === 0 ? { status: 400, send: 'данных не существует' } : { status: 200, send: students };
    }
    async getCourseByTeacher(id) {
        const data = await Courses.findAll({ where: { teacherId: id } })
        return data === null ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }

};

module.exports = new TeachersServices();