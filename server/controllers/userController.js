// imports
const { employeeLogin, allUser, employeeRegistration, changePassword } = require("./../services/userServices");
const responseHandler = require("../utils/responseHandler");
const db = require("./../models");
const { createJWT } = require("../lib/jwt");
const { hash } = require("../helper/hashing");

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
      const response = await employeeLogin(email, password);
      if(response.isError) {
        throw {
          status: response.status,
          message: response.message,
          isError: response.isError
        }
      }
      const jwt = response.data;
      responseHandler(res, 
        "Succesful login",
        jwt
      );
    } catch (error) {
      next(error);
    }
  },

  userRegister: async (req, res, next) => {
    try {
      const response = await employeeRegistration(req.body);
      responseHandler(res, 
        response.message
      )
    } catch (error) {
      next(error);
    }
  },

  changePassword: async (req, res, next) => {
    try {
      console.log(`endpoint ganti password`);
      console.log(req.headers.tokens);
      // lempar identifier akun di req.body [JWT]
      const {email, oldPassword} = req.body;
      // cari akun melalui identifier
      //    jika tidak ditemukan kirimkan error
      // jika menemukan akun hashMatch password lama dengan password di database
      //    jika gagal kirim kan error
        // const hashPassword = await hash(newPassword);
        // console.log(hashPassword);
      // setelah hashing db.user.update atau update column password akun tersebut di database
      // return response proses telah berhasil
    } catch (error) {
      
    }
  }
};
