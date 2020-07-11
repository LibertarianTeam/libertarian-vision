export const state = () => ({
  theme: 'light',
  showApp: false,
  video: {
    list: []
  },
  article: {
    list: []
  },
  window: {
    width: 0,
    height: 0
  }
})

export const getters = {
  xsmWindow(state) {
    return state.window.width <= 360
  },
  dsmWindow(state) {
    return state.window.width <= 480
  },
  lsmWindow(state) {
    return state.window.width <= 640
  },
  smdWindow(state) {
    return state.window.width <= 800
  },
  dmdWindow(state) {
    return state.window.width <= 1024
  },
  lmdWindow(state) {
    return state.window.width <= 1366
  },
  slgWindow(state) {
    return state.window.width <= 1620
  },
  dlgWindow(state) {
    return state.window.width <= 1920
  },
  xlgWindow(state) {
    return state.window.width > 1920
  }
}

export const mutations = {
  updateTheme(state, { theme } = { theme: 'next' }) {
    if (theme !== 'next') return (state.theme = theme)

    if (state.theme === 'light') state.theme = 'dark'
    else state.theme = 'light'

    localStorage.setItem('theme', state.theme)
  },
  updateShowAppStatus(state, { show }) {
    state.showApp = show
  },
  updateVideoList(state, { videoList }) {
    state.video.list = videoList
  },
  updateArticleList(state, { articleList }) {
    state.article.list = articleList
  },
  updateWindowSize(state) {
    state.window.width = window.innerWidth
    state.window.height = window.innerHeight
  }
}

export const actions = {
  async getVideoList({ commit }) {
    const { videoList } = (
      await this.$axios.$post('', {
        query: `
          query {
            videoList {
              id
              title
              image
              category {
                name
                label
              }
            }
          }
        `
      })
    ).data

    commit('updateVideoList', { videoList })
  },
  async getArticleList({ commit }) {
    const { articleList } = (
      await this.$axios.$post('', {
        query: `
          query {
            articleList {
              id
              title
              image
              category {
                name
                label
              }
            }
          }
        `
      })
    ).data

    commit('updateArticleList', { articleList })
  }
}
