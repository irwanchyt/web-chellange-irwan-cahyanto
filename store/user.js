import axios from "axios";
import User from "@/models/User";

export const state = () => {

}
export const actions = {
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post("https://dummyjson.com/auth/login", {username, password})
      //console.log(">>>>"+JSON.stringify({data}))
      if (data.error) {
        commit("LOGIN_FAIL", data.error, { root: true });
        return;
      }

      const user = {
        username, 
        password,
        token: data.accessToken
      }
      commit("LOGIN_SUCCESS");
      commit("SAVE_AUTH", user, { root: true })
    }
    catch (error) {
      commit("LOGIN_FAIL", error, { root: true });
      this.$router.go(this.$router.currentRoute)
    }
  },
  getData(context, payload) {
    return new Promise((resolve, reject) => {

      axios.get('https://dummyjson.com/products')
        .then((response) => {
          console.log(response)
          if (response.data.code === 200) {

            resolve(response);
          }

        })
        .catch((error) => {
          reject(error);
          console.log(error);
        });
    });
  },

};

export const mutations = {
  SAVE_LIST_USER(state, responseData) {
    User.create({ data: responseData });
  },
  LOGIN_SUCCESS(state) {
    alert("Login sukses")
    this.$router.push('/dashboard')
  },
};
