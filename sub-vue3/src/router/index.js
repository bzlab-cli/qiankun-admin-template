import Home from '@/views/Home.vue';
import Test from '@/views/Test.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // component: () => import('@/views/Home.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    // component: () => import('@/views/Test.vue'),
  },
];

export default routes;
