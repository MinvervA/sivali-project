const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    hash: async (password) => {
        try {
            const result = await bcrypt.hash(password, saltRounds);
            return result
        } catch (error) {
            return error;
        }
    },

    match: async (passwordInput, passwordDatabase) => {
        try {
            return bcrypt.compare(passwordInput, passwordDatabase)
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}