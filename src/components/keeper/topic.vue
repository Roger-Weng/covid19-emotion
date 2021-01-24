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
<label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">

<article>
  <h3>Mozilla Firefox</h3>
  <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
</article>
</div>
  </div>
</template>

<script>
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