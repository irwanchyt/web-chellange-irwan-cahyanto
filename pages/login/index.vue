<template>
  <div>
     <div class="mt-10">
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                 <div v-if="error">
                    <v-snackbar
                        value="true"
                        absolute
                        right
                        timeout="3000"
                        color="red"
                        top
                        >
                            Username atau password Salah 
                    </v-snackbar>
                </div> 
                
                  <v-card class="elevation-12">
                    <div class="headerImg">
                        <img src="~/assets/images/header-login.png" style="width:35%">
                        <img src="~/assets/images/logo.png" class="logoInf">
                    </div>
                  
                    <div style="padding: 15px;">
                      <h3>Login</h3>
                      <p style="font-size: 10px;
                      font-weight: 700;">Please sign in to continue</p>
                    </div>                   
                     <v-card-text>                  
                       
                        <v-form @submit.prevent="handlelogin()">
                           <v-text-field                     
                              name="username"
                              v-model="username"
                              label="username"
                              type="text"
                           required></v-text-field>
                           <v-text-field
                              id="password"     
                              v-model="password"                     
                              name="password"
                              label="Password"
                              type="password"
                           required></v-text-field>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn  :loading="loading" type="submit" color="#5E50A1" style="color:#fff;padding:50pxpx" rounded>Login</v-btn>
                            </v-card-actions>
                        </v-form>
                     </v-card-text>
                    
                     <div class="text-center">
                      <p style="font-size:10px;color: #808080b8;">Dont have an account?<span><nuxt-link to="/">Sign Up</nuxt-link></span></p>
                       <p style="font-size:10px"><span><a></a></span></p>
                     </div>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      username: "",
      password: "",
      loading:false,
    };
  },
  methods: {
    handlelogin() {
      this.loading = true
      this.$store.dispatch("user/login", {
        username: this.username,
        password: this.password
      })
      
    }
  },
  computed: {
   // console.log(),
    error() {
      return this.$store.state.error
    }
  }
 
}
</script>
<style>
.v-application p {
    margin-bottom: -15px;
}
.logoInf{
    width: 25%;
    height: 20%;
    margin-top: 30px;
    margin-left: 10px;
}
span.v-btn__content {
    padding: 20px;
}
.v-card__title {
    font-weight: 700;
}
.text-center {
    padding: 30px 0px;
}
.v-application a {
    color: #ff5252;
}
.headerImg {
    display: flex;
}
label.v-label.theme--light {
    font-size: 10px;
    font-style: italic;
}
</style>
