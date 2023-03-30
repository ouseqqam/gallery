<template>
    <div>
        <h1>Image details</h1>
        <div class='galleryItem'>
            <div class='image'>
                <img :src='image.urls.small' alt="random photo" />
            </div>
            <div class='details' >
                <p>Name: {{ image.user.name }}</p>
                <p>Description: {{ image.alt_description }}</p>
            </div>
        </div>
    </div>
</template>

<script>

import { fetchImage } from '@/services/fetchImages'
export default {
    data () {
        return {
            image: {}
        }
    },
    props: ['id'],
    async created() {
        try {
            this.image = await fetchImage(this.id)
            console.log(this.image)
        }
        catch (err) {
            console.log(err);
        }
    },
}
</script>