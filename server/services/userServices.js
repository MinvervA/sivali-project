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
      const account = await db.user.findOne({
        where: {
          email,
        },
      });
      if (!account) throw { status: 401, message: "Error! Account was not found", isError: true };
      const hashMatch = await match (password, account.dataValues.password);
      if (!hashMatch) throw { status: 402, message: "Error, Wrong Password", isError: true};
      const token = await createJWT(
        {
          id: account.dataValues.id,
        },
        "1d"
      );
      return {
        isError: false,
        message: "Login success!",
        data: token
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  employeeRegistration: async (user) => {
    const {username, password, email} = user;
    const uniqueUsername = await db.user.findOne({
      where: {
        full_name: username
      }
    })
    const uniqueEmail = await db.user.findOne({
      where: {
        email
      }
    })
    if(uniqueEmail) throw {status: 401, message: "Error, Email has already been used within the system!", isError: true};
    if(uniqueUsername) throw {status: 401, message: "Error, Name already exist within the system!", isError: true};
    hashedPassword = await hash(password);
    const newAccount = {
      full_name: username,
      email: email,
      password: hashedPassword
    }
    const response = db.user.create(newAccount);
    console.log(response);
    return {
      isError: false,
      message: "Registration success! Account has been created"
    }
  },

  changePassword: async (email, password) =>{
    
  },

  companyLogin: async (email, password) => {},
};
