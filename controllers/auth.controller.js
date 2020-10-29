const passwordHash = require("password-hash");

const User = require("../schema/User.schema");
const { sendResponse } = require("../utils/responseHelper");
const { ERR_LOGIN } = require("../utils/Litterals");

const checkPassword = (pwd1, pwd2) => {
  return passwordHash.verify(pwd1, pwd2);
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const userInDB = await User.findOne({ email: email }).catch((err) => {
    return sendResponse(res, { MESSAGE: err, CODE: 500 });
  });

  if (!userInDB) {
    return sendResponse(res, ERR_LOGIN.SIGNIN.NO_USER);
  }

  if (checkPassword(password, userInDB.password)) {
    return sendResponse(res, { MESSAGE: "Logged in", CODE: 200 });
  } else {
    return sendResponse(res, ERR_LOGIN.SIGNIN.WRONG_PASSWORD);
  }
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  const alreadyExists = await User.findOne({ email: email }).catch((err) => {
    return sendResponse(res, { MESSAGE: err, CODE: 500 });
  });

  if (alreadyExists) {
    //return res.status(400).json({ errorMessage: "user already exists" });
    return sendResponse(res, ERR_LOGIN.SIGNUP.USER_EXISTS);
  }

  const newUser = new User({
    email: email,
    password: passwordHash.generate(password),
  });

  try {
    await newUser.save();
    return sendResponse(res, { MESSAGE: `User ${email} is created`, CODE: 200 });
  } catch (err) {
    return sendResponse(res, { MESSAGE: err, CODE: 500 });
  }
};

module.exports = { signin, signup };
