import { defineStore } from "pinia";
import libertarianVision, { LVResponseType } from "~/services/libertarian-vision";

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
  },
});

export default useVideoStore;
