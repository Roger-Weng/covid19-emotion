<template>
  <div class="main">
    <mt-swipe :auto="0" :defaultIndex="defaultIndex" class="swipe" :key="`daily-report-swipe-${defaultIndex}`">
      <mt-swipe-item class="chart">
        <img src="../../assets/bg_main2.jpg" class="img_bg">
        <div class="emo content">
          <h3>Comprehensive Score of This day</h3>
          <h3 style="margin-left: 160px">{{(daily_report.total_score+100)/2| numFilter}} /100</h3>
          <mt-progress :value="(daily_report.total_score+100)/2">
            <div slot="start">
              <img src="../../assets/icon/sad.png" class="icon">&nbsp;
            </div>
            <div slot="end">
              &nbsp;<img src="../../assets/icon/happy.png" class="icon">
            </div>
          </mt-progress>
          <!--add button-->
          <div style="text-align: right">
            <router-link :to="{path: '/home'}" >
              <mt-button style="margin-right: 10px">
                return home
              </mt-button>
            </router-link>
          </div>
        </div>

        <div style="margin-top: 1rem" class="content">
          <img src="../../assets/icon/split_2.png" style="position:relative; width: 400px; max-width: 90%; height: 20px;">
          <ve-histogram :data="daily_report.emoChart" :extend="chartSettings" width="400px" height="300px"></ve-histogram>
          <img src="../../assets/icon/split_2.png" style="position:relative; width: 400px; max-width: 90%; height: 20px;">
          <div class="quotes">
            <h3>Wishes</h3>
            <div class="chartQuotes">
              {{report_extend.total_words}}
            </div>
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="weather">
        <div>
          <img :src="report_extend.weather_img" class="img">
          <div class="content">
            <div class="weather_title">
              {{report_extend.weather_sentence}}
            </div>
            <div class="encourage">
              {{report_extend.weather_recommendation}}
            </div>
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="meals">
        <img :src="report_extend.meal_img" class="img">
        <div class="content">
          <div class="meal_title">
            You had
            <div class="meals">{{daily_report.meals}}</div>
            meals in this day
          </div>
          <div class="encourage_meal">
            Tips: {{report_extend.meal_recommendation}}
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="hoursSleep">
        <img :src="report_extend.sleep_img" class="img">
        <div class="content">
          <div class="sleep_title">You slept for {{daily_report.hoursSleep}} hours in the night</div>
          <div class="encourage_meal">
            Tips: {{report_extend.sleep_recommendation}}
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="text">
        <img src="../../assets/bg_main2.jpg" class="img_bg">
        <div class="content">
          <h2>Diary</h2>
          <img src="../../assets/icon/split_2.png" style="position:relative; width: 400px; max-width: 90%; height: 20px;">
          <br>
          <br>
          <div>
            <div style="font-size: 110%">
              {{daily_report.report}}
            </div>
          </div>
          <br>
          <img src="../../assets/icon/split_2.png" style="position:relative; width: 400px; max-width: 90%; height: 20px;">
          <br>
          <br>
          <div class="emo">
            <h4>Emotion Score</h4>
            <mt-progress :value="((daily_report.reportEmo * 16)+100)/2">
              <div slot="start">
                <img src="../../assets/icon/sad.png" class="icon">&nbsp;
              </div>
              <div slot="end">
                &nbsp;<img src="../../assets/icon/happy.png" class="icon">
              </div>
            </mt-progress>
          </div>
          <br>
          <img src="../../assets/icon/split_2.png" style="position:relative; width: 400px; max-width: 90%; height: 20px;">
          <br>
          <div class="keywords">
            <h4>Keywords</h4>
            {{daily_report.reportInfo}}
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="img">
        <img src="../../assets/bg_main2.jpg" class="img_bg">
        <div class="content">
          <h2>Selfie</h2>

          <ve-pie :data="img_chart" width="400px"></ve-pie>
          <img :src="daily_report.img" class="my_photo">
        </div>
      </mt-swipe-item>
    </mt-swipe>

    <div class="navigation-button-wrapper">
      <el-button
        class="navigation-button"
        @click="setSwipeIndex(-1)"
        icon="el-icon-arrow-left"
      >
        Prev
      </el-button>
      <el-button
        class="navigation-button"
        @click="setSwipeIndex(1)">
        Next
        <i class="el-icon-arrow-right el-icon--right" />
      </el-button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "emoChart",
      data(){
        this.chartSettings = {
          "xAxis.0.axisLabel.rotate": 30,
        };
        return {
          defaultIndex: 0,
          daily_report:{
            weather: null,
            hoursSleep: null,
            meals: null,
            emoChart: null,
            report: null,
            reportEmo: null,
            reportInfo: null,
            img: null,
            imgScore: null
          },
          report_extend:{
            weather_sentence: null,
            weather_img: null,
            weather_recommendation: null,
            meal_img: null,
            meal_recommendation: null,
            sleep_img: null,
            sleep_recommendation: null,
            total_words: null
          }
        }
      },
      computed: {
        // imgEmotion: function(){
        //   if(daily_report){
        //     console.log(daily_report['imgScore']);
        //     return {
        //
        //     }
        //   }
        // },
        img_chart:function(){
          if (this.daily_report.imgScore){
            return {
              columns: ['emotion', 'level'],
              rows: [
                { 'emotion': 'anger', 'level': this.daily_report.imgScore.anger},
                { 'emotion': 'disgust', 'level': this.daily_report.imgScore.disgust},
                { 'emotion': 'fear', 'level': this.daily_report.imgScore.fear},
                { 'emotion': 'happiness', 'level': this.daily_report.imgScore.happiness},
                { 'emotion': 'neutral', 'level': this.daily_report.imgScore.neutral},
                { 'emotion': 'sadness', 'level': this.daily_report.imgScore.sadness},
                { 'emotion': 'surprise', 'level': this.daily_report.imgScore.surprise}
              ]
            }
          }

        },
        meal_id: function () {
          return Math.floor(Math.random()*(this.meal_recommendations.length));
        },
        sleep_id: function () {
          return Math.floor(Math.random()*(this.sleep_recommendations.length));
        },
        comfort_id: function () {
          return Math.floor(Math.random()*(this.comfortWords.length));
        },
        encourage_id: function () {
          return Math.floor(Math.random()*(this.encourageWords.length));
        },
        emoState: function () {
          if(this.daily_report.emoChart){
            if('rows' in this.daily_report.emoChart){
              let emo = 0;
              let rows = this.daily_report.emoChart.rows;
              for(let i = 0; i < rows.length; i++){
                let row = rows[i];
                if(row['emotion'] === 'happiness'|| row['emotion'] === 'excitement'){
                  emo += row['level'];
                }
                else{
                  emo -= row['level'];
                }
              }
              console.log(emo);
              return emo;
            }
          }
        },
        keywords: function () {
          if(this.daily_report.emoChart){
            let keywords = "";
            for(let keyword in this.daily_report.emoChart.reportInfo){
              keywords += keyword;
              keywords += " ";
            }
            return keywords;
          }
        }
        // chartData: function () {
        //   return {
        //     columns: ['emotion', 'degree'],
        //     rows:[
        //       {'emotion': 'happiness', 'degree': 1},
        //       {'emotion': 'excitement', 'degree': 1},
        //       {'emotion': 'depression', 'degree': 2},
        //       {'emotion': 'anxiety', 'degree': 3},
        //       {'emotion': 'boredom', 'degree': 4}
        //     ]
        //   }
        // }
      },
      filters: {
        numFilter (value) {
          // return value.toFixed(2);
          let realVal = null;
          if (value) {
            realVal = value.toFixed(2);
          }
          return realVal;
        }
      },
      methods: {
        setSwipeIndex(indexChange) {
          this.defaultIndex += indexChange;
        }
      },
      mounted: function () {
      //  init chartInfo
        console.log("daily_report mounted!");
        let info = {};
        if(this.$route.params.year){
          info = {
            year: this.$route.params.year,
            month:this.$route.params.month,
            day: this.$route.params.day,
            user: this.$store.state.user
          };
        }
        else{
          let date = new Date();
          info = {
            year: date.getFullYear(),
            month:date.getMonth()+1,
            day: date.getDate(),
            user: this.$store.state.user
          }
        }
        this.$socket.emit("getDailyReport", info, (data)=>{
          console.log(data);
          if (data.code === 1){
            this.daily_report = data.dailyReport;
            this.report_extend = data.report_extend;
          }
        })
      }
    }
