<template>
  <div class="forum">
    <div class="title">
      <h2>Categories</h2>
    </div>
    <div class="description">
      <br />
      <br />
      <p style="font-size:20px;"> Welcome to our forum! </p>
    </div>
    <div v-for="topic in topics" :key='topic.title'>
      <router-link :to="{ name: 'topic',params:{t:topic.title}}">
        <mt-button>
          {{topic.title}}
        </mt-button>
      <br />
      <br />
      </router-link>
    </div>

    <router-link :to="{ name: 'home' }">
      <mt-button class="back"> Back </mt-button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "forum",
  data() {
    return {
      topics: [{ title: "ABC" }, { title: "BBC" }, { title: "CBC" }],
    };
  },
};
</script>

<style scoped>
.forum {
  position: absolute;
  width: 100%;
  height: 100%;
}

.title {
  color: #c0663f;
  font-size: 30px;
  position: relative;
  top: 80px;
  /*right: 0;*/
  text-align: center;
}
</style>
