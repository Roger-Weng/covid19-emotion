<template>
  <div class="topic">
    <div class="title">
      <h2>{{ $route.params.t }}</h2>
    </div>
    <span>Current Time: {{ time_data.date }} {{ time_data.time }} {{ time_data.day }}</span>
    
    <div class="notes">
    <p>Notes:</p>
    <textarea class="text" v-model="message" />
    <mt-button  class="submit" @click="onSubmit()" >Submit</mt-button>
    <router-link :to="{ name: 'forum' }">
      <mt-button class="back"> Back </mt-button>
    </router-link>
    
    
  </div>
  

    <div v-for="piece in data" :key="piece._id" class="wrapper">
      
        <p class="info-u">User: {{ piece.username }}</p>
        <p class="info-t">Create Time: {{ piece.create_time }}</p>

        <p class="artical-body">{{ piece.forum_text }}</p>

    </div>
    
    
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
      this.$router.go(0);
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
  margin-bottom: 50px;
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 2px;
  /* position: fixed; */
  /* height: 500px;
  width: 300px; */
  /* grid-gap: 10px; */
  grid-auto-columns: 150px 150px;
  grid-auto-rows:50px 120px;
}

.info-u{
  
  /* position: fixed; */
  grid-column: 1;
  grid-row: 1;
}
.info-t{
  
  /* position: fixed; */
  grid-column: 2;
  grid-row:1;
}
.artical-body{

  /* overflow-y:auto; */

  word-wrap: break-word;
  border-top: 1px solid burlywood;
  border-radius: 2px;
  border-right: hidden;
  border-left: hidden;
  text-align: justify;
  font-size:large;
  /* white-space: pre-line; */
  /* text-overflow: ellipsis; */
  overflow-y: auto;
  width:300px;

  /* grid-row: 2; */
}

.submit{
  width:100%;
  height:40px;
}
.back{
  margin-top:10px ;
  width:100%;
  height:40px;
}


.text{
  width: 100%;
  height:50px;
  margin:auto;
}
.notes {
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