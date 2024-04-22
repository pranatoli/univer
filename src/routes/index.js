const express = require('express');
const router = express.Router();
const StudentsRoutes = require('./studenst.routes');
const ProfileRoutes = require('./profile.routes');
const TeachersRoutes = require('./teachers.routes');
const CoursesRoutes = require('./courses.routes');
const GradesRoutes = require('./grades.routes');
const AdminRoutes = require('./login.routes');
const RegisterRoutes = require('./register.routes');

router.use('/students', StudentsRoutes);
router.use('/profile', ProfileRoutes);
router.use('/grades', GradesRoutes);
router.use('/teachers', TeachersRoutes);
router.use('/courses', CoursesRoutes);
router.use('/login', AdminRoutes);
router.use('/register', RegisterRoutes)

module.exports = router; 