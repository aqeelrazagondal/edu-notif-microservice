const model = require('../../model/index');
const { Op, Model } = require('sequelize');
const { sendFBNotificationBulkNA } = require('../../functions/common/notifications');

module.exports = async (req, res) => {
    try {
        let tableId = req.body.data.tableId;
        let currentUsers = {};
        let sender = {};
        let msgString = "";
        let typeOfMsg = "";
        let senderUser = {};
        sender = await model.edu_training.findOne({ where: { id: tableId } });
        msgString = `A new training ${sender.topic} is published on EduOpenings`;
        typeOfMsg = "Training Post";
        trainingId = tableId;
        if (sender.hostEmployerId) {
            senderUser = await model.Edu_Employer.findOne({ where: { id: sender.hostEmployerId } });
        }
        else if (sender.hostEmployeeId) {
            senderUser = await model.edu_employee.findOne({ where: { id: sender.hostEmployeeId } });
        }
        else if (sender.hostServiceProviderId) {
            senderUser = await model.edu_service_provider.findOne({ where: { id: sender.hostServiceProviderId } });
        }
        else {
            console.log("No host!");
            return false;
        }
        // console.log("sender ", senderUser);
        currentUsers = await model.User.findAll({
            where: {
                statusId: 1,
                adminVerified: 4,
                emailVerified: 1,
                roleId: { [Op.notIn]: [1] },
                id: { [Op.notIn]: [senderUser.userId] }
            },
            attributes: ["id"]
        });
        // console.log("currentUsers ", currentUsers, currentUsers.length);
        let objects = [];
        let userIds = [];
        for (const iterator of currentUsers) {
            // console.log("data ", msgString, typeOfMsg, senderUser.userId, iterator.id, trainingId)
            // notify = await insertNotification(msgString, typeOfMsg, senderUser.userId, iterator.id, null, null, null, trainingId, null, null)
            // fbNotif = await sendFBNotification(msgString, iterator.id);

            userIds.push(iterator.id);
            let notify = {
                msgString: msgString,
                read: 0,
                type: typeOfMsg,
                fromUser: senderUser.userId,
                toUser: iterator.id,
                dataId: null,
                jobId: null,
                serviceId: null,
                trainingId: trainingId,
                interviewId: null,
                fromRole: null

            };
            objects.push(notify);
        }
        sendFBNotificationBulkNA(msgString, userIds);
        // console.log("a------------------------- ", a)
        model.notifications.bulkCreate(objects, { returning: true }) // will return all columns for each row inserted
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