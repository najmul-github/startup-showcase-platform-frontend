import axios from '../axios/axios'
export default {
    loadPermissions(data){
        return axios.get("users/loadPermissions",data);
    },
    store(data){
        return axios.post("users/permissions",data);
    }
    
}