const model = require('../../model/index');
const { sendFBNotificationBulkNA } = require('../../functions/common/notifications');

module.exports = async (req, res) => {
    try {
        let userId = req.body.data.userId;
        const userData = await model.edu_employee.findOne({
            where: {
                userId: userId
            }
        });
        if (!userData) throw Error("Employee doesnt Exist");
        const currentUsers = await model.Edu_Employer.findAll({
            include: [
                {
                    model: model.User,
                    where: {
                        statusId: 1,
                        adminVerified: 4,
                        emailVerified: 1
                    },
                    attributes: [],
                    raw: true
                }
            ]
        })
        msgString = `An employee has updated their resume of your interest!`;
        typeOfMsg = "Interest";
        let objects = [];
        let objectsNotif = [];
        let userIds = [];
        for (const iterator of currentUsers) {
            userIds.push(iterator.userId);

            let notify = {
                msgString: msgString,
                read: 0,
                type: typeOfMsg,
                fromUser: userId,
                toUser: iterator.userId,
                dataId: null,
                jobId: null,
                serviceId: null,
                trainingId: null,
                interviewId: null,
                fromRole: null

            };
            objects.push(notify);
            let obj = {
                employerId: iterator.id,
                employeeId: userData.id,
                notifString: msgString,
                type: typeOfMsg,
                status: 0
            }
            objectsNotif.push(obj);
        }
        sendFBNotificationBulkNA(msgString, userIds);
        model.notifications.bulkCreate(objects, { returning: true }) // will return all columns for each row inserted
            .then((result) => {
                // return result;
            });
        model.edu_scheduled_notif.bulkCreate(objectsNotif, { returning: true }) // will return all columns for each row inserted
            .then((result) => {
                // return result;
            });
        return true;
        // res.status(200).send({
        //     message: "Success",
        //     results
        // })
    }
    catch (err) {
        res.send(406).send({
            message: err.message
        })
    }
}