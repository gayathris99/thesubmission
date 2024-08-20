<template>
  <div class="bg-image color-white font-helsa">
    <div class="header row items-center align-center justify-center q-gutter-x-xl q-pt-xl fw-900 fs-48">
      <div class="cursor-pointer" @click="goTo('home')">HOME</div>
      <div  class="cursor-pointer" @click="goTo('requirements')">REQUIREMENTS</div>
      <div  class="cursor-pointer" @click="goTo('rules')">RULES</div>
      <div  class="cursor-pointer" @click="goTo('contact')">CONTACT</div>
    </div>
    <div class="gallery-container row items-center align-center justify-evenly q-pb-xl q-px-md">
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image1.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image28.jpeg" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image20.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image15.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image2.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image3.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image25.jpeg" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image17.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image21.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image5.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image29.jpeg" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image7.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image22.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image9.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image10.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image27.jpeg" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image6.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image19.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image23.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image8.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image4.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image24.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image11.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image12.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image26.jpeg" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image16.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image13.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image14.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image18.png" alt="">
      </div>
      <div class="col-4 q-mt-xl">
        <img src="~assets/TSMGallery/image30.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryPage',
  methods: {
    goTo (name) {
      this.$router.push({
        name
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('~assets/blackbackground.jpg');
}
.gallery-container {
  img {
    width: 450px;
    height: 300px;
  }
}
</style>

