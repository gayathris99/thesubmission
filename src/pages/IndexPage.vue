<template>
  <q-page class="flex flex-center home">
    <video autoplay muted loop id="myVideo">
      <source src="~assets/TheSubMission.mp4" type="video/mp4">
    </video>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    position: relative;
}
video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
