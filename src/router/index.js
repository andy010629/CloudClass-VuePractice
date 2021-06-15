import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import courses from '../components/courses.vue'
import StuManage from '../components/StuManage.vue'
import coursesManage from '../components/coursesManage.vue'
import test from '../components/test.vue'
const routes = [{
    path: '/courses',
    component: courses
}, {
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/login',
    component: Login
}, {
    path: '/student_manage',
    component: StuManage
}, {
    path: '/courses_manage',
    component: coursesManage
}, {
    path: '/test',
    component: test
}, {
    path: '/:pathMath(.*)*',
    redirect: '/'
}, ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})


export default router