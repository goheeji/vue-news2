import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        asks:[],
        jobs:[],
        user:{},
        item:{},
        list:[],
    },
    getters:{
        fetchedAsks(state){
            return state.asks;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    // mutations: mutations
    mutations,
    actions,
})