<template>
  <div class="bg-image font-helsa color-white">
    <div class="header row items-center align-center justify-center q-gutter-x-xl q-pt-xl fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('home')">HOME</div>
      <div  class="cursor-pointer" @click="goTo('rules')">RULES</div>
      <div  class="cursor-pointer" @click="goTo('gallery')">GALLERY</div>
      <div  class="cursor-pointer" @click="goTo('contact')">CONTACT</div>
    </div>
    <div class="column align-center justify-center items-center q-mt-xl">
      <q-form class="form" @submit.prevent.stop="onSubmit">
        <!-- Name -->
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">1. State your Avatar name </div>
          <q-input
            v-model="userName"
            dark
            outlined
            class="full-width fs-36 subtitle font-opti"
            :rules="[val => !!val || 'Field is required']"/>
        </div>

        <!-- Age -->
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">2. Your age <span class="font-opti">(</span>RL<span class="font-opti">)</span> </div>
          <q-input
            v-model="userAge"
            dark
            outlined
            class="full-width fs-36 subtitle font-opti"
            :rules="[val => !!val || 'Field is required',
            val => val.match(/^[0-9]+$/) || 'Only numbers allowed']"/>
        </div>

        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">3. What days of the week are you usually on SL ?</div>
          <q-input
            v-model="daysOfWeek"
            dark
            outlined
            class="full-width fs-36 subtitle font-opti"
            :rules="[val => !!val || 'Field is required']"/>
        </div>

        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm"><span class="font-opti">4.</span> What are your regular online hours in SL?</div>
          <q-input
          v-model="onlineHours"
          dark
          outlined
          class="full-width fs-36 subtitle font-opti"
          :rules="[val => !!val || 'Field is required',
          val => val.match(/^[0-9]+$/) || 'Only numbers allowed']"/>
        </div>

        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm"><span class="font-opti">5.</span> What is your timezone?</div>
          <q-input
          v-model="timeZone"
          dark
          outlined
          class="full-width fs-36 subtitle font-opti"
          :rules="[val => !!val || 'Field is required']"/>
        </div>

        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fs-36 fw-600 subtitle ">
          <div class="q-mb-sm">6. Do you qualify the minumum requirement list for applicants? </div>
          <q-btn-toggle
            v-model="minimumRequirementList"
            push
            dark
            class="fs-36 fw-600 font-opti q-mt-md"
            size="xl"
            spread
            text-color="white"
            toggle-color="red"
            toggle-text-color="black"
            :options="[
              {label: 'Yes', value: 'Yes'},
              {label: 'No', value: 'No'}
            ]"
          />
        </div>

        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fs-36 fw-600 subtitle ">
          <div class="q-mb-sm">7. By submitting this form, you acknowledge your understanding of and agreement to all rules, as well as your compliance with the ToS. </div>
          <q-btn-toggle
            v-model="formAcknowledgement"
            push
            dark
            class="fs-36 fw-600 font-opti q-mt-md"
            size="xl"
            spread
            text-color="white"
            toggle-color="red"
            toggle-text-color="black"
            :options="[
              {label: 'Yes', value: 'Yes'},
              {label: 'No', value: 'No'}
            ]"
          />
        </div>

        <div class="row items-center q-my-xl">
          <q-btn label="Make them scream" type="submit" color="black" dense push class="full-width glossy subtitle fs-32 fw-700" :disable="!isAllValid"/>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Loading } from 'quasar'
export default {
  name: 'TrainerApplication',
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
            .post("https://sheetdb.io/api/v1/eedc97o2lpo81", {
              ApplicationType: 'Trainer',
              UserName: this.userName,
              Age: this.userAge,
              DaysOfWeekOnSL: this.daysOfWeek,
              RegularOnlineHours: this.onlineHours,
              TimeZone: this.timeZone,
              MinimumRequirementList: this.minimumRequirementList,
              FormAcknowledgement: this.formAcknowledgement
            })
            .then((response) => {
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
          // axios
          //   .post("https://formsubmit.co/ajax/misamai921@gmail.com", {
          //     ApplicationType: 'Trainer',
          //     UserName: this.userName,
          //     Age: this.userAge,
          //     DaysOfWeekOnSL: this.daysOfWeek,
          //     RegularOnlineHours: this.onlineHours,
          //     TimeZone: this.timeZone,
          //     MinimumRequirementList: this.minimumRequirementList,
          //     FormAcknowledgement: this.formAcknowledgement
          //   })
          //   .then((response) => {
          //     Loading.hide()
          //     this.$q.notify({
          //       color: 'red',
          //       message: 'You are one step closer to Hell.',
          //       caption: 'You\'ll hear from us soon.',
          //       position: "top",
          //       classes: 'font-opti fs-32 fw-700 text-center'
          //     })
          //     this.$router.push({ name: 'rules' })
          //   })
          //   .catch((error) => {
          //     console.log(error)
          //     Loading.hide()
          //   })
      }
    }
  },
  computed: {
    isAllValid () {
      return this.userName && this.userAge && this.daysOfWeek && this.onlineHours && this.timeZone
    }
  },
  data () {
    return {
      userName: '',
      userAge: '',
      daysOfWeek: '',
      onlineHours: '',
      timeZone: '',
      minimumRequirementList: 'Yes',
      formAcknowledgement: 'Yes'
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

