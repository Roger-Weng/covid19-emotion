<template>
  <div class="forum">
    <div class="title">
      <h2>Categories</h2>
    </div>
    <div class="description">
      <p style="font-size:20px;"> Welcome to our forum! </p>
    </div>
    <div v-for="topic in topics" :key='topic.title'>
      <router-link :to="{ name: 'topic',params:{t:topic.title}}">
        <mt-button style="margin-top: 1rem">
          {{topic.title}}
        </mt-button>
      </router-link>
    </div>

    <router-link :to="{ name: 'home' }">
      <mt-button class="back" style="margin-top: 1rem"> Back </mt-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "forum",
  data() {
    return {
      topics: [{ title: "Academics" }, { title: "Extracurriculars" }, { title: "Others" }],
    };
  },
};
</script>

<style scoped>
.forum {
  width: 90%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
}

.title {
  color: #c0663f;
  font-size: 30px;
  text-align: center;
}
</style>
