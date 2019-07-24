import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome'
import Home from './views/Home'
import TodoList from './views/TodoList'
import Me from './views/me'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children:[
                {
                    path: 'todolist',
                    name: 'todolist',
                    component: TodoList,
                },
                {
                    path: 'me',
                    name: 'me',
                    component: Me,
                }
            ]
        }
    ]
})