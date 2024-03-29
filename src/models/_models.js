const Students = require('./students');
const Profile = require('./profile');
const Teachers = require('./teachers');
const Courses = require('./courses');
const Grades = require('./grades');
const StudentCourses = require('./studentCourses');
const Admins = require('./admins');

// (async () => {
//     try {
//         await Students.sync({ force: true })
//         console.log('---------> Students model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await Profile.sync({ force: true })
//         console.log('---------> Profile model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await Teachers.sync({ force: true })
//         console.log('---------> Teachers model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await Courses.sync({ force: true })
//         console.log('---------> Courses model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await Grades.sync({ force: true })
//         console.log('---------> Grades model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await StudentCourses.sync({ force: true })
//         console.log('---------> StudentCourses model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         await Admins.sync({ force: true })
//         console.log('---------> Admins model created <---------')
//     } catch (error) {
//         console.error(error)
//     }
// })()

// ------- Associations -------

Students.hasOne(Profile, { foreignKey: 'student_id' })
Profile.belongsTo(Students)

Students.hasMany(Grades, { foreignKey: 'student_id' })
Grades.belongsTo(Students)

Teachers.hasMany(Courses, { foreignKey: 'teacher_id' })
Courses.belongsTo(Teachers)

Students.belongsToMany(Courses, { through: StudentCourses })
Courses.belongsToMany(Students, { through: StudentCourses })

module.exports = {
    Students,
    Profile,
    Teachers,
    Courses,
    Grades,
    StudentCourses,
    Admins
}