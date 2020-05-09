<script>
import GenerateMetaInfo from "@/meta/info";

import Help from "@/pages/Home/section/Help";
import News from "@/pages/Home/section/News";
import Funnel from "@/pages/Home/section/Funnel";
import Videos from "@/pages/Home/section/Videos";
import Numbers from "@/pages/Home/section/Numbers";
import Newsletter from "@/pages/Home/section/Newsletter";

export default {
  name: "Home",
  meta: GenerateMetaInfo({
    page: {
      title: "Home"
    }
  }),
  components: {
    "s-help": Help,
    "s-news": News,
    "s-funnel": Funnel,
    "s-videos": Videos,
    "s-numbers": Numbers,
    "s-newsletter": Newsletter
  }
};
</script>

<template>
  <main id="p-home">
    <s-newsletter></s-newsletter>
    <s-funnel></s-funnel>
    <s-videos></s-videos>
    <s-help></s-help>
    <s-news></s-news>
    <s-numbers></s-numbers>
  </main>
</template>

<style lang="css" scoped>
#p-home {
  display: grid;

  grid-gap: 24px 12px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "s-newsletter s-newsletter s-newsletter s-funnel s-funnel s-funnel"
    "s-videos s-videos s-videos s-videos s-videos s-videos"
    "s-help s-help s-news s-news s-news s-news"
    "s-numbers s-numbers s-news s-news s-news s-news";
}

.s-newsletter {
  grid-area: s-newsletter;
}

.s-funnel {
  grid-area: s-funnel;
}

.s-videos {
  grid-area: s-videos;
}

.s-help {
  grid-area: s-help;
}

.s-news {
  grid-area: s-news;
}

.s-numbers {
  grid-area: s-numbers;
}

@media only screen and (max-width: 1024px) {
  #p-home {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "s-newsletter s-funnel"
      "s-videos s-videos"
      "s-news s-news"
      "s-numbers s-help";
  }
}

@media only screen and (max-width: 800px) {
  #p-home {
    grid-template-areas:
      "s-newsletter s-newsletter"
      "s-funnel s-funnel"
      "s-videos s-videos"
      "s-news s-news"
      "s-numbers s-numbers"
      "s-help s-help";
  }
}
</style>
