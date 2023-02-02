<template lang="">
  <div>
    <v-container>
      <v-card>
        <v-row>
          <v-col lg="6" sm="6" class="pl-5">
            <h2 class="subtitle">Tes Insfosy Irwan Cahyanto</h2>
            <p style="font-size:10px">{{ new Date() }}</p>
          </v-col>        
          <v-col lg="6" sm="6" class="text-center">
              <div class="links">
                <nuxt-link to="/dashboard" class="btnLink" v-if="isLoggedIn">Dashboard</nuxt-link>
                <a class="btnLink" v-if="isLoggedIn" @click="handleLogOut">Log Out</a>
                <nuxt-link to="/login" class="btnLink" v-else>Login</nuxt-link>      
              </div>
          </v-col>
        </v-row>
      </v-card> 
    </v-container>
  </div>
</template>
<script>
export default {
   computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
    methods: {
    handleLogOut() {
      alert("apakah ingin logout ?")
      this.$store.dispatch('logOut')
    }
  }
}
</script>
<style scoped>
  a.btnLink {
    text-decoration: none;
    padding: 20px;
    color: black;
  }
</style>