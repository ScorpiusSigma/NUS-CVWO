import axios from "axios";

const get_tasks = async (accountId, setAccountTasks) => {
  const res = await axios
    .get("/api/v1/accounts/" + accountId.toString() + "/tasks")
    .then((resp) => resp.data.data)
    .catch((error) => console.log(error));
  setAccountTasks(res);
  return res;
};

export default get_tasks;
