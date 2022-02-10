import { 
    fetchNewsList, 
    fetchAskList, 
    fetchJobsList,
    fetchList, 
    fetchUserInfo, 
    fetchAskInfo } from '../api/index.js'

export default {
    async FETCH_NEWS(context){
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_ASKS(context){
        const response = await fetchAskList();
        context.commit('SET_ASKS', response.data);
        return response;
    },
    async FETCH_JOBS(context){
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        return response;
    },
    async FETCH_USER(context, name){
        const response = await fetchUserInfo(name);
        context.commit('SET_USER', response.data);
        return response;
    },
    // FETCH_USER({commit}, name){
    //     return fetchUserInfo(name)
    //     .then(({data})=>{
    //         commit('SET_USER', data)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    async FETCH_ITEM(context, itemId){
        const response = await fetchAskInfo(itemId);
        context.commit('SET_ITEM', response.data);
        return response;
    },
    // FETCH_ITEM({commit}, itemId){
    //     return fetchAskInfo(itemId)
    //     .then(({data})=>{
    //         commit('SET_ITEM', data)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    async FETCH_LIST(context, pageName){
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;
    }
    // FETCH_LIST({commit}, pageName){
    //     fetchList(pageName)
    //     .then(response=>{
    //         commit('SET_LIST', response.data)
    //         return response;

    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    // }
}