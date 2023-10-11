<template>
  <div id="nav" class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <router-link class="nav-link r1" to="/profile">Dashboard</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link r2" to="/profile">Profile</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link r3" to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link r5" to="/pitches">Pitches</router-link>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped lang="scss">
  #nav {
    background: #6C3A97;
    padding: 0;
  img {cursor: pointer; width: 10%; margin-right: 10%;}
  a {
    font-weight: bold;
    color: #fff;
  }
  ul{
    list-style-type: none;
  }
  .active{
    border-bottom: 3px solid #fff;
    padding-bottom: 5px;
    width: 100%;
  }
  li{
    padding-right:20px;
  }
}
</style>