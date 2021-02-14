<template>
  <div class="topic">
    <div class="title">
      <h2>Topic</h2>
    </div>
    <div>
    <article>
  <h3>Google Chrome</h3>
  <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
</article>



<article>
  <h3>Mozilla Firefox</h3>
  <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
</article>
</div>
  </div>
</template>

<script>
    export default {
      name: "forumdata",
      // data(){
      //   this.chartSettings = {
      //     // "xAxis.0.axisLabel.rotate": 30,
      //   };
      //   return{
      //     test: "hello",
      //     weekly_report:{
      //       averageSleep: null,
      //       averageMeal: null,
      //       total_score: null,
      //       chartHappiness:{},
      //       chartExcitement:{},
      //       chartDepression:{},
      //       chartBoredom:{},
      //       chartAnxiety:{},
      //       BestRecords: null,
      //       BestPhoto: null
      //     }
      //   }
      // },

      // filters: {
      //   numFilter (value) {
      //     let realVal = null;
      //     if (value) {
      //       realVal = value.toFixed(2);
      //     }
      //     return realVal;
      //   }
      // },
      mounted: function () {
        let u=this.username;
        let t=this.create_time;
        let f=this.forum_text;
        let msg = {
           username:u,
           create_time:t,
           forum_text:f
      };

        this.$socket.emit("getForumText",msg,  (data) => {
          console.log(this.username);
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