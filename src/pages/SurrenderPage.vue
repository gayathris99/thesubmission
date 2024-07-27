<template>
  <div class="bg-image color-white font-helsa">
    <div class="header row items-center align-center justify-center q-gutter-x-xl q-pt-xl fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('home')">HOME</div>
      <div  class="cursor-pointer" @click="goTo('rules')">RULES</div>
      <div  class="cursor-pointer" @click="goTo('gallery')">GALLERY</div>
      <div  class="cursor-pointer" @click="goTo('contact')">CONTACT</div>
    </div>
    <div class="column align-center justify-center items-center q-mt-xl">
      <div class="fs-36 fw-600 text-center subtitle animate-flicker">
        A one way ticket to the Black Site. <br/>Fill the details, clench your thighs shut and wait for your instructions.
      </div>
      <q-form class="form" @submit.prevent.stop="onSubmit">
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">1. What days of the week are you usually on SL ?</div>
          <q-input
            v-model="daysOfWeek"
            dark
            outlined
            class="full-width fs-36 subtitle font-opti"
            :rules="[val => !!val || 'Field is required']"/>
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">2. What is your regular online hours in SL?</div>
          <q-input
          v-model="onlineHours"
          dark
          outlined
          class="full-width fs-36 subtitle font-opti"
          :rules="[val => !!val || 'Field is required',
          val => val.match(/^[0-9]+$/) || 'Only numbers allowed']"/>
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">3. Please inform the one limit you are permitted below, that is on top of the default prison limits.</div>
          <q-input
          v-model="limitPermitted"
          dark
          outlined
          class="full-width fs-36 subtitle font-opti"
          :rules="[val => !!val || 'Field is required']"/>
        </div>
        <div class="row items-center q-my-xl">
          <q-btn label="Surrender" type="submit" color="black" dense push class="full-width glossy subtitle fs-32 fw-700" :disable="!isAllValid"/>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Loading } from 'quasar'
export default {
  name: 'SurrenderPage',
  data () {
    return {
      daysOfWeek: '',
      onlineHours: '',
      limitPermitted: ''
    }
  },
  computed: {
    isAllValid () {
      return this.daysOfWeek && this.onlineHours && this.limitPermitted
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
      if (this.isAllValid) {
        axios.defaults.headers.post["Content-Type"] = "application/json";
          Loading.show()
          axios
            .post("https://formsubmit.co/ajax/misamai921@gmail.com", {
              DaysOfWeekOnSL: this.daysOfWeek,
              RegularOnlineHours: this.onlineHours,
              OneLimitPermitted: this.limitPermitted
            })
            .then((response) => {
              console.log(response)
              Loading.hide()
              this.$q.notify({
                color: 'red',
                message: 'You are one step closer to Hell.',
                caption: 'You\'ll hear from us soon.',
                position: "top",
                classes: 'font-opti fs-32 fw-700 text-center'
              })
              this.$router.push({ name: 'rules' })
            })
            .catch((error) => {
              console.log(error)
              Loading.hide()
            })
      }
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
.subtitle {
  letter-spacing: 0.075rem;
}
.form {
  width: 65vw
}
:deep(.q-field__messages) {
  font-size: 18px;
}
</style>
