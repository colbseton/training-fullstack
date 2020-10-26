const passwordHash = require("password-hash");
const User = require("../schema/User.schema");

const checkPassword = (pwd1, pwd2) => {
  return passwordHash.verify(pwd1, pwd2);
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const userInDB = await User.findOne({ email: email }).catch((err) => {
    return res.status(500).json({ errorMessage: err });
  });

  if (!userInDB) {
    return res.status(400).json({ errorMessage: "user doesn't exists" });
  }

  if (checkPassword(password, userInDB.password)) {
    return res.status(200).json({ message: "log in" });
  } else {
    return res.status(401).json({ errorMessage: "wrong password" });
  }
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  const alreadyExists = await User.findOne({ email: email }).catch((err) => {
    return res.status(500).json({ errorMessage: err });
  });

  if (alreadyExists) {
    return res.status(400).json({ errorMessage: "user already exists" });
  }

  const newUser = new User({
    email: email,
    password: passwordHash.generate(password),
  });

  try {
    await newUser.save();
    return res.status(200).json({ response: "yay" });
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
};

module.exports = { signin, signup };
