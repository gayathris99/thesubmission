<template>
  <div class="bg-image color-white font-helsa">
    <div class="header row items-center align-center justify-center q-gutter-x-xl q-pt-xl fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('home')">HOME</div>
      <div  class="cursor-pointer" @click="goTo('requirements')">REQUIREMENTS</div>
      <div  class="cursor-pointer" @click="goTo('gallery')">GALLERY</div>
      <div  class="cursor-pointer" @click="goTo('contact')">CONTACT</div>
    </div>
    <div class="column align-center justify-center items-center q-mt-xl rules q-px-xl q-mx-xl ">
      <div class="fs-36 fw-600 text-center subtitle animate-flicker">
       The purpose of this facility is to be exclusive, and only ten applicants will be accepted as inmates within the facility at a time. The reasoning is not meant to be an elitist attitude, but the facility is not meant for everyone, and we want our guards to work intimately with the inmates, thus we cannot handle a large population of inmates. The purpose of this facility is to be exclusive, and only ten applicants will be accepted as inmates within the facility at a time. The reasoning is not meant to be an elitist attitude, but the facility is not meant for everyone, and we want our guards to work intimately with the inmates, thus we cannot handle a large population of inmates.
      </div>
      <div class="fs-36 fw-600 text-center subtitle animate-flicker q-mt-lg">
       The selection process for our facility includes a thorough interview to ensure we find individuals who truly align with our focus on submission and control. We seek those who are naturally inclined to embrace a life of subjugation and transformation, rather than considering applicants indiscriminately. Due to a high volume of applications, there may be extended waiting periods. Please refrain from inquiring about the status of your interview; instead, reach out only if you have specific questions about the facility or the application process. If your submission meets our criteria, we will contact you for an interview, keeping in mind the current influx of applications and the time required to review them.
      </div>
      <ul class="q-mt-md fs-34 fw-500 font-opti">
        <li v-for="(rule, id) in rules" :key="id" class=" q-mt-sm">{{ rule }}</li>
      </ul>
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
  },
  data () {
    return {
      rules: [
        'Objects will always keep their RLV on auto, cheating out will result in an automatic ban. In case of emergencies, send a notecard to the warden of the facility, and they reserve the right to decide what constitutes as an emergency.',
        'Objects will need to change their names as they lose the rights to their personal identies during their incarceratation.',
        'Objects will be allowed an IM time of 30 minutes a day with one-time visitor access.',
        'Objects will be incarcerated a maximum of one week - RL time, additional sentencing may be added based on their behavior.',
        'Objects must own RR Police Set as a minimum requirement for restraints, and - "Deluxe gag or similar" is a minimum requirement for gags; and other restraints will be an added bonus along with SCOwners or similar if you possses already. TSM will not provide objects any wearable restraints.',
        'Objects must have a mesh body and a mesh head.',
        'Objects must understand that this is an extreme RLV and realism focused facility and all outside access will be cut-off with the exception of the warden.',
        'Objects will only be allowed to communicate with trainers and other objects in local and local OOC will be the only source of communication in case of emergencies.',
        'Objects will be selected based on their responses in the application and only after an interview.',
        'Objects will only be allowed one limit apart from the facilty\'s limits which are as follows - "Scat, EOA, Snuff, Ageplay, Permanent damage & gore"',
        'Objects will oblige to all tasks and orders handed by the guards and will always address them as "Sir" or "Miss."',
        'Objects will send an NC to the warden in case of any concerns or emergencies and it will be under the warden\'s discretion to take a call.',
        'Additional rules may be implemented as necessary.'

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // height: 100vh;
  background-image: url('~assets/blackbackground.jpg');
}
.rules {
  letter-spacing: 0.075rem;
}
</style>

