<template>
  <div id="v-model-basic" class="demo">
    <label>Notes:
    <input v-model="message" placeholder="edit me" />
    </label>
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
// import Vue from 'vue';
export default{
  data() {
    return {
      message: "",
    };
  },
};
</script>
<style scoped>
.demo {
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