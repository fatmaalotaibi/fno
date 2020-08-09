import { decorate } from "mobx";

import instance from "./instance";

class AuthStore {}

decorate(AuthStore, {});

const authStore = new AuthStore();

signup = async (userData) => {
  try {
    await await instance.post("/signup", userData);
  } catch (error) {
    console.log("AuthStore -> signup -> error", error);
  }
};

export default authStore;
