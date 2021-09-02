<template>
  <div class="main">
    <mt-swipe
      :auto="0"
      class="swipe"
      :defaultIndex="defaultIndex"
      :key="`weekly-report-swipe-${swipeIndexUpdater}`"
      :continuous="false"
      @change="swipeChangeHandler"
      :show-indicators="false"
    >
      <mt-swipe-item v-for="date in weekly_report_dates" :key="`weekly-report-swipe-item-${date.getTime()}`" class="position-relative">
        <week-report :query_date="date" />
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
        :disabled="swipeIndex === weekly_report_dates.length - 1"
        class="navigation-button"
        @click="setSwipeIndex(1)">
        Next
        <i class="el-icon-arrow-right el-icon--right" />
      </el-button>
    </div>
  </div>
</template>

<script>
import WeekReport from "../components/week_report";

export default {
  components: {
    WeekReport,
  },
  created() {
    const now = new Date();
    this.weekly_report_dates = [this.previousWeek(now), now];
    this.defaultIndex = 1; // set to current week
    this.swipeIndex = 1; // update swipeIndex
  },
  data() {
    return {
      weekly_report_dates: [],
      defaultIndex: 0,
      swipeIndex: 0,
      swipeIndexUpdater: 0,
    }
  },
  methods: {
    previousWeek(date) {
      return new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
    },
    loadPrevWeek() {
      const current_oldest = this.weekly_report_dates[0];
      this.weekly_report_dates.unshift(this.previousWeek(current_oldest));
      this.defaultIndex = 1; // update
      this.swipeIndex = 1; // update swipeIndex
      this.swipeIndexUpdater++; // force update
    },
    swipeChangeHandler(index) {
      this.swipeIndex = index;
      // load prev week report if index is 0
      if (index === 0) {
        this.loadPrevWeek();
      }
    },
    setSwipeIndex(indexChange) {
      this.swipeIndex += indexChange;
      this.swipeIndex = this.swipeIndex % this.weekly_report_dates.length;
      if (this.swipeIndex === 0) {
        this.loadPrevWeek();
      } else {
        this.defaultIndex = this.swipeIndex;
        this.swipeIndexUpdater++;
      }
    }
  },
}
</script>

<style scoped>
.main{
  width: 100%;
}
.position-relative {
  position: relative;
}
.swipe{
  height: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
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

<style>
.mint-swipe-item:not(.is-active) {
  display: none !important;
}
</style>
