<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-md-12">
                <h1>Founder Profile</h1>
                <div>
                <p><strong>Name:</strong> {{ founder.name }}</p>
                <p><strong>Email:</strong> {{ founder.email }}</p>
                <p><strong>Startup:</strong> {{ founder.startup }}</p>
                </div>
                <button @click="editProfile">Edit Profile</button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      founder: {
        name: 'John Doe',
        email: 'john@example.com',
        startup: 'My Startup Inc',
      },
    };
  },
  methods: {
    editProfile() {
      this.$router.push('/founder/edit');
    },
  },
};
</script>

<style scoped>
.container{ min-height: 50vh!important; }
.permission-error-msg h5{color: red;}
</style>
