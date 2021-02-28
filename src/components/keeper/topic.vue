<template>
  <div class="topic">
    <div class="title">
      <h2>Topic</h2>
    </div>
    <div>
    <article>
  <h3>Google Chrome</h3>
  <p>{{username}}</p>
 <p>{{ctime}}</p>
 <p>{{ftext}}</p>
 <!-- <p>{{test}}</p> -->
</article>


</div>
</div>
</template>

<script>
    export default {
      name: "test_data",
      data(){
        this.chartSettings = {
          // "xAxis.0.axisLabel.rotate": 30,
        };
        return{
          username:this.username,
          ctime:this.ctime,
          ftext:this.ftext
        }
      },

      filters: {
        
      },
      mounted: function () {
        let msg = {
          user: "test_user",
          date: new Date(),
          m:"test_msg",
        };
        // let msg="test_msg";

        this.$socket.emit("getForumText",msg,  (data) => {
          console.log(data);

          this.username=data.username;
          this.ctime=data.create_time;
          this.ftext=data.forum_text;
          // this.test=data.test;
          
          

        })
      }
    }
</script>

<style scoped>
  .topic{
    position: absolute;
    width:100%;
    height:100%;
  }

  .title{
    color: #c0663f;
    font-size:30px;
    position: relative;
    top: 30px;
    /*right: 0;*/
    text-align: center;
  }

</style>