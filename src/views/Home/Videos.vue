<script>
import Title from "@/views/Home/Title";
import Carousel from "@/components/Carousel";

export default {
  name: "HomeVídeos",
  components: {
    "m-title": Title,
    "c-carousel": Carousel
  },
  data() {
    return {
      items: [
        {
          title:
            "Presidente das Filipinas manda matar quem descumprir quarentena.",
          img: "https://i.ibb.co/n0PJpgL/image.png",
          tag: "Vídeo",
          externalImg: true
        },
        {
          title: "Estão faltando mortos nessa conta.",
          img: "https://i.ibb.co/WFhvVym/image.png",
          tag: "Vídeo",
          externalImg: true
        },
        {
          title: "Chegou a hora de o Brasil ter um Banco Central independente?",
          img: "https://i.ibb.co/DLdmLWW/image.png",
          tag: "Vídeo",
          externalImg: true
        },
        {
          title: "Venezuela está afundando seus próprios navios.",
          img: "https://i.ibb.co/LpHFy7n/image.png",
          tag: "Vídeo",
          externalImg: true
        },
        {
          title:
            "Presidente das Filipinas manda matar quem descumprir quarentena.",
          img: "https://i.ibb.co/n0PJpgL/image.png",
          tag: "Vídeo",
          externalImg: true
        },
        {
          title: "Estão faltando mortos nessa conta.",
          img: "https://i.ibb.co/WFhvVym/image.png",
          tag: "Vídeo",
          externalImg: true
        },
        {
          title: "Chegou a hora de o Brasil ter um Banco Central independente?",
          img: "https://i.ibb.co/DLdmLWW/image.png",
          tag: "Vídeo",
          externalImg: true
        },
        {
          title: "Venezuela está afundando seus próprios navios.",
          img: "https://i.ibb.co/LpHFy7n/image.png",
          tag: "Vídeo",
          externalImg: true
        }
      ]
    };
  }
};
</script>

<template lang="html">
  <div class="home-videos">
    <m-title>Últimos Vídeos do Canal</m-title>
    <c-carousel :items="items" :centerBG="false"></c-carousel>
  </div>
</template>

<style lang="css" scoped>
.carousel {
  width: 100%;
  margin: 0 auto;
}
</style>
