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
          <div class="q-mb-sm">1. State your Avatar name </div>
          <q-input
            v-model="userName"
            dark
            outlined
            class="full-width fs-36 subtitle font-opti"
            :rules="[val => !!val || 'Field is required']"/>
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm">2. Your age </div>
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
          <div class="q-mb-sm">5. Please inform the one limit you are permitted below, that is on top of the default prison limits.</div>
          <q-input
          v-model="limitPermitted"
          dark
          outlined
          class="full-width fs-36 subtitle font-opti"
          :rules="[val => !!val || 'Field is required']"/>
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm"><span class="font-opti">6.</span> Please choose one of the programs you wish to sign up for below</div>
          <div class="q-gutter-sm">
            <q-radio v-model="selectedProgram" dark val="Slave re-training" label="Slave re-training" class="font-opti" />
            <q-radio v-model="selectedProgram" dark val="Voluntary Incarceration" label="Voluntary Incarceration" />
            <q-radio v-model="selectedProgram" dark val="Dominatrix Conditioning" label="Dominatrix Conditioning" />
            <q-radio v-model="selectedProgram" dark val="Protective Custody" label="Protective Custody" />
            <q-radio v-model="selectedProgram" dark val="Officer" label="Officer" />
          </div>
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white fw-600 fs-36 subtitle ">
          <div class="q-mb-sm"><span class="font-opti">7.</span> What position would you like to apply for? </div>
          <q-option-group
            v-model="selectedPosition"
            :options="selectedPositionOptions"
            dark
            class="font-opti fw-500 fs-30 q-gutter-y-md q-mt-md"
          />
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white  fs-36 subtitle ">
          <div class="q-mb-sm font-opti">8. Choose the duration you wish to stay with us (RL Time) </div>
          <q-option-group
            v-model="selectedDuration"
            :options="selectedDurationOptions"
            dark
            class="font-opti fw-500 fs-30 q-gutter-y-md q-mt-md"
          />
        </div>
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white font-opti fs-36 subtitle ">
          <div class="q-mb-sm">9. The facility may experience periods of reduced activity (across different time zones), and during these times, you may be required to remain in isolation with no external communication. Do you understand? </div>
          <q-btn-toggle
            v-model="stayInIsolation"
            push
            dark
            class="fs-36 q-mt-md"
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
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white font-opti fs-36 subtitle ">
          <div class="q-mb-sm">10. Do you have the minimum restraint requirement as given in the rules? </div>
          <q-btn-toggle
            v-model="minimumRestraintRequirement"
            push
            dark
            class="fs-36 q-mt-md"
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
        <div class="column align-center  q-gutter-x-xs q-mt-xl color-white font-opti fs-36 subtitle ">
          <div class="q-mb-sm">11. By submitting this form, you acknowledge your understanding of and agreement to all rules, as well as your compliance with the ToS. </div>
          <q-btn-toggle
            v-model="formAcknowledgement"
            push
            dark
            class="fs-36 q-mt-md"
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
      limitPermitted: '',
      selectedProgram: 'Slave re-training',
      selectedPosition: 'Object',
      selectedPositionOptions: [
        {
          label: 'Object (Extreme RLV Inmates - you will be confined to the facility until your designated time has been completed) - 5 positions available',
          value: 'Object'
        },
        {
          label: 'Useful Object (Switches with fewer restrictions - you will have the possibility of going outside the facility at the staff\'s discretion and will be responsible for objects when staff is not present) - 3 positions available',
          value: 'Useful Object'
        },
        {
          label: 'Facility Maids (Limited RLV Playthings tasked with assisting objects and helping with cleaning, among other duties) - 2 positions available ',
          value: 'Facility Maids'
        },
        {
          label: 'N/A (For those selecting the officer role in the previous question)',
          value: 'N/A'
        }
      ],
      selectedDuration: '7 days (Maximum)',
      selectedDurationOptions: [
        {
          label: '7 days (Maximum)',
          value: '7 days (Maximum)'
        },
        {
          label: 'I have chosen useful object as my response ',
          value: 'I have chosen useful object as my response '
        },
        {
          label: 'I have chosen Facility maid as my response',
          value: 'I have chosen Facility maid as my response'
        },
        {
          label: 'I wish to be at the discretion of the warden',
          value: 'I wish to be at the discretion of the warden'
        }
      ],
      stayInIsolation: 'Yes',
      minimumRestraintRequirement: 'Yes',
      formAcknowledgement: 'Yes',
      userName: '',
      userAge: ''
    }
  },
  watch: {
    selectedProgram: {
      handler (newVal) {
        if (newVal === 'Officer') this.selectedPosition = 'N/A'
        else this.selectedPosition = 'Object'
      }
    },
    selectedPosition: {
      handler (newVal) {
        if (newVal === 'Useful Object') this.selectedDuration = 'I have chosen useful object as my response '
        else if (newVal === 'Facility Maids') this.selectedDuration = 'I have chosen Facility maid as my response'
        else this.selectedDuration = '7 days (Maximum)'
      }
    }
  },
  computed: {
    isAllValid () {
      return this.daysOfWeek && this.onlineHours && this.limitPermitted && this.selectedProgram && this.selectedPosition && this.userName
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
              UserName: this.userName,
              Age: this.userAge,
              DaysOfWeekOnSL: this.daysOfWeek,
              RegularOnlineHours: this.onlineHours,
              OneLimitPermitted: this.limitPermitted,
              SelectedProgram: this.selectedProgram,
              SelectedPosition: this.selectedPosition,
              SelectedDuration: this.selectedDuration,
              StayInIsolation: this.stayInIsolation,
              MinimumRestraintRequirement: this.minimumRestraintRequirement,
              FormAcknowledgement: this.formAcknowledgement
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
