const db = require('./../models');
const { hash, match } = require('./../helper/hashing');
const { createJWT } = require('../lib/jwt');

module.exports = {
    employeeLogin: async (email, password) => {
        const account = await db.user.findOne({
            where: email
        });
        if(!account) throw { status: 401, message: "Error! Account was not found" };
        const hashMatch = await match(password, account.dataValues.password);
        if(!hashMatch) throw { status: 401, message: "Error! Incorrect password" };
        const token = await createJWT(
            {
                id: account.dataValues.id,
                // tambahkan seperlunya
            },
            "1d"
        )
        return {
            isError: false,
            message: "Login success!",
            data: {
                jwt: token
            }
        }
    },


    // mungkin disini mungkin dipindah ke companyService
    employeeRegistration: async (user) => {
        
    },

    companyLogin: async (email, password) => {

    },
}