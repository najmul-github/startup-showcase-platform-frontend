import { createStore } from 'vuex'
import axios from "../axios/axios";
import router from '../router/index.js'

const store = createStore({
  state:{
    accessToken : localStorage.getItem('token')
  },
  mutations: {
    // authUser(state, userData){
    //   state.accessToken = userData.token
    // }
  },
  actions: {
    // userLogin({commit}, authData){
    //   if(authData.mobile && authData.password) {
    //     axios.post("login", authData).then((response) => {
    //         localStorage.setItem("token", response.data.data.token);
    //         commit('authUser',{
    //           token: response.data.data.token
    //         })
    //         router.push({ path: "/profile" });
            
    //       }).catch(error => console.log(error))
    //   }else {
    //       this.result = "An mobile and password must be present"
    //   }
    // }
  },
  modules: {}
})

export default store
