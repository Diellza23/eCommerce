import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getVueShopList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("vueshop/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getVueShopList;
