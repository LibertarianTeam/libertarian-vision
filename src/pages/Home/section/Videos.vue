<script>
import Title from "@/components/Title";
import Carousel from "@/components/Carousel";

export default {
  name: "HomeVídeos",
  components: {
    "c-title": Title,
    "c-carousel": Carousel
  },
  data() {
    return {
      items: [
        {
          title:
            "Presidente das Filipinas manda matar quem descumprir quarentena.",
          img: "https://i.ibb.co/n0PJpgL/image.png",
          tag: "Vídeo"
        },
        {
          title: "Estão faltando mortos nessa conta.",
          img: "https://i.ibb.co/WFhvVym/image.png",
          tag: "Vídeo"
        },
        {
          title: "Chegou a hora de o Brasil ter um Banco Central independente?",
          img: "https://i.ibb.co/DLdmLWW/image.png",
          tag: "Vídeo"
        },
        {
          title: "Venezuela está afundando seus próprios navios.",
          img: "https://i.ibb.co/LpHFy7n/image.png",
          tag: "Vídeo"
        },
        {
          title:
            "Presidente das Filipinas manda matar quem descumprir quarentena.",
          img: "https://i.ibb.co/n0PJpgL/image.png",
          tag: "Vídeo"
        },
        {
          title: "Estão faltando mortos nessa conta.",
          img: "https://i.ibb.co/WFhvVym/image.png",
          tag: "Vídeo"
        },
        {
          title: "Chegou a hora de o Brasil ter um Banco Central independente?",
          img: "https://i.ibb.co/DLdmLWW/image.png",
          tag: "Vídeo"
        },
        {
          title: "Venezuela está afundando seus próprios navios.",
          img: "https://i.ibb.co/LpHFy7n/image.png",
          tag: "Vídeo"
        }
      ]
    };
  }
};
</script>

<template lang="html">
  <section class="s-videos">
    <c-title>Últimos Vídeos do Canal</c-title>
    <c-carousel :items="items" :center="false"></c-carousel>
  </section>
</template>

<style lang="css" scoped>
.c-carousel {
  width: 100%;
  margin: 0 auto;
}
</style>
