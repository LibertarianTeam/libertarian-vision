export default {
  state: {
    appBar: {
      sideNav: {
        visible: false
      }
    },
    window: {
      width: 0,
      height: 0
    }
  },
  getters: {
    getAsset() {
      return img => require(`@/assets/${img}`);
    },

    xsWindow(state) {
      return state.window.width <= 480;
    },

    smWindow(state) {
      return state.window.width <= 600;
    },

    mdWindow(state) {
      return state.window.width <= 800;
    },

    mlWindow(state) {
      return state.window.width <= 1000;
    },

    lgWindow(state) {
      return state.window.width <= 1366;
    },

    xlWindow(state) {
      return state.window.width > 1366;
    }
  },
  mutations: {
    updateAppBarSideNavStatus(state, { visible }) {
      state.appBar.sideNav.visible = visible;
    },

    updateWindowSize(state) {
      state.window.width = window.innerWidth;
      state.window.height = window.innerHeight;
    }
  },
  actions: {}
};
