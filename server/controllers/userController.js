// imports
const {employeeLogin} = require("./../services/userServices");

module.exports = {
    userLogin: async (req, res, next) => {
        try {
            const {email, password} = req.body;
            const account = await employeeLogin(email, password);
            respondHandler(res, {
                message: "Succesful Login!",
                // data lihat hasil tes dulu
            })
        } catch (error) {
            next(error);
        }
    }
}