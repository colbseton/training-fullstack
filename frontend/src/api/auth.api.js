import axios from "axios";

const URL = "localhost:5000";
const headers = {
  "Content-Type": "application/json",
};

const signUp = async (user) => {
  await axios
    .post(`${URL}/signup`, user, {
      headers: headers,
    })
    .then(() => console.log("yay"));
};

const auth = { signUp };

export default auth;
