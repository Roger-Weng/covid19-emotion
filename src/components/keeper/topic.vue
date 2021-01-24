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

<div id="app-5">
  <p>{{ message }}</p>
  <label> comments </label>
  <input v-model="message">
  <button v-on:click="comment">反转消息</button>
</div>

<article>
  <h3>Mozilla Firefox</h3>
  <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
</article>
</div>
  </div>
</template>

<script>
import Vue from 'vue'
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
 methods: {
    comments: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
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