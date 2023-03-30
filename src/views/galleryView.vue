<template>
    <div class="body">
        <h1>Image Gallery</h1>
        <div class="container">
            <GalleryComponent v-for="image in images" :key="image.id" :image="image" />
        </div>
    </div>
</template>
  
  
<script>
  // @ is an alias to /src
  
    import GalleryComponent from '@/components/galleryComponent.vue'
    import { fetchImages } from '@/services/fetchImages'
    
    export default {
        name: "galleryComponent",
        data() {
            return {
                images: []
            };
        },
        async created() {
            try {
                this.images = await fetchImages();
            }
            catch (err) {
                console.log(err);
            }
        },
        components: { GalleryComponent },
    }
</script>


<style scoped>
    .body {
      margin-top: 80px;
    }
      
    .container {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 60px;
    }
</style>