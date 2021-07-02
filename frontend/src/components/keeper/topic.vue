<template>
  <div class="topic">
    <div class="title">
      <h2>{{ $route.params.t }}</h2>
    </div>

    <div class="notes">
    <p>Notes:</p>
    <textarea class="text" v-model="message" />
    <mt-button  class="submit" @click="submitArticle" >Submit</mt-button>
    <router-link :to="{ name: 'forum' }">
      <mt-button class="back"> Back </mt-button>
    </router-link>

      <div v-for="content in doc" :key="content._id">
        <div class="artical">
          <p class="u">User:{{content.username}}</p>
          <p class="ct">Create Time:{{content.create_time | toDateString}}</p>
          <p class="body">{{content.forum_text}}</p>
        </div>
        <div class="addCmt">
          <mt-button class="add" @click="addCmt">New Comment</mt-button>
          <div class="container" v-if="cd">
            <textarea class="text" v-bind="comment"></textarea>
            <mt-button class="submit" @click="submitCmt(content._id)">Submit</mt-button>
          </div>
        </div>
        <div v-if="content.comments.length > 0">
          <div class="comment" v-for="cmt in content.comments" :key="cmt.create_time">
            <label class="cmt_label" for="content">Comment:</label>
            <p class="u">User: {{cmt.username}}</p>
            <p class="ct">create_time: {{cmt.create_time | toDateString}}</p>
            <p class="body">{{cmt.comment}}</p>
          </div>
        </div>
      </div>

  </div>




  </div>
</template>

<script>
export default {
  name: "topic",
  data() {
    return{
      doc: [],
      message:'',
      topic:'',
      cd:false,
      comment:'',
    };
  },

  mounted: function () {
    const topics = {
      "Academics": 1,
      "Extracurriculars": 2,
      "Others": 3,
    };
    this.topic= topics[this.$route.params.t];
    this.$socket.emit("getForumText", this.topic,(data)=>{
      this.doc=data.doc;
    });

  },
filters:{
  toDateString:function (value) {
    var source=new Date(value);
    return source.getDate()+"/"+source.getMonth()+"/"+source.getFullYear()+" "+source.getHours()+":"+source.getMinutes()+":"+source.getSeconds();
  }
},

methods:{
  addCmt:function(){
    this.cd=true;
  },
  submitArtical:function(){
      const put_data={
        username:this.$store.state.user,
        create_time:Date.now(),
        forum_text:this.message,
        topic_id:this.topic,
        comments:[],
      };
      this.$socket.emit('putText',put_data,(callback)=>{});
      this.$toast("Update Success");
      this.$router.go(0);
    },
  submitCmt:function(id){
    const data={_id:id.toString(),
    cmt:{
      username:this.$store.state.user,
      create_time:Date.now(),
      comment:this.comment
    }};
    this.$socket.emit("addComment",function(data){});
    this.$toast("Update Success");
    this.$router.go(0);
  }
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
  text-align: center;
}

.artical{
  width:100%;
  display: grid;
  margin-bottom: 50px;
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 2px;
  grid-auto-columns: 30% 70%;
  grid-auto-rows:50px 120px;
}
.artical .u{
  grid-column: 1;
  grid-row: 1;
  border-bottom: 1px solid blue;
}
.artical .ct{
  grid-column: 2;
  grid-row:1;
  border-bottom: 1px solid blue;
}

.artical .body{
  word-wrap: break-word;
  text-align: justify;
  margin-left: 10px;
  margin-top:10px;
  font-size:large;
  overflow-y: auto;
  width:100%;
}

.comment{
  width:100%;
  display: grid;
  margin-bottom: 30px;
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 2px;
  grid-auto-columns: 15% 30% 55%;
  grid-auto-rows:30px 80px;
}
.comment .cmt_label{
  grid-column: 1;
  grid-row: 2;
  text-align:center;
  line-height:60px;
  font-size:large;
  border-right: 1px double  green;
}

.comment .u{
  grid-column:2;
  grid-row:1;
  border-bottom: 1px solid blue;
}
.comment .ct{
  grid-column: 3;
  grid-row: 1;
  border-bottom: 1px solid blue;
}
.comment .body{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row:2;
  margin-left: 10px;
  margin-top:10px;
  font-size:large;
}

.addCmt .add{
  margin-top:20px;
  width:100%;
  height:40px;
}
.addCmt .container .text{
  margin:auto;
  width:100%;
  height: 50px;
  border: 1px solid #eee;
}
.addCmt .submit{
  width:100%;
  height:40px;
  margin:auto;
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
