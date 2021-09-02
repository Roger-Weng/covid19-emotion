<template>
  <div class="home">
    <div>
      <emo-status v-if="selected === 'record'" />
      <forum v-else-if="selected === 'forum'" />
      <calendar v-else-if="selected === 'calendar'" />
      <daily_report v-else-if="selected === 'report'" class="report" />
      <weekly_report v-else-if="selected === 'statistics'" />
      <medical_resources v-else />
    </div>

    <mt-tabbar v-model="selected" class="bottom" fixed>
      <mt-tab-item id="record">
        <img src="../assets/icon/record.png" class="icon">
        <br>
        record
      </mt-tab-item>
      <mt-tab-item id="forum">
        <img src="../assets/icon/calendar.png" class="icon">
        <br>
        forum
      </mt-tab-item>
      <mt-tab-item id="calendar">
        <img src="../assets/icon/calendar.png" class="icon">
        <br>
        calendar
      </mt-tab-item>
      <mt-tab-item id="report">
        <img src="../assets/icon/report.png" class="icon">
        <br>
        report
      </mt-tab-item>
      <mt-tab-item id="statistics">
        <img src="../assets/icon/statistics.png" class="icon">
        <br>
        statistics
      </mt-tab-item>
      <mt-tab-item id="resources">
        <img src="../assets/icon/zhinanzhen.png" class="icon">
        <br>
        resources
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import emoStatus from "./keeper/emoStatus"
  import daily_report from "./keeper/daily_report"
  import weekly_report from "./keeper/weekly_report"
  import calendar from "./keeper/calendar"
  import medical_resources from "./keeper/medical_resources"
  import forum from "./keeper/forum";
  import emoInput from "./keeper/emoInput";
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome',
      selected: 'record'
    }
  },
  components:{
    emoInput,
    emoStatus,
    forum,
    daily_report,
    weekly_report,
    calendar,
    medical_resources
  },
  methods: {
    changeSelected(val) {
      this.selected = val
    }
  }
}
</script>

<style scoped>
  .home{
    width: 100%;
    max-height: 94vh;
    overflow: auto;
    padding-bottom: 1rem;
  }
  .icon{
    height: 30px;
    width: 30px;
  }
</style>
