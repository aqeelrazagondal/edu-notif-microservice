const { Op, Model } = require('sequelize');
const model = require('./../../model/index');
const axios = require('axios');

async function sendFBNotificationBulkNA(data, userId) {
    try {
        let allFBTokens = await model.user_session.findAll({
            where: {
                userId: { [Op.in]: userId },
                tokenFB: { [Op.not]: null }
            }
        });
        for (const iterator of allFBTokens) {
            const card = {
                notification: {
                    title: "EduOpenings",
                    body: data
                },
                data: { msg: data },
                to: iterator.tokenFB,
            }
            const options = {
                headers: {
                    'Authorization': `key=AAAAuYsNHfQ:APA91bG4Z4Vfx-HXMK2We6SUuNLKLDd2cEVltPvKbL6paWwpVcx3a8KfXhkZhrcCRUJHyLfVcBQ2Muaxj0Xw-Lube8CxRGSFM8npsxceswGBDhlJ6mW9QDR6KQYOp66sgRWt3YrduJ34`,
                    'Content-Type': `application/json`
                }
            }
            axios.post('https://fcm.googleapis.com/fcm/send', card, options)
                .then((response) => {
                })
                .catch((error) => {
                });
        }
    }
    catch (err) {
        return err
    }
}
module.exports = { sendFBNotificationBulkNA }