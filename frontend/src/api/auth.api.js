import axios from "axios";
import qs from "querystring";

const URL = "http://localhost:5000";

const signUp = async (user) => {
  console.log(user);
  const { email, password } = user;
  await axios
    .post(
      `${URL}/auth/signup`,
      qs.stringify({
        email: email,
        password: password,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => console.log("yay"));
};

const auth = { signUp };

export default auth;
