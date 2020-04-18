export default {
  state: {
    appBar: {
      sideNav: {
        visible: false
      }
    }
  },
  getters: {},
  mutations: {
    updateAppBarSideNavStatus(state, { visible }) {
      state.appBar.sideNav.visible = visible;
    }
  },
  actions: {}
};
