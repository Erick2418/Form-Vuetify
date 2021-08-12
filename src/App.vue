<template>
  <v-app id="inspire">

  <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
           Users-App
          </v-list-item-title>
          <v-list-item-subtitle>
            The best app
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Todo</v-toolbar-title>
    </v-app-bar> -->
       <v-app-bar
      app
      color="#primary"
      dark
      prominent
      src="piano.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Welcome </v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>







    <v-main>
       <router-view></router-view>
    </v-main>
  </v-app>

</template>
<script>



 export default {
    data: () => ({ 
      drawer: false,
       items: [
          { title: 'Home', icon: 'mdi-format-list-checks', to:'/' },
          { title: 'About', icon: 'mdi-help-box', to:'/about' },
          { title: 'Register', icon: 'mdi-help-box', to:'/Register' },
          
        ],
        right: null, 
    }),
  }

</script>
