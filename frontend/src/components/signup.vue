<template>
  <div class="sign-up">
    <div class="title">
      <br />
      <h2>Create your account</h2>
    </div>
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <mt-field label="Username" placeholder="Enter your username (8-16 characters long; including at least one number and one letter)" v-model="username" class="my-input"></mt-field>
      <mt-field label="Password" placeholder="Enter a password (8-16 characters long; including at least one number and one letter)" type="password" v-model="password" class="my-input" ></mt-field>
      <mt-field label="Confirm" placeholder="Enter password again" type="password" v-model="password_new" class="my-input" ></mt-field>
      <br />
      <mt-button type="primary" size="large" @click="sign_up">Create your account</mt-button>
    </div>
    <h4>Have an account?</h4>
    <router-link :to="{path: '/login'}">
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
  .sign-up{
    width:100%;
    height: 100%;
    position: absolute;
    /*height:670px;*/
    background-image:url('../assets/loginBackground.jpg');
    background-size:411px 731px;
  }

  .title{
    /*color: #ffffff;*/
    position: relative;
    top: 80px;
    /*right: 0;*/
    text-align: center;
  }

  .my-input{
    margin-top:5px;
  }
</style>
