<template>
  <div>
      <section>
          <UserProfile :info="fetchedItem">
              <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
              <div slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</div>
          </UserProfile>
      </section>
      <section>
        <h2>{{ fetchedItem.title }}</h2>   
      </section>
      <section>
          <div v-html="fetchedItem.content"></div>
          <!-- 질문댓글 -->
      </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex';
export default {
    components:{
        UserProfile,
    },
    computed:{
        ...mapGetters(['fetchedItem'])
    },
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',itemId);
        
    }

}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>