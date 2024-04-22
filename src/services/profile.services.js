const { Students, Profile, Teachers, Courses, Grades, StudentCourses, Admins } = require('../models/_models');

class ProfilesServices {
    async getProfiles() {
        return await Profile.findAll();
    }
    async getProfileById(id) {
        const data = await Profile.findByPk(id)
        return data === null ? { status: 400, send: 'данных не существует' } : { status: 200, send: data };
    }
    async updateProfile(body, id) {
        const profile = await Profile.findByPk(id);
        if (profile === null) {
            return { status: 400, send: 'неверный идентификатор' }
        }
        await Profile.update(body, {
            where: {
                id: id,
            }
        })
        const updated = await Profile.findByPk(id);
        return { status: 200, send: updated }
    }
    async createProfile(body) {
        return await Profile.create(body);
    }
    async deleteProfile(id) {
        const data = await Profile.destroy({ where: { id: id } })
        return data == 1 ? { status: 200, send: "данные удаленыы из базы" } : { status: 400, send: "данных с указаным ID не сущетвует" };
    }
};

module.exports = new ProfilesServices();