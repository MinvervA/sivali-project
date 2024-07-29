// imports
const { employeeLogin, allUser } = require("./../services/userServices");

module.exports = {
  getAllUser: async (req, res, next) => {
    try {
      const data = await allUser();
      return res.send({
        isError: data.isError,
        message: data.message,
        data: data.data,
      });
    } catch (error) {
      next(error);
    }
  },
  userLogin: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      const account = await employeeLogin(email, password);
      respondHandler(res, {
        message: "Succesful Login!",
        // data lihat hasil tes dulu
      });
    } catch (error) {
      next(error);
    }
  },
};
