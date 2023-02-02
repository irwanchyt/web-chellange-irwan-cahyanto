<template lang="">
    <div class="links">  
        <v-row class="text-right">
            <v-col>
                <nuxt-link to="/" class="btnLink">Home</nuxt-link>
                <a class="btnLink" v-if="isLoggedIn" @click="handleLogOut">Log Out</a>
                <nuxt-link to="/login" class="btnLink" v-else>Login</nuxt-link>          
            </v-col>
        </v-row>      
         <v-row class="text-center">
            <v-col>
                 <v-skeleton-loader v-if="firstLoad" :loading="loading" type="table"></v-skeleton-loader>
    <v-data-table
      dense
      :headers="headers"
     
      :items="data"
      v-show="!firstLoad"
      :fixed-header="true"
      item-key="no"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer=""
      @page-count="pageCount = $event"
      class="mt-5 elevation-5"
      style="padding: 15px"
      :options.sync="options"
    >
      <template v-slot:item="row">
        <tr>
          <!-- <td>{{row.item.ID}}</td> -->
          <td>{{ row.item.title }}</td>
          <td>{{ row.item.brand }}</td>
          <td>{{ row.item.category }}</td>
          <td>{{ row.item.price }}</td>
          <td>{{ row.item.stock }}</td>
        </tr>
      </template>
    </v-data-table>

    <div style="display: flex; justify-content: end; margin-top: 20px">
      <p class="mt-2" v-show="!firstLoad">page {{ page }} to {{ pageCount }}</p>
      <v-pagination
       v-show="!firstLoad"
        v-model="page"
        :length="pageCount"
        :total-visible="5"
        color="#5E50A1"
        :options.sync="options"
      >
      </v-pagination>
    </div>    
            </v-col>
        </v-row>    
    </div>
</template>
<script>
import axios from 'axios'

export default {
    middleware: "authenticated",
    data: () => ({
    timeout: 3000,
    firstLoad: true,
    filename: null,
    mirrorId: [],
    firstLoad: true,
    page: 1,
    options: {},
    value: false,
    idSegment: [],
   
    pageCount: 0,
    itemsPerPage: 20,
    items: null,
    loading: false,
    headers: [
      { id: 2, text: "Title", value: "title" },
      { id: 3, text: "Brand", value: "brand" },
      { id: 3, text: "category", value: "category" },
      { id: 4, text: "Price", value: "price" },
      { id: 5, text: "Stock", value: "stock" },
    ],
    data: [],
  }),
    computed: {
        isLoggedIn () {
            return this.$store.getters.isLoggedIn
        }
    },
     methods: {
        handleLogOut() {
            this.$store.dispatch('logOut')
        },
        getProduct() {
          axios.get('https://dummyjson.com/products')
        .then((response) => {
          //console.log(response)
          if (response.status === 200) {

            const item = response.data.products;
          // console.log(item)
            this.firstLoad=false
            item.forEach((x) => {
              console.log(x)
              this.data.push(x);
            });
          }

        })
        .catch((error) => {
          reject(error);
          console.log(error);
        });
      
    }
        
    },
    mounted(){
      this.getProduct()
    }
    
}  
</script>
<style scoped>
    a.btnLink {
    text-decoration: none;
    padding: 20px;
    color: black;
  }
  tbody {
    text-align: left;
}
</style>