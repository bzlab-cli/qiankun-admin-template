import '@/public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import store from '@/store';
import routers from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { microStore } from '@/store/global';

const __qiankun__ = window.__POWERED_BY_QIANKUN__;
let router = null;
let instance = null;

const render = ({ routerBase, container } = {}) => {
  router = createRouter({
    history: createWebHistory(__qiankun__ ? routerBase : '/'),
    routes: routers,
  });
  instance = createApp(App);
  instance
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount(container ? container.querySelector('#app') : '#app');
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  microStore(props);
  render(props);
}

export async function unmount() {
  instance.unmount();
  instance = null;
}
