<template>
  <div class="topic">
    <div class="title">
      <h2>{{$route.params.t}}</h2>
    </div>
    <div v-for="piece in data" :key="piece._id">
      <article>
        <p>{{ piece.username }}</p>
        <p>{{ piece.create_time }}</p>
        <p>{{ piece.forum_text }}</p>
      </article>
    </div>
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
      data:this.data
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
      // this.username = callback.username;
      // this.ctime = callback.create_time;
      // this.fulltext = callback.forum_text;
      
      this.data=callback.doc;
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