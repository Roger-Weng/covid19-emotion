<template>
  <div class="login">
    <div class="title">
      <h2>Covid-19</h2>
      <h1>Moodup</h1>
    </div>
    <div class="inputCell">
      <br />
      <br />
      <mt-field label="Username" placeholder="Enter your username" v-model="username" class="my-input"></mt-field>
      <mt-field label="Password" placeholder="Enter your password" type="password" v-model="password" class="my-input" ></mt-field>
      <br />
      <!--<br />-->
      <mt-button type="primary" size="large" @click="login">Log In</mt-button>

      <h6 style="color: white">Don't have an account?</h6>
      <router-link :to="{path: '/sign-up'}">
        <mt-button>
          Join Moodup
        </mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return {
          username:null,
          password:null,
        }
      },
      methods:{
        login(){
          let u=this.username;
          let p=this.password;
          let reg=/^[a-z0-9_]{3,12}$/i;
          if(!reg.test(u)){
            this.$toast("Improper username format!");
            return;
          }
          if(!reg.test(p)){
            this.$toast("Improper password format!");
            return;
          }
          let obj={
            username:u,
            password:p
          };
          this.$socket.emit('login', obj, (data)=> {
            if(data.code === 1){
              this.$toast("Welcome back," + this.username + "!");
              this.$store.commit('update', this.username);
              // console.log(this.$store.state.user);
              this.$router.push("/home");
            }
            else{
              this.$messagebox("Error","Incorrect username or password!");
            }
          }
          );
        }
      }

    }
</script>

<style scoped>
  .login{
    position: absolute;
    width:100%;
    height:100%;
    background-image: url('https://source.unsplash.com/random/800x600');
    background-size: cover;
    background-position: center;
  }

  .login::before{
    content: '';
    position: absolute;
    width:100%;
    height:100%;
    background-color: rgba(255, 255, 255, .4);
  }

  .my-input{
    margin-top:5px;
  }

  .title{
    /*color: #ffffff;*/
    position: relative;
    top: 80px;
    /*right: 0;*/
    text-align: center;
  }

  .inputCell{
    position: relative;
    top: 100px;
  }
</style>
