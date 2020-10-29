module.exports = {
  ERR_LOGIN: {
    SIGNIN: {
      WRONG_PASSWORD: {
        CODE: 401,
        MESSAGE: "Password is incorrect",
      },
      NO_USER: {
        MESSAGE: "User doesn't exists",
        CODE: 400,
      },
    },
    SIGNUP: {
      USER_EXISTS: {
        MESSAGE: "User already exists",
        CODE: 400,
      },
    },
  },
};
