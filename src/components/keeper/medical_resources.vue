<template>
  <div>
    <h4 style="text-align:center">Medical Resources</h4>
    <h5>COVID-19 news and prevention tips</h5>
    <a class="a-style" @click="linkDownload('https://coronavirus.jhu.edu/map.html')">jhu coronavirus map</a><br>
    <a class="a-style" @click="linkDownload('https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html')">coping with stress during coronavirus outbreak</a><br>
    <a class="a-style" @click="linkDownload('https://www.google.com/covid19/')">COVID-19 health information</a><br>
    <h5>Depression consulting websites</h5>
    <a class="a-style" @click="linkDownload('https://www.samhsa.gov/find-help/disaster-distress-helpline')">Disaster distress helpline</a><br>
    <a class="a-style" @click="linkDownload('https://www.rexulti.com/us/mdd/tools-resources')">Depression analysis</a><br>
    <a class="a-style" @click="linkDownload('https://www.psychologytoday.com/us')">Psychology Today</a><br>
    <a class="a-style" @click="linkDownload('https://doxy.me')">Telemedicine</a><br>
     </div>
</template>

<script>
    export default {
        name: "medical_resources.vue",
      methods:{
        linkDownload (url) {
          window.open(url,'_blank') // 新窗口打开外链接
        }
      }
    }
</script>

<style scoped>
  a:link{color: #0500ee;}
  a:visited{color: cornflowerblue;}
  a:hover{color: aqua;}
  .a-style {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
