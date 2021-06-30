<template>
  <div class="topic">
    <div class="title">
      <h2>{{ $route.params.t }}</h2>
    </div>

    <div class="notes">
    <p>Notes:</p>
    <textarea class="text" v-model="message" />
    <mt-button  class="submit" @click="onSubmit()" >Submit</mt-button>
    <router-link :to="{ name: 'forum' }">
      <mt-button class="back"> Back </mt-button>
    </router-link>


  </div>


    <div v-for="piece in doc" :key="piece.content._id" class="artical">
      <div class="artical-info">
        <p class="info-u">User: {{ piece.content.username }}</p>
        <p class="info-t">Create Time: {{ piece.content.create_time}}</p>
        <p class="info-id">ID:#{{piece.content.artical_id || 0}}</p>
        <p class="artical-body">{{ piece.content.forum_text }}</p>
      </div>
      <!-- <div class="comment">
      <mt-button class="comment-button" @Click="addComment()" style="display: inline-block">Add Comment</mt-button>
      <textarea class="comment-body" style="display:{{cdisplay}}" v-model="comment" />
      <mt-button class="submit-comment" style="display:{{cdisplay}}" @click="submitComment(piece.content.artical_id)" >Submit</mt-button>
      </div>
      <div v-if="piece.comment.length>0">
        <div  v-for="comment in piece.comment" :key="comment._id" >
          <label for="content">Comment: </label>
          <div class="content">
            <p class="content-u">User:{{comment.username}}</p>
            <p class="content-t">Create Time: {{comment.create_time}}</p>
            <p class="content-body">{{comment.comment}}</p>
          </div>
        </div>
      </div> -->
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
      time_data:'',
      submit:false,
      cdisplay:'None',
      comment: '',
    };
  },

  filters: {},


  mounted: function () {

    const topics = {
      "Academics": 1,
      "Extracurriculars": 2,
      "Others": 3,
    };
    this.topic= topics[this.$route.params.t];

    this.$socket.emit("getForumText", this.topic, (artical) => {
      console.log(artical.docs.length);
      for(var i = 0; i <artical.doc.length;i++){
        var d=new Date(artical.docs[i].create_time);
        var ctime=d.getFullYear()+" "+d.getMonth()+" "+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
        artical.docs[i].create_time=ctime;
        this.$socket.emit("getComment",artical.doc.artical_id,(comment)=>{
          if(comment.doc.length>0){
            this.doc.push({content: artical.doc[i],comment:comment.doc});
          }
          else{
            this.doc.push({content: artical.doc[i],comment:[]});
          }
        })
      }
    });
    console.log(this.doc.length);
  },
methods:{
  addComment(){
    this.cdisplay ='block';
  },
  submitComment(id){
    const put_data={
      username:this.$store.state.user,
      create_time:new Date().toString(),
      comment:this.comment,
      artical_id:id,
      topic_id:this.topic,
    };
    this.$socket.emit("putComment",put_data,(callback) => {});
    this.$route.go(0);
  },
  onSubmit(){
      const put_data={
        username:this.$store.state.user,
        create_time:new Date(),
        forum_text:this.message,
        topic_id:this.topic,
        artical_id:this.doc.length+1
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
  text-align: center;
}

.artical-info {
  display: grid;
  margin-bottom: 50px;
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 2px;
  grid-auto-columns: 150px 150px 80px;
  grid-auto-rows:50px 120px;
}

.info-u{

  /* position: fixed; */
  grid-column: 1;
  grid-row: 1;
}
.info-t{
  grid-column: 2;
  grid-row:1;
}
.info-id{
  grid-column: 3;
  grid-row:1;
}
.artical-body{
  word-wrap: break-word;
  border-top: 1px solid burlywood;
  border-radius: 2px;
  border-right: hidden;
  border-left: hidden;
  text-align: justify;
  font-size:large;
  overflow-y: auto;
  width:380px;
}
.comment{
  width:380px;
}
.comment-button{
  width:100%;
  height:40px;
}
.comment-body{
  height:50px;
  width:100%;
}
.submit-comment{
  width:100%;
  height:40px;
}

.comment{
  display: grid;
  margin-bottom: 50px;
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 2px;
  grid-auto-columns: 150px 150px 80px;
  grid-auto-rows:50px 120px;
}

.comment-u{
  grid-column: 1;
  grid-row: 1;
}
.comment-t{
  grid-column: 2;
  grid-row:1;
}
.comment-body{
  word-wrap: break-word;
  border-top: 1px solid burlywood;
  border-radius: 2px;
  border-right: hidden;
  border-left: hidden;
  text-align: justify;
  font-size:large;
  overflow-y: auto;
  width:380px;
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
