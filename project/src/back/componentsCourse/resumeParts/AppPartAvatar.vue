<template>
  <div class="avatar">
    <img :src="$slots.default()[0].children">
  </div>
</template>

<script>
  export default {
    name: "AppPartAvatar",
    mounted() {
      console.log(this.$slots.default()[0].children)
    }
  }
</script>

<style scoped>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
