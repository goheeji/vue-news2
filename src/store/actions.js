import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'

export default {
    FETCH_NEWS(context){
        fetchNewsList()
        .then(({data}) => {
            context.commit('SET_NEWS', data);
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_ASKS({commit}){
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASKS', data)
        })
        .catch(function(error){
            console.log(error);
        })

    },
    FETCH_JOBS({commit}){
        fetchJobsList()
        .then(({data})=>{
            commit('SET_JOBS', data)
        })
        .catch(function(error){
            console.log(error);
        })

    }
}