const { Students, Profile, Teachers, Courses, Grades, StudentCourses, Admins } = require('../models/_models');

class GradesServices {
    async getGradeStudent(id) {
        const data = await Grades.findAll({ where: { studentId: id } });
        let midleGrade = 0
        if (data.length !== 0) {
            midleGrade = data.reduce((acc, item) => acc + item.grade, 0) / data.length;
            data.push({ middleGrade: midleGrade })
        }
        return data.length === 0 ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }

    async getGradeOnCourse(studentId, courseId) {
        const data = await Grades.findAll({
            where: {
                studentId: studentId,
                courseId: courseId,
            }
        })
        let midleGrade = 0
        if (data.length !== 0) {
            midleGrade = data.reduce((acc, item) => acc + item.grade, 0) / data.length;
            data.push({ middleGrade: midleGrade })
        }
        return data.length === 0 ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }

    async createGrade(body) {
        return await Grades.create(body);
    }

    async updateGrade(body, id) {
        const grade = await Grades.findByPk(id);
        if (grade === null) {
            return { status: 400, send: 'неверный идентификатор' }
        }
        await Grades.update(body, {
            where: {
                id: id,
            }
        })
        const updated = await Grades.findByPk(id);
        return { status: 200, send: updated }
    }

    async deleteGrade(id) {
        const data = await Grades.destroy({ where: { id: id } });
        return data == 1 ? { status: 200, send: "данные удаленыы из базы" } : { status: 400, send: "данных с указаным ID не сущетвует" };
    }

};

module.exports = new GradesServices();