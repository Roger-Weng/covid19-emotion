<template>
  <div>
    <h1>Weekly Report</h1>
    <h3>Since {{weekly_report.MondayDate}}</h3>
    <img src="../../assets/icon/split_line.png" style="position:relative; width: 400px; max-width: 90%; height: 40px;">
    <div>
      <h4 style="display: inline-block">Comprehensive Evaluation: </h4>
      <div style="display: inline-block">{{(weekly_report.total_score+100)/2| numFilter}}</div>
      <mt-progress :value="(weekly_report.total_score+100)/2">
        <div slot="start">
          &nbsp;<img src="../../assets/icon/sad.png" class="icon">&nbsp;
        </div>
        <div slot="end">
          &nbsp;<img src="../../assets/icon/happy.png" class="icon">&nbsp;
        </div>
      </mt-progress>
    </div>
    <br>

    <img src="../../assets/icon/split_line.png" style="position:relative; width: 400px; max-width: 90%; height: 40px;">
    <div>
      <h4>Emotion Trend</h4>
      <ve-line :data="weekly_report.chartHappiness" :extend="chartSettings" width="400px"></ve-line>
      <ve-line :data="weekly_report.chartExcitement" :extend="chartSettings" width="400px"></ve-line>
      <ve-line :data="weekly_report.chartDepression" :extend="chartSettings" width="400px"></ve-line>
      <ve-line :data="weekly_report.chartBoredom" :extend="chartSettings" width="400px"></ve-line>
      <ve-line :data="weekly_report.chartAnxiety" :extend="chartSettings" width="400px"></ve-line>
    </div>
    <img src="../../assets/icon/split_line.png" style="position:relative; width: 400px; height: 40px;">
    <div>
      <h4>The Greatest Moments</h4>
      <div>{{weekly_report.BestRecords}}</div>
    </div>
    <img src="../../assets/icon/split_line.png" style="position:relative; width: 400px; height: 40px;">
    <div>
      <h4>The Happiest Smile</h4>
      <img :src="weekly_report.BestPhoto">
    </div>
  </div>
</template>

<script>
    export default {
      name: "weekly_report",
      props: {
        query_date: {
          type: Date, // timestamp
          default: () => (new Date()), // use current date as default value
        }
      },
      data(){
        this.chartSettings = {
          // "xAxis.0.axisLabel.rotate": 30,
        };
        return{
          test: "hello",
          weekly_report:{
            averageSleep: null,
            averageMeal: null,
            total_score: null,
            chartHappiness:{},
            chartExcitement:{},
            chartDepression:{},
            chartBoredom:{},
            chartAnxiety:{},
            BestRecords: null,
            BestPhoto: null
          }
        }
      },

      filters: {
        numFilter (value) {
          let realVal = null;
          if (value) {
            realVal = value.toFixed(2);
          }
          return realVal;
        }
      },
      mounted: function () {
        let msg = {
          user: this.$store.state.user,
          date: this.query_date,
        };

        this.$socket.emit("getWeeklyReport",msg,  (data) => {
          this.weekly_report = data.weekly_report;
          const charts = ['chartAnxiety', 'chartBoredom', 'chartDepression', 'chartExcitement', 'chartHappiness'];
          for (const chart of charts) {
            this.weekly_report[chart].rows.sort((fst, snd) => {
              return (new Date(fst.date)) > (new Date(snd.date))
            });
          }
        })
      }
    }
</script>

<style scoped>
  .icon{
    width: 20px;
    height: 20px;
  }
  .sub_title{
    font-size: 120%;
  }
</style>
