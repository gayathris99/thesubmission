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
      <q-form class="form">
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">1. What days of the week are you usually on SL ?</div>
          <q-input v-model="daysOfWeek" dark outlined  class="full-width fs-36 subtitle"></q-input>
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">2. What days of the week are you usually on SL ?</div>
          <q-input v-model="daysOfWeek" dark outlined  class="full-width fs-36 subtitle"></q-input>
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">3. What days of the week are you usually on SL ?</div>
          <q-input v-model="daysOfWeek" dark outlined  class="full-width fs-36 subtitle"></q-input>
        </div>
        <div class="row items-center q-my-xl">
          <q-btn label="Surrender" color="black" dense push class="full-width glossy subtitle fs-32 fw-700" @click="onSubmit"/>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    },
    onSubmit (e) {
      e.preventDefault();
     axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post("https://formsubmit.co/ajax/misamai921@gmail.com", {
          DaysOfWeekOnSL: this.daysOfWeek
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error));
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  background-image: url('~assets/blackbackground.jpg');
  overflow: hidden;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.q-card {
  width: 100%;
  max-width: 65vw;
}
.subtitle {
  letter-spacing: 0.075rem;
}
.form {
  width: 65vw
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
