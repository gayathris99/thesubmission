<template>
  <div class="bg-image color-white font-helsa">
    <div class="header row items-center align-center justify-center q-gutter-x-xl q-pt-xl fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('home')">HOME</div>
      <div  class="cursor-pointer" @click="goTo('surrender')">SURRENDER</div>
      <div  class="cursor-pointer" @click="goTo('contact')">CONTACT</div>
    </div>
    <div class="form">

    </div>
  </div>
</template>

<script>
export default {
  name: 'RulesPage',
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
.bg-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-image: url('~assets/blackbackground.jpg');
}
</style>

