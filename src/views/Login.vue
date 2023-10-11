<template>
  <div class="container form d-flex flex-column min-vh-100 justify-content-center">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">Startup Showcase Platform Login</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group row">
                <label for="primary_id" class="col-md-4 col-form-label text-md-right">Mobile</label>
                <div class="col-md-6">
                  <input id="mobile" type="text" class="form-control" name="mobile" v-model="mobile" required />
                </div>

              </div>

              <div class="form-group row">
                <label for="primary_id" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" v-model="password" required/>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-12 offset-md-4">
                  <div class="row">
                  <p v-if="!(errors =='')" class="alert alert-danger" role="alert">{{errors}}</p>
                    <div class="col-md-4">
                      <button class="btn btn-primary" type="submit" data-toggle="modal" data-target="#error">Save</button>
                    </div>
                    <div class="col-md-3"> 
                      
                    <a style="cursor: pointer;" data-toggle="modal" data-target="#assignPromo">Signup</a>
                    </div>

                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal -->
  <!-- register modal -->
  <div class="row">
            <div class="modal fade col-md-12" id="assignPromo" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Signup</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="assignPromoClose">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" >
                            <form @submit.prevent="signup">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="picture" class="uploadUserFile">Choose File</label>
                                        <input class="form-control-file d-none" type="file" accept=".xls,.xlsx,.ods,.csv" name="picture" id="picture" @change="onFileChange" />
                                        <div class="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" id="name" name="name" class="form-control" >
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" name="email" id="email" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="mobile">Mobile</label>
                                            <input type="text" name="mobile" id="mobile" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="mobile">Password</label>
                                            <input type="password" name="password" id="password" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row pt-4">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-info btn-xs">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from "../axios/axios";

export default {
  name: "Login",
  data() {
    return {
      mobile: "",
      password: "",
      errors: "",
      result: null,
    };
  },
  methods: {
    signup(){
      window.location.replace("/profile")
    },
    login() {
      const data = {
        mobile: this.mobile,
        password: this.password,
      };
    if(this.password && this.mobile) {
      // axios.post("register", data).then((response) => {
      //     localStorage.setItem("token", response.data.data.token);
      //     const decodeToekn = JSON.parse(Buffer.from(response.data.data.token.split(".")[1], "base64"));
      //     if (decodeToekn['roles'].includes("Founder") == false) {
      //         localStorage.clear();
      //         this.errors = "Sorry! you have no permission to access this platform.";
      //     }else{
            window.location.replace("/profile")
        //   }
        // })
        // .catch((e) => {
        //   if (e.response.status == 401) {
        //     this.errors = "Unauthorized";
        //   }
        // })
      }else {
          this.result = "An mobile and password must be present"
          console.log(this.result);
      }
    },
  },
};
</script>

<style scoped>
p.alert.alert-danger {
    width: 200px;
    font-size: 12px;
    padding: 5px;
    text-align: center;
}
button {
  text-align: right;
}
.credentials{border: none;}
</style>