import axios from '../axios/axios'
export default {
    list(){
        return axios.get("/notification-template");
    },
    getTemplateByTypeId(id){
        return axios.get(`/notification-template/${id}`);
    },
    send(data){
        return axios.post("notification",data);
    },
    
}