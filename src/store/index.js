export function state() {
  return {
    theme: 'light',
    appBar: {
      sideNav: {
        visible: false
      }
    },
    window: {
      width: 0,
      height: 0
    }
  }
}

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
  updateAppBarSideNavStatus(state, { visible }) {
    state.appBar.sideNav.visible = visible
  },
  updateWindowSize(state) {
    state.window.width = window.innerWidth
    state.window.height = window.innerHeight
  }
}

export const actions = {}
