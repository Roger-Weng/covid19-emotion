<template>
  <div class="introduction">

    <div class="background"></div>

    <div class="title">
      <h2>Covid-19</h2>
      <h1>Moodup</h1>
    </div>

    <div class="description">
      <p>
        Welcome to Mood Up! Mood Up is a web application that provides mental health guidance for everyone whose life is affected by covid-19. Users can record their emotions by filling out daily questionnaires and writing diaries. The app will then generate a comprehensive score to evaluate users’ happiness, anxiety, etc. The app also recommends depression counseling websites for certain users. In addition, users can share their feelings and stories with others in the forum within our application.
      </p>
    </div>

    <div class="actions">
      <router-link :to="{path: '/login'}">
        <mt-button>
          Log in
        </mt-button>
      </router-link>

      <router-link :to="{path: '/sign-up'}">
        <mt-button style="margin-left: .5rem">
          Sign up
        </mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .introduction{
    width: 100%;
    min-height: 100vh;
    position: relative;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://source.unsplash.com/random/800x600');
    background-size: cover;
    background-position: center;
    z-index: -1;
    mask-image: linear-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, .4));
  }

  .title{
    color: #c0663f;
    font-size: 2rem;
    text-align: center;
  }

  .description{
    font-size: 1.5rem;
    margin: 0 auto;
    text-indent: 2rem;
    width: 90%;
    max-width: 1080px;
  }

  .actions {
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
  }

  .actions > * {
    width: 100%;
    max-width: 120px;
  }
</style>
