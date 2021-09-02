<template>
  <div class="sign-up">
    <div class="background"></div>
    <div class="title">
      <br />
      <h2>Create your account</h2>
    </div>
    <div class="form">
      <mt-field label="Username" placeholder="Enter your username (8-16 characters long; including at least one number and one letter)" v-model="username" class="my-input"></mt-field>
      <mt-field label="Password" placeholder="Enter a password (8-16 characters long; including at least one number and one letter)" type="password" v-model="password" class="my-input" ></mt-field>
      <mt-field label="Confirm" placeholder="Enter password again" type="password" v-model="password_new" class="my-input" ></mt-field>
      <mt-button style="margin-top: 2rem" type="primary" size="large" @click="sign_up">Create your account</mt-button>
    </div>
    <h4>Have an account?</h4>
    <router-link :to="{path: '/login'}" style="display: block">
      <mt-button>
        Log In
      </mt-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "sign-up",
    data(){
      return {
        username:null,
        password:null,
        password_new: null
      }
    },
    methods:{
      sign_up(){
        let u=this.username;
        let p=this.password;
        let p2 = this.password_new;

        let reg=/^[a-z0-9_]{8,16}$/i;
        if(!reg.test(u)){
          this.$toast("Improper username format!");
          return;
        }
        if(!reg.test(p)){
          this.$toast("Improper password format!");
          return;
        }

        if (p !== p2){
          this.$toast("Inconsistent password!");
          this.password = "";
          this.password_new = "";
          return;
        }

        let obj={
          username:u,
          password:p
        };

        this.$socket.emit('sign_up', obj, (data)=> {
            if(data.code === 1){
              this.$toast("Welcome," + this.username + "!");
              this.$store.commit('update', this.username);
              this.$router.push("/home");
            }
            else{
              this.$messagebox("Error","The username has been registered");
            }
          }
        );
      }
    }
  }
</script>

<style scoped>
  .sign-up {
    width:100%;
    height: 100vh;
    position: relative;
  }

  .sign-up > .background {
    z-index: -1;
    position: absolute;
    width:100%;
    max-width: initial;
    height:100%;
    top: 0;
    left: 0;
    background-image: url('https://source.unsplash.com/random/800x600');
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, .4));
  }

  .title{
    margin-top: 3rem;
    text-align: center;
  }

  .my-input{
    margin-top:5px;
    border-radius: 4px;
    border-top: 0;
  }

  .form {
    margin-top: 6rem;
  }

  .sign-up > * {
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
    width: 90%;
  }
</style>
