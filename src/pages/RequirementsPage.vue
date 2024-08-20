<template>
  <div class="bg-image font-helsa color-white">
    <div class="header row items-center align-center justify-center q-gutter-x-xl q-pt-xl fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('home')">HOME</div>
      <div  class="cursor-pointer" @click="goTo('rules')">RULES</div>
      <div  class="cursor-pointer" @click="goTo('gallery')">GALLERY</div>
      <div  class="cursor-pointer" @click="goTo('contact')">CONTACT</div>
    </div>
    <div class="column q-mt-xl rules q-px-xl q-mx-xl ">
      <div class="fs-40 fw-700">Requirements for application <span class="font-opti">-</span> Objects</div>
      <ul class="q-mt-md fs-34 font-opti">
        <li v-for="(objectRequirement, id) in objectRequirements" :key="id" class=" q-mt-sm">{{ objectRequirement }}</li>
      </ul>
    </div>
    <div class="column q-mt-lg rules q-px-xl q-mx-xl ">
      <div class="fs-40 fw-700">Requirements for application <span class="font-opti">-</span> Officers</div>
      <ul class="q-mt-md fs-34 font-opti">
        <li v-for="(officerRequirement, id) in officerRequirements" :key="id" class=" q-mt-sm">{{ officerRequirement }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'RequirementsPage',
  methods: {
    goTo (name) {
      this.$router.push({
        name
      })
    }
  },
  data () {
    return {
      objectRequirements: [
        'Mesh AVI (Head & Body - Ruth body and head will not match the criteria).',
        'Must own RR Police cuffs + Applicable gag (SCOwners and other restraints a plus).',
        'Configured and accessible RLV folder.',
        'Must have consent from your Master/Mistress.',
        'Above 90 days old in SL and 18+ in RL.',
        'Basic to moderate RP skills.',
        'Commitment to sentenced time and endurance to certain periods of isolation.'
      ],
      officerRequirements: [
        'Mesh AVI (Head & Body - Ruth body and head will not match the criteria).',
        'Basic to moderate RP skills.',
        'Experience in handling RR restraints.',
        'Commitment to minimum time in training handling objects - this is not a full time job, but if you\'re applying you must have some time allotted to the place when you\'re around.',
        'Above 90 days old in SL and 18+ in RL.'
      ],
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
.rules {
  letter-spacing: 0.075rem;
}
</style>
