import axios from "axios";

export default async function sendFormData(data) {
  return await axios.post(process.env.REACT_APP_sendFormData, data);
}
