<script>
import Title from "@/views/Home/Title";
import Divider from "@/components/Divider";
import Carousel from "@/components/Carousel";

export default {
  name: "HomeVideos",
  components: {
    "m-title": Title,
    "c-divider": Divider,
    "c-carousel": Carousel
  },
  data() {
    return {
      items: [
        {
          title: "Venezuela está afundando seus próprios navios",
          img: "imgs/typewriter.png",
          tag: "Video",
          externalImg: false
        },
        {
          title: "Venezuela está afundando seus próprios navios",
          img: "imgs/mic.png",
          tag: "Video",
          externalImg: false
        },
        {
          title: "Venezuela está afundando seus próprios navios",
          img: "imgs/news.png",
          tag: "Video",
          externalImg: false
        },
        {
          title: "Venezuela está afundando seus próprios navios",
          img: "imgs/typewriter.png",
          tag: "Video",
          externalImg: false
        },
        {
          title: "Venezuela está afundando seus próprios navios",
          img: "imgs/mic.png",
          tag: "Video",
          externalImg: false
        },
        {
          title: "Venezuela está afundando seus próprios navios",
          img: "imgs/news.png",
          tag: "Video",
          externalImg: false
        },
        {
          title: "Venezuela está afundando seus próprios navios",
          img: "imgs/typewriter.png",
          tag: "Video",
          externalImg: false
        }
      ]
    };
  }
};
</script>

<template lang="html">
  <div class="home-videos">
    <c-divider></c-divider>
    <m-title>Últimos Vídeos do Canal</m-title>

    <c-carousel :items="items"></c-carousel>
  </div>
</template>

<style lang="css" scoped>
.carousel {
  width: 100%;

  margin: 0 auto;
}
</style>
