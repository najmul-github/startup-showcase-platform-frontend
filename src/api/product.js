import axios from '../axios/axios'
export default {
    getAll(){
        return axios.get("products");
    }
}