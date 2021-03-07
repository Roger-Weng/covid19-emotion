<template>
  <div class="topic">
    <div class="title">
      <h2>{{ $route.params.t }}</h2>
    </div>
    <span>Current Time: {{ date }} {{ time }} {{ day }}</span>
    <div v-for="piece in data" :key="piece._id" class="wrapper">
      
        <p class="info-u">User: {{ piece.username }}</p>
        <p class="info-t">Create Time: {{ piece.create_time }}</p>


        <p class="artical-body">{{ piece.forum_text }}</p>

    </div>
    <router-link :to="{ name: 'forum' }">
      <mt-button class="bottom"> Back </mt-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "topic",
  data() {
    return {
      // username: this.username,
      // ctime: this.ctime,
      // fulltext: this.fulltext,
      data: this.data,
    };
  },

  filters: {},
  mounted: function () {
    const topics = {
      ABC: 1,
      BBC: 2,
      CBC: 3,
    };
    let data = {
      topic: topics[this.$route.params.t],
    };

    this.$socket.emit("getTime", data, (callback) => {
      console.log(callback);
      this.date = callback.date;
      this.time = callback.time;
      this.day = callback.day;
    });

    this.u = this.$store.state.user;

    this.$socket.emit("getForumText", data, (callback) => {
      console.log(callback);
      // this.username = callback.username;
      // this.ctime = callback.create_time;
      // this.fulltext = callback.forum_text;
      this.data = callback.doc;
    });
  },
};
</script>

<style scoped>
.topic {
  position: absolute;
  width: 100%;
  height: 100%;
}

.title {
  color: #c0663f;
  font-size: 30px;
  position: relative;
  top: 30px;
  /*right: 0;*/
  text-align: center;
}

.wrapper {
  display: grid;
  margin: 30px;
  /* position: fixed; */
  /* height: 500px;
  width: 300px; */
  grid-gap: 10px;
  grid-auto-columns: 300px 300px;
  grid-auto-rows:30px 200px;
}

.info-u{
  grid-column: 1;
  grid-row: 1;
}
.info-t{
  grid-column: 2;
  grid-row:1;
}
.artical-body{
  width:600px;
  border-style:solid;
  border-width: 1px;
  grid-row: 2;
}

.bottom {
  position: fixed;
  text-align: center;
  width: 80px;
  height: 50px;
  bottom: 15%;
  left: 50%;
}
</style>