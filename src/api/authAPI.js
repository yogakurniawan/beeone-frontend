import axios from "axios";

export async function registerApi(body) {
  const url = "http://localhost:5000/api/auth/signup";
  const { data } = await axios.post(url, body);
  return data;
}
