import axios from "axios";

const URL = "http://localhost:5000";
const headers = {
  "Content-Type": "application/json",
};

const signUp = async ({ email, password }) => {
  console.log(email,password);
  await axios
    .post(
      `${URL}/auth/signup`,
      { email, password },
      {
        headers: headers,
      }
    )
    .then(() => console.log("yay"));
};

const auth = { signUp };

export default auth;
