<template>
  <div class="home">
    <GalleryView />
  </div>
</template>

<script>
// @ is an alias to /src
import GalleryView from './galleryView.vue';

export default {
  name: 'HomeView',
  components: {
    GalleryView,
},  
}
</script>