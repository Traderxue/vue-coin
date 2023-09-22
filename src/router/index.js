import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'homepage',
      component: ()=>import("@/views/homepage.vue"),
      children:[
        {
          path:"",
          component:()=>import("@/views/Home/index.vue")
        },
        {
          path:"/assets",
          component:()=>import("@/views/Assets/index.vue")
        },
        {
          path:"/market",
          component:()=>import("@/views/Market/index.vue")
        },
        {
          path:"/mining",
          component:()=>import("@/views/Mining/index.vue")
        },
        {
          path:"/team",
          component:()=>import("@/views//Team/index.vue")
        }
      ]
    },
  ]
})

export default router
