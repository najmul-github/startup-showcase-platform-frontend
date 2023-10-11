<template>
    <div class="container-fluid pt-3 px-5">
        <div class="row">
            <div class="col-md-5">
                <div class="card mt-3 mb-4">
                        <div class="card-body"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import users from "../../api/user"
import notification from "../../api/notification"

export default{
    components:{},
    data(){
        return{
            users: [],
            notificatRequestType : '',
        }
    },
    mounted(){
        this.getuserList()
    },
    methods: {
        getuserList(){
            users.list().then(function (response) {
                this.users = response.data.data;
            }.bind(this));
        },
        sendNotification(){
            if(this.notificatRequestType == 'push'){
                notification.send(users).then((res) =>{
                        return res;
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            }
            else if(this.notificatRequestType == 'sms'){}
        }
    }
}
</script>
<style scoped>
.btn{
    color: #6C3A97;
    font-weight: 500;
    font-size:16px ;
   
}
.card{
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  border-color:#F4F0FF ;
  border: 2px solid #F4F0FF ;
  box-shadow: 5px 10px 18px #F4F0FF ;
  border-radius: 10px;
}
</style>
