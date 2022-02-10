import Vue from "vue";
import VueRouter from "vue-router";
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import bus from "../utils/bus";
import { store } from '../store/index.js'
// import crateListView from '../views/CreateListView.js'



Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            // component: crateListView('NewsView'),
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
    
                store.dispatch('FETCH_LIST', to.name)
                .then(()=>{
                    console.log('fetched');
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
            },
        },
        {
            path: '/ask',
            name: 'ask',
            // component: crateListView('AskView'),
            component: AskView,
            beforeEnter:(to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(()=>{
                    console.log('fetched');
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: crateListView('JobsView'),
            component: JobsView,
            beforeEnter:(to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(()=>{
                    console.log('fetched');
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView
        },
        {
            path: '/item/:id',
            name: 'item',
            component: ItemView
        }

    ]
})
