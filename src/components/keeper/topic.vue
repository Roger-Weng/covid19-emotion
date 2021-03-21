<template>
  <div class="topic">
    <div class="title">
      <h2>{{ $route.params.t }}</h2>
    </div>
    <span>Current Time: {{ time_data.date }} {{ time_data.time }} {{ time_data.day }}</span>

    <div id="v-model-basic" class="demo">
    <label>Notes:
    <textarea v-model="message" />
    </label>
    <input type="submit" @click="onSubmit()" value="Submit">
    <p v-if="submit">Submitted Success! Please refresh the page to see updates</p>
  </div>

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

      data: '',
      message:'',
      topic:'',
      time_data:{
        date:'',
        time:'',
        day:''
      },
      submit:false,
    };

  },

  filters: {},

  mounted: function () {
    

    const topics = {
      ABC: "1",
      BBC: "2",
      CBC: "3",
    };
    this.topic= topics[this.$route.params.t];
    

    this.$socket.emit("getTime", '', (callback) => {
      console.log(callback);
      this.time_data.date = callback.date
      this.time_data.time = callback.time;
      this.time_data.day = callback.day;
    });

    this.$socket.emit("getForumText", this.topic, (callback) => {
      console.log(callback);
      // this.username = callback.username;
      // this.ctime = callback.create_time;
      // this.fulltext = callback.forum_text;
      this.data = callback.doc;
    });
  },
methods:{
  onSubmit(){
      const put_data={
        username:this.$store.state.user,
        create_time:this.time_data.date+' '+this.time_data.time,
        forum_text:this.message,
        topic_id:this.topic
      };
      this.$socket.emit('putText',put_data,(callback)=>{
      });
      this.submit=true;
    }
}
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

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>