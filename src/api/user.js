import axios from '../axios/axios'
export default {
    list(){
        return axios.get("users");
    },
    
}