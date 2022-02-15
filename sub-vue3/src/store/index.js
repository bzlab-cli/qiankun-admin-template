import Vuex from 'vuex';

const modulesFiles = require.context('./modules', true, /\.js$/);

// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = Vuex.createStore({
  modules,
  // getters
});

export default store;
