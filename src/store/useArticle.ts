import { defineStore } from "pinia";
import libertarianVision, { LVResponseType } from "~/services/libertarian-vision";

export type LastArticleType = {
  id: string;
  title: string;
  image: string;
  category: { name: string; label: string };
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
        query: `query { articleList  { id title image category { name label } } }`,
      });
      this.$state.last = response.data?.data?.articleList;

      return response;
    },
  },
});

export default useArticleStore;
