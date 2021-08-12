<template>
  <div class="introduction">
    <div class="title">
      <h2>Covid-19</h2>
      <h1>Moodup</h1>
    </div>
    <div class="description">
      <br />
      <br />
      <p style="font-size:20px;"> Welcome to Mood Up! Mood Up is a web application that provides mental health guidance for everyone whose life is affected by covid-19. Users can record their emotions by filling out daily questionnaires and writing diaries. The app will then generate a comprehensive score to evaluate users’ happiness, anxiety, etc. The app also recommends depression counseling websites for certain users. In addition, users can share their feelings and stories with others in the forum within our application.
</p>
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
      <br />
      <br />
      <p style="font-size:20px;" text-align: center;> Designed by Yan(Roger) Weng
  </div>

</template>

<script>
</script>

<style scoped>
  .introduction{
    position: absolute;
    width:100%;
    height:100%;
    background-image: url('https://source.unsplash.com/random/800x600');
    background-size: cover;
    background-position: center;
  }

  .introduction::before{
    content: '';
    position: absolute;
    width:100%;
    height:100%;
    background-color: rgba(255, 255, 255, .4);
  }

  .title{
    color: #c0663f;
    font-size:30px;
    position: relative;
    top: 80px;
    /*right: 0;*/
    text-align: center;
  }

  .description{
    position: relative;
  }


</style>