</script>

<style scoped>
  .main{
    height: 100vh;
    width: 100%;
    max-width: 1080px;
  }
  .swipe{
    height: 100%;
    width: 100%;
  }
  .content {
    max-width: 1080px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .weather{
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .weather_title{
    font-family: "Gill Sans", sans-serif;
    position: relative;
    top: 150px;
    color: #f0f7ff;
    font-size:200%;
  }
  .img{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .img_bg{
    opacity:0.3;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .encourage{
    font-family: cursive;
    position: relative;
    top: 300px;
    color: #f0f7ff;
    font-size:120%;
  }
  .encourage_meal{
    font-family: cursive;
    position: relative;
    margin-right: 10px;
    margin-left: 10px;
    top: 400px;
    color: #f0f7ff;
    font-size:100%;
  }
  .meal_title{
    font-family: "Gill Sans", sans-serif;
    position: relative;
    top: 150px;
    margin-right: 10px;
    color: #f0f7ff;
    font-size:200%;
    text-align: right;
  }
  .sleep_title{
    font-family: "Gill Sans", sans-serif;
    position: relative;
    top: 150px;
    margin-right: 10px;
    color: #f0f7ff;
    font-size:200%;
    text-align: right;
  }
  .meals{
    font-size:1.2em;
    color: #FFFFFF;
  }
  .chartQuotes{
    font-family: cursive;
    font-size:1.2em;
  }
  .quotes{
  }
  .diary{
    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
    background: #FFFFFF;
    width: 411px;
    height: 300px;
  }
  .icon{
    width: 15px;
    height: 15px;
  }
  .my_photo{
    position: absolute;
    width: 60%;
    margin-left: 80px;
  }
  .navigation-button-wrapper {
    z-index: 999;
    position: absolute;
    bottom: 80px;
    right: 40px;
  }
  @media screen and (max-width: 768px) {
    .navigation-button-wrapper {
      display: none;
    }
  }
</style>
