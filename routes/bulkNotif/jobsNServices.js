const model = require('../../model/index');
const { sendFBNotificationBulkNA } = require('../../functions/common/notifications');

module.exports = async (req, res) => {
    try {
        let table = req.body.data.table;
        let tableId = req.body.data.tableId;
        let currentUsers = {};
        let sender = {};
        let msgString = "";
        let typeOfMsg = "";
        let senderUser = {};
        let jobId;
        let serviceId;
        if (table == "edu_jobs") {
            sender = await model.edu_jobs.findOne({ where: { id: tableId } });
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
            msgString = `A new job ${sender.jobTitle} is published on EduOpenings`;
            typeOfMsg = "Job Post";
            jobId = tableId;
            serviceId = null;
        }
        else if (table === "edu_service") {
            sender = await model.edu_service.findOne({ where: { id: tableId } });
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
            msgString = `A new service ${sender.title} is published on EduOpenings`;
            typeOfMsg = "Service Post";
            jobId = null;
            serviceId = tableId;
        }
        senderUser = await model.Edu_Employer.findOne({ where: { id: sender.employerId } });
        let objects = [];
        let userIds = [];
        for (const iterator of currentUsers) {
            userIds.push(iterator.userId);

            let notify = {
                msgString: msgString,
                read: 0,
                type: typeOfMsg,
                fromUser: senderUser.userId,
                toUser: iterator.userId,
                dataId: null,
                jobId: jobId,
                serviceId: serviceId,
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
        res.send(406).send({
            message: err.message
        })
    }
}