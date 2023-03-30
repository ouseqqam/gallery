<template>
    <div class='galleryItem' @click="onClick()">
      <div class='image'>
        <img :src='image.urls.small' alt="random photo" />
      </div>
      <div class='underImg' >
        <p>{{ image.user.name }}</p>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
        image: {
            type: Object,
            required: true
        }
    },
    methods: {
            onClick () {
                console.log(this.image)
                this.$router.push('/image/' + this.image.id)
            }
    }
  }
</script>


<style scoped>
    .galleryItem {
      width: 100%;
      height: 100%;
    }
    .image {
      width: 100%;
      height: 100%;
    }

    .image img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    .underImg {
      display: flex;
      justify-content: space-between;
    }
</style>