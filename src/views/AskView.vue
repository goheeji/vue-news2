<template>
  <div>
      <div v-for="ask in fetchedAsks" v-bind:key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        // #1
        // ask(){
        //     return this.$store.state.ask;
        // }
        //  #2
        // ...mapState({
        //     ask: state => state.asks
        // }),
        // // #3 객체 표기법
        // ...mapGetters({
        //     fetchedAsks: 'fetchedAsks'
        // })

        // #4 배열 표기법
        ...mapGetters([
            'fetchedAsks'
        ])

    },
    created(){
        this.$store.dispatch('FETCH_ASKS');
    }
}
</script>

<style>

</style>