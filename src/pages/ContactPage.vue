<template>
  <div class="bg-image color-white font-helsa">
    <div class="header row items-center align-center justify-center q-gutter-x-xl q-pt-xl fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('home')">HOME</div>
      <div  class="cursor-pointer" @click="goTo('surrender')">SURRENDER</div>
      <div  class="cursor-pointer" @click="goTo('rules')">RULES</div>
      <div  class="cursor-pointer" @click="goTo('gallery')">GALLERY</div>
    </div>
    <div class="contact-container q-mt-xl q-px-xl">
      <div class="row items-center align-center q-gutter-md justify-center">
        <img src="~assets/TSMContacts/Wyattt.jpg" alt="">
        <div class="column q-pl-xl">
          <div class="fs-48 fw-600">Wyatt Brennan</div>
          <div class="fs-32 fw-600">Owner of The Sub Mission</div>
          <div class="fs-32 fw-600">For any further information, reach out to the Warden<span class="font-opti"> (wyattbrennan)</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
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
.contact-container {
  img {
    width: 450px;
    height: 340px;
  }
}
</style>

