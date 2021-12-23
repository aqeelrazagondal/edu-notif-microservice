const model = require('../../model/index');
const { sendFBNotificationBulkNA } = require('../../functions/common/notifications');

module.exports = async (req, res) => {
    try {
        // TODO - Batch wise to be implement in 2023
        const roleId = req.body.data.roleId;
        const text = req.body.data.text;
        let currentUsers = {};
        let msgString = "";
        let typeOfMsg = "";
        if (roleId == 2 || roleId == 5 || roleId == 6 || roleId == 9 || roleId == 10 || roleId == 11) { // for all employers
            currentUsers = await model.Edu_Employer.findAll({
                include: [
                    {
                        model: model.User,
                        where: {
                            statusId: 1,
                            adminVerified: 4,
                            emailVerified: 1
                        },
                        attributes: ["id"],
                        raw: true
                    }
                ],
                attributes: ["id", "userId"],
            });
            msgString = text;
            typeOfMsg = "EDU Admin Notification";
        } else if (roleId == 3 || roleId == 7) {  // for all employees
            currentUsers = await model.edu_employee.findAll({
                include: [
                    {
                        model: model.User,
                        where: {
                            statusId: 1,
                            adminVerified: 4,
                            emailVerified: 1
                        },
                        attributes: ["id"],
                        raw: true
                    }
                ],
                attributes: ["id", "userId"],
            });
            msgString = text;
            typeOfMsg = "EDU Admin Notification";
        } else if (roleId == 4 || roleId == 8) { // for all service providers
            currentUsers = await model.edu_service_provider.findAll({
                include: [
                    {
                        model: model.User,
                        where: {
                            statusId: 1,
                            adminVerified: 4,
                            emailVerified: 1
                        },
                        attributes: ["id"],
                        raw: true
                    }
                ],
                attributes: ["id", "userId"],
            });
            msgString = text;
            typeOfMsg = "EDU Admin Notification";
        }
        const objects = [];
        const userIds = [];
        for (const iterator of currentUsers) {
            userIds.push(iterator.userId);

            const notify = {
                msgString,
                read: 0,
                type: typeOfMsg,
                // fromUser: senderUser.userId,
                toUser: iterator.userId,
                dataId: null,
                // jobId,
                // serviceId,
                trainingId: null,
                interviewId: null,
                fromRole: null

            };
            objects.push(notify);
        }

        sendFBNotificationBulkNA(msgString, userIds);
        model.notifications.bulkCreate(objects, { returning: true }) // will return all columns for each row inserted
            .then((result) => {
                // return result;
            });
        return true;
    }
    catch (err) {
        console.log("error: ", err)
        res.status(406).send({
            message: err.message
        })
    }
}