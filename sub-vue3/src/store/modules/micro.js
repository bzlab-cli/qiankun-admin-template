export default {
  namespaced: true,
  state: {
    msg: '',
    name: '',
    setGlobalState: null,
  },
  mutations: {
    SET_GLOBAL_STATE(state, payload) {
      state.setGlobalState(payload);
    },
    SET_STATE(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
};
