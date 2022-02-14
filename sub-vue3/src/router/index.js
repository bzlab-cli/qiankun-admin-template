import Home from '@/views/Home.vue';
import Test from '@/views/Test.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];

export default routes;
