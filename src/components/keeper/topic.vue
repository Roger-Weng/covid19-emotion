<template>
  <div class="topic">
    <div class="title">
      <h2>Topic</h2>
    </div>
    <div>
      <article>
        <h3>Google Chrome</h3>
        <p>{{ username }}</p>
        <p>{{ ctime }}</p>
        <p>{{ fulltext }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "topic",
  data() {
    return {
      username: this.username,
      ctime: this.ctime,
      fulltext: this.fulltext,
    };
  },

  filters: {},
  mounted: function () {
    let data = {
      // user: "test_user",
      // date: new Date(),
      // m: "test_msg",
    };

    this.$socket.emit("getForumText", data, (callback) => {
      console.log(callback);
      this.username = callback.username;
      this.ctime = callback.create_time;
      this.fulltext = callback.forum_text;
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
</style>