import { defineStore } from "pinia";
import libertarianVision, { type LVResponseType } from "~/services/libertarian-vision";

export type LastArticleType = {
  id: string;
  title: string;
  image: string;
  categories?: { name: string; label: string }[];
};

type ArticleStoreType = {
  last: LastArticleType[];
};

export const useArticleStore = defineStore("article", {
  state: (): ArticleStoreType => ({
    last: [],
  }),
  actions: {
    async getLastArticles() {
      const response = await libertarianVision.post<LVResponseType<{ articleList: LastArticleType[] }>>("", {
        query: `query { articleList  { id title image categories { name label } } }`,
      });
      this.$state.last = response.data?.data?.articleList;

      return response;
    },
    async getFakeLastArticles() {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      this.$state.last = [
        {
          id: "1",
          title: "FARMÁCIA POPULAR tem UMA FRAUDE a cada DOIS DIAS: nem nisso o ESTADO consegue ser eficiente",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVx9RzjIz7X55Rp_AKXrDvxC41lzJVba-dw&s",
          categories: [
            { name: "corrupção", label: "Corrupção" },
            { name: "estado", label: "Estado" },
          ],
        },
        {
          id: "2",
          title: "O que você pode fazer se não tiver SUS?",
          image: "https://temastcc.com.br/wp-content/uploads/2022/03/banner-sus.jpg",
          categories: [{ name: "saúde", label: "Saúde" }],
        },
        {
          id: "3",
          title: "O Papa Francisco diz que o aborto é INJUSTO e INMORAL",
          image: "https://arquidiocesejuizdefora.org.br/wp-content/uploads/2023/09/BANNER_1920x1080-2-1536x864-1.jpg",
          categories: [{ name: "religião", label: "Religião" }],
        },
        {
          id: "4",
          title: "Jair Bolsonaro diz que o Brasil é 'um país de cidadãos imigrantes'",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nH1CyD7Is7XH6F5BgnBJUfRTpXgLBD3KDEych7XL3Q&s",
          categories: [{ name: "política", label: "Política" }],
        },
        {
          id: "5",
          title: "O COVENÇÃO é mais eficaz do que a EDUCAÇÃO em reduzir crimes, diz estudo",
          image:
            "https://img.freepik.com/fotos-gratis/organizacao-do-dia-da-educacao-em-uma-mesa-com-espaco-de-copia_23-2148721266.jpg",
          categories: [
            { name: "educação", label: "Educação" },
            { name: "crime", label: "Crime" },
          ],
        },
        {
          id: "6",
          title: "Itaú traz MADONNA para o BRASIL, mas a prefeitura do Rio quer levar todo o crédito.",
          image: "https://prefeitura.rio/wp-content/uploads/2024/04/Madonna2.jpg",
          categories: [{ name: "política", label: "Política" }],
        },
      ];
    },
  },
});

export default useArticleStore;
