<template>
<div class="container d-flex flex-column justify-content-center">
    <div class="row justify-content-center">
        <div class="col-md-7 col-lg-7 col-7">
            <h5>You do not have permission to visit this page. <a @click="logout()" class=" btn border text-decoration-underline" href="">Logout</a></h5>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods:{
      logout() {
          localStorage.clear()
          window.location.replace("login")
      },
    }
}
</script>
<style scoped>
.container{ min-height: 50vh!important; }
</style>
