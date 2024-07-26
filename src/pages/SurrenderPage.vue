<template>
  <div class="bg-image color-white font-helsa">
    <div class="header row items-center align-center justify-center q-gutter-x-xl q-pt-xl fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('home')">HOME</div>
      <div  class="cursor-pointer" @click="goTo('rules')">RULES</div>
      <div  class="cursor-pointer" @click="goTo('contact')">CONTACT</div>
    </div>
    <div class="column align-center justify-center items-center q-mt-xl">
      <div class="fs-36 fw-600 text-center subtitle animate-flicker">
        A one way ticket to the Black Site. <br/>Fill the details, clench your thighs shut and wait for your instructions.
      </div>
      <!-- <q-card class="bg-white q-mt-lg color-black">
        <q-card-section class="fw-900 font-radley">
          <q-form>
            <div class="row align-center justify-center q-gutter-x-sm">
              <div class="col-5 fs-24">1. What days of the week are you usually on SL?</div>
              <q-input class="col-6 fs-24" outlined></q-input>
            </div>
          </q-form>
        </q-card-section>
      </q-card> -->
      <!-- <q-form>
        <div class="row align-center justify-center q-gutter-x-sm font-radley q-mt-lg color-white">
          <div class="col-5 fs-24">1. What days of the week are you usually on SL?</div>
          <q-input v-model="daysOfWeek" class="color-white"></q-input>
        </div>
      </q-form> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurrenderPage',
  data () {
    return {
      daysOfWeek: ''
    }
  },
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
.q-card {
  width: 100%;
  max-width: 65vw;
}
.subtitle {
  letter-spacing: 0.075rem;
}
.q-card-section {
  width: 75%;
}
// .q-input {
//   border-top: solid 1px white !important;
//   border-left: solid 1px white !important;
//   border-right: solid 1px white !important;
// }
// @keyframes flickerAnimation {
//   0%   { opacity:1; }
//   50%  { opacity:0; }
//   100% { opacity:1; }
// }
// @-o-keyframes flickerAnimation{
//   0%   { opacity:1; }
//   50%  { opacity:0; }
//   100% { opacity:1; }
// }
// @-moz-keyframes flickerAnimation{
//   0%   { opacity:1; }
//   50%  { opacity:0; }
//   100% { opacity:1; }
// }
// @-webkit-keyframes flickerAnimation{
//   0%   { opacity:1; }
//   50%  { opacity:0; }
//   100% { opacity:1; }
// }
// .animate-flicker {
//    -webkit-animation: flickerAnimation 2s infinite;
//    -moz-animation: flickerAnimation 2s infinite;
//    -o-animation: flickerAnimation 2s infinite;
//     animation: flickerAnimation 2s infinite;
// }
</style>
