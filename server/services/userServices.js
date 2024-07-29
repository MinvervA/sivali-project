const db = require("./../models");
const { hash, match } = require("./../helper/hashing");
const { createJWT } = require("../lib/jwt");

module.exports = {
  allUser: async () => {
    try {
      const user = await db.user.findAll();
      return {
        isError: false,
        message: "Success get all user!",
        data: user,
      };
    } catch (error) {
      next(error);
    }
  },
  employeeLogin: async (email, password) => {
    try {
      const account = await db.user.finOne({
        where: {
          email,
        },
      });
      console.log(account);
      if (!account) throw { status: 401, message: "Error! Account was not found" };
      // const hashMatch = await match(password, account.dataValues.password);
      // if (!hashMatch) throw { status: 401, message: "Error! Incorrect password" };
      // const token = await createJWT(
      //   {
      //     id: account.dataValues.id,
      //     // tambahkan seperlunya
      //   },
      //   "1d"
      // );
      // return {
      //   isError: false,
      //   message: "Login success!",
      //   data: {
      //     jwt: token,
      //   },
      // };

      console.log("Ketemu");
    } catch (error) {
      return error;
    }
  },

  // mungkin disini mungkin dipindah ke companyService
  employeeRegistration: async (user) => {},

  companyLogin: async (email, password) => {},
};
