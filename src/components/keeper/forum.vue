<template>
  <div class="forum">
    <div class="title">
      <h2>Categories</h2>
    </div>
    <div class="description">
      <br />
      <br />
      <p style="font-size:20px;"> Welcome to our forum! </p>
    </div>
 
    <router-link :to="{ name: 'topic'}">
      <mt-button>
        Academics
      </mt-button>
    <br />
    <br />
    </router-link>
    <router-link :to="{ name: 'topic'}">
      <mt-button>
        Sports
      </mt-button>
    <br />
    <br />
    </router-link>
    <router-link :to="{ name: 'topic'}">
      <mt-button>
        Arts
      </mt-button>
    <br />
    <br />
    </router-link>
    <router-link :to="{ name: 'topic'}">
      <mt-button>
        Just for fun
      </mt-button>
    <br />
    <br />
    </router-link>
  </div>
</template>

<script>
</script>

<style scoped>
  .forum{
    position: absolute;
    width:100%;
    height:100%;
  }

  .title{
    color: #c0663f;
    font-size:30px;
    position: relative;
    top: 80px;
    /*right: 0;*/
    text-align: center;
  }

</style>
