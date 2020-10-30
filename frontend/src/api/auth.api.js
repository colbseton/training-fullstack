import axios from "axios";

const URL = "http://localhost:5000";

const signInUp = async (user, endpoint) => {
  const { email, password } = user;
  await axios
    .post(
      `${URL}/auth/${endpoint}`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => console.log("yay"));
};

const auth = { signInUp };

export default auth;
