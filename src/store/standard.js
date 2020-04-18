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
  getters: {},
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
