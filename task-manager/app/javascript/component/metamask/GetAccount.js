import axios from "axios";

export const get_account = async (account) => {
  const res = await axios
    .get("/api/v1/accounts", { params: { user: account } })
    .then((resp) => {
      return resp.data.data.length > 0 ? resp.data.data[0].attributes : null;
    })
    .catch((error) => console.log(error));

  return res;
};
