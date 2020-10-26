const passwordHash = require("password-hash");
const User = require("../schema/User.schema");

const checkPassword = (pwd1, pwd2) => {
  return passwordHash.verify(pwd1, pwd2);
};

const signin = async (req, res) => {
  const { user_email, user_password } = req.body;
  const userInDB = await User.findOne({ email: user_email }).catch((err) => {
    return res.status(500).send(err);
  });

  if (!userInDB) {
    return res.status(400).send("user doesn't exists");
  }

  if (checkPassword(user_password, userInDB.password)) {
    return res.status(200).send("logged in");
  } else {
    return res.status(401).send("wrong password");
  }
};

const signup = async (req, res) => {
  const { user_email, user_password } = req.body;
  console.log("signup", req.body);
  const alreadyExists = await User.findOne({ email: user_email }).catch((err) => {
    return res.status(500).send(err);
  });

  if (alreadyExists) {
    return res.status(400).send("user already exists");
  }

  const newUser = new User({
    email: user_email,
    //password: passwordHash.generate(user_password),
  });

  try {
    await newUser.save();
    return res.status(200);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { signin, signup };
