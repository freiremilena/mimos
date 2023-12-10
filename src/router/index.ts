import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import SignUp from '@/pages/SignUp.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/sign-up',
    component: SignUp
  },
  {
    path: '/home',
    component: Home,
    // meta: {
    //   requireAuth: true
    // }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from) => {
//   const userStore = useUserStore();
//   const user = userStore.user.username;
//   const papel = userStore.user.role;

//   console.log(
//     `quero ir pra ${to.path}. É protegida? ${to.meta.requireAuth}. Eu sou o ${user} com o papel ${papel}`
//   );
//   if (to.meta.requireAuth && user == null) {
//     return { path: "/login" };
//   }
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { response } = error
//     if (response && response.status != 400) {
//       router.push({
//         name: `${response.status}`
//       })
//     } else {
//       return Promise.reject(error)
//     }
//   }
// )