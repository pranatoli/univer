const { Students, Profile, Teachers, Courses, Grades, StudentCourses, Admins } = require('../models/_models');

class CoursesServices {

    async getCourses() {
        return await Courses.findAll();
    }
    async getCourseById(id) {
        const data = await Courses.findByPk(id)
        return data === null ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }
    async getStudentsCourse(courseId) {
        const data = await Courses.findAll({
            attributes: ["course_name"],
            include: {
                model: Students,
                through: {
                    attributes: [],
                },
            },
            where: { id: courseId }
        })
        return data.length === 0 ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }


    async updateCourse(body, id) {
        const course = await Courses.findByPk(id);
        if (course === null) {
            return { status: 400, send: 'неверный идентификатор' }
        }
        await Courses.update(body, {
            where: {
                id: id,
            }
        })
        const updated = await Courses.findByPk(id);
        return { status: 200, send: updated }
    }
    async createCourse(body) {
        return await Courses.create(body);
    }
    async deleteCourse(id) {
        const data = await Courses.destroy({ where: { id: id } })
        return data == 1 ? { status: 200, send: "данные удаленыы из базы" } : { status: 400, send: "данных с указаным ID не сущетвует" };
    }

};

module.exports = new CoursesServices();