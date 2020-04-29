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
    "sc-help": Help,
    "sc-news": News,
    "sc-funnel": Funnel,
    "sc-videos": Videos,
    "sc-numbers": Numbers,
    "sc-newsletter": Newsletter
  }
};
</script>

<template>
  <main id="home">
    <sc-newsletter></sc-newsletter>
    <sc-funnel></sc-funnel>
    <sc-videos></sc-videos>
    <sc-help></sc-help>
    <sc-news></sc-news>
    <sc-numbers></sc-numbers>
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

.sc-newsletter {
  grid-area: newsletter;
}

.sc-funnel {
  grid-area: funnel;
}

.sc-videos {
  grid-area: videos;
}

.sc-help {
  grid-area: help;
}

.sc-news {
  grid-area: news;
}

.sc-numbers {
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
