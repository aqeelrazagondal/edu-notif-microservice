const User = require('./user');
const edu_employee = require('./employee')
const edu_jobs = require('./Jobs')
const Edu_Employer = require('./employer')
const edu_training = require('./trainings')
const edu_service_provider = require('./serviceProvider')
const edu_service = require('./services');
const edu_admin = require('./admin');
const notifications = require('./notifications');
const user_session = require('./userAuth');
const edu_scheduled_notif = require('./scheduledNotif');

const models = {
    User,
    edu_employee,
    edu_jobs,
    Edu_Employer,
    edu_training,
    edu_service_provider,
    edu_service,
    edu_admin,
    user_session,
    notifications,
    edu_scheduled_notif
}
module.exports = models