<template>
  <q-page class="flex flex-center home">
    <div class="content row items-center align-center justify-center q-gutter-x-xl q-pt-xl font-helsa fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('surrender')">SURRENDER</div>
      <div  class="cursor-pointer" @click="goTo('rules')">RULES</div>
      <div  class="cursor-pointer" @click="goTo('contact')">CONTACT</div>
    </div>
    <video autoplay muted loop id="myVideo">
      <source src="~assets/TheSubMission.mp4" type="video/mp4">
    </video>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    goTo (name) {
      this.$router.push({
        name
      })
    }
  }
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
.content {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0);
  color: #f1f1f1;
  width: 100%;
  z-index: 999;
}
</style>
