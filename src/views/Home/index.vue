<script>
import Help from "@/views/Home/Help";
import News from "@/views/Home/News";
import Funnel from "@/views/Home/Funnel";
import Videos from "@/views/Home/Videos";
import Numbers from "@/views/Home/Numbers";
import Newsletter from "@/views/Home/Newsletter";

export default {
  name: "Home",
  components: {
    "m-home-help": Help,
    "m-home-news": News,
    "m-home-funnel": Funnel,
    "m-home-videos": Videos,
    "m-home-numbers": Numbers,
    "m-home-newsletter": Newsletter
  }
};
</script>

<template>
  <main id="home">
    <m-home-newsletter></m-home-newsletter>
    <m-home-funnel></m-home-funnel>
    <m-home-videos></m-home-videos>
    <m-home-help></m-home-help>
    <m-home-news></m-home-news>
    <m-home-numbers></m-home-numbers>
  </main>
</template>

<style lang="css" scoped>
#home {
  display: grid;

  grid-gap: 24px 12px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "newsletter newsletter newsletter funnel funnel funnel"
    "videos videos videos videos videos videos"
    "help help news news news news"
    "numbers numbers news news news news";
}

.home-newsletter {
  grid-area: newsletter;
}

.home-funnel {
  grid-area: funnel;
}

.home-videos {
  grid-area: videos;
}

.home-help {
  grid-area: help;
}

.home-news {
  grid-area: news;
}

.home-numbers {
  grid-area: numbers;
}

@media only screen and (max-width: 1024px) {
  #home {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "newsletter funnel"
      "videos videos"
      "news news"
      "numbers help";
  }
}

@media only screen and (max-width: 800px) {
  #home {
    grid-template-areas:
      "newsletter newsletter"
      "funnel funnel"
      "videos videos"
      "news news"
      "numbers numbers"
      "help help";
  }
}
</style>
