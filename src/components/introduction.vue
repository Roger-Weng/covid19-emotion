<template>
  <div class="introduction">
    <div class="title">
      <h2>Covid-19</h2>
      <h1>Moodup</h1>
    </div>
    <div class="description">
      <br />
      <br />
      <p style="font-size:20px;"> Welcome to Mood Up! </p>
    </div>
    <router-link :to="{path: '/login'}">
      <mt-button>
        Log in
      </mt-button>
    <br />
    <br />
    </router-link>
    <router-link :to="{path: '/sign-up'}">
      <mt-button>
        Sign up
      </mt-button>
    </router-link>
  </div>
</template>

<script>
</script>

<style scoped>
  .introduction{
    position: absolute;
    width:100%;
    height:100%;
    background-image:url('../assets/loginBackground.jpg');
    background-size: 411px 731px;
    /*background-size:100%;*/
  }

  .title{
    color: #c0663f;
    font-size:30px;
    position: relative;
    top: 80px;
    /*right: 0;*/
    text-align: center;
  }

</style>
