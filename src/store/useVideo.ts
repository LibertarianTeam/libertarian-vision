import { defineStore } from "pinia";
import libertarianVision, { type LVResponseType } from "~/services/libertarian-vision";

export type LastVideoType = {
  id: string;
  title: string;
  image: string;
  category: { name: string; label: string };
};

type VideoStoreType = {
  last: LastVideoType[];
};

export const useVideoStore = defineStore("video", {
  state: (): VideoStoreType => ({
    last: [],
  }),
  actions: {
    async getLastVideos() {
      const response = await libertarianVision.post<LVResponseType<{ videoList: LastVideoType[] }>>("", {
        query: `query { videoList { id title image category { name label } } }`,
      });
      this.$state.last = response.data?.data?.videoList;

      return response;
    },
    async getFakeLastVideos() {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      this.$state.last = [
        {
          id: "1",
          title: "Itaú traz MADONNA para o BRASIL, mas a prefeitura do Rio quer levar todo o crédito.",
          image: "https://prefeitura.rio/wp-content/uploads/2024/04/Madonna2.jpg",
          category: { name: "politica", label: "Política" },
        },
        {
          id: "2",
          title: "MEDIDA PROVISÓRIA que vai deixar a energia elétrica MAIS CARA e AINDA PIOR",
          image:
            "https://previews.123rf.com/images/liravega258/liravega2581701/liravega258170100050/69928508-word-idea-business-vector-illustration-design-banner-creative-thinking-analysis-education-research.jpg",
          category: { name: "economia", label: "Economia" },
        },
        {
          id: "3",
          title: "Empresas precisam PAGAR MAIS CARO para ter FUNCIONÁRIOS PRESENCIAIS",
          image:
            "https://ichef.bbci.co.uk/news/1024/branded_portuguese/ada9/live/38ed8aa0-f5c8-11ee-9525-d516021ae5e0.jpg",
          category: { name: "trabalho", label: "Trabalho" },
        },
        {
          id: "4",
          title: "A história de Rosângela Lula da Silva, a Janja da Massa!",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XPF1Vc98VTnKs_dKU0JSj9bg6Ouhs9UkWQ&s",
          category: { name: "politica", label: "Política" },
        },
        {
          id: "5",
          title: "Novos vírus são mais perigosos do que os existentes, diz estudo",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqotDqhKkqkSRDw6rJ93oApu9xbjbzrrYsQ&s",
          category: { name: "ciência", label: "Ciência" },
        },
        {
          id: "6",
          title: "Vacina contra Covid-19 não é imune a contaminação, diz estudo",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqotDqhKkqkSRDw6rJ93oApu9xbjbzrrYsQ&s",
          category: { name: "ciência", label: "Ciência" },
        },
        {
          id: "7",
          title: "Vacina da Covid-19 pode ser eficaz mesmo se o paciente não tiver sintomas, diz estudo",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqotDqhKkqkSRDw6rJ93oApu9xbjbzrrYsQ&s",
          category: { name: "ciência", label: "Ciência" },
        },
        {
          id: "8",
          title: "Fazer vacina contra Covid-19 é uma empresa gigante e demanda muita tecnologia e recursos",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqotDqhKkqkSRDw6rJ93oApu9xbjbzrrYsQ&s",
          category: { name: "economia", label: "Economia" },
        },
      ];
    },
  },
});

export default useVideoStore;
