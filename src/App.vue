<template>
  <v-app id="appContainer">
    <v-navigation-drawer id="navDrawer" width="15%" floating color="secondary" app>
      <div id="leftNavLineDeco1"/>
      <div id="leftNavLineDeco2"/>
      <v-list class="mt-12">
        <v-list-item
          v-for="(route, index) in routes"
          :key="index"
        >
          <v-btn
            class="my-16 ml-10"
            color="primary"
            active-class="offWhite--text"
            height="50px"
            width="120px"
            :to="{ path: route.path }"
            @click="() => scrollToComponent(route.name)"
          >
            {{ route.name }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-main id="mainContainer" v-scroll="handleScroll">
      <v-container fluid>
        <v-row id="home" class="content"><Home @onScrollToComponent="scrollToComponent"/></v-row>
        <v-row id="internship" class="content"><Internship/></v-row>
        <v-row id="education" class="content"><Education/></v-row>
        <v-row id="contact" class="content"><Contact/></v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home'
import Internship from './components/Internship'
import Education from './components/Education'
import Contact from './components/Contact'
import { routes } from './router'
import goTo from 'vuetify/es5/services/goto'

export default {
  name: 'App',

  components: {
    'Home': Home,
    'Education': Education,
    'Contact': Contact,
    'Internship': Internship,
  },

  data: () => ({
    routes: routes,
    currentId: ""
  }),

  methods: {
    scrollToComponent(id) {
      console.log(id);
      this.currentId = id;
      goTo(`#${id}`)
    },
    handleScroll() {
      // var currScrollPos = e.target.scrollingElement.scrollTop;
      // var currRoute = this.$route.name;
      // if (currScrollPos >= document.getElementById("home").offsetTop + document.getElementById("home").offsetHeight  && currRoute != "internship") {
      //   this.$router.push('/internship');
      // } 
      // if (currScrollPos >= document.getElementById("internship").offsetTop + document.getElementById("internship").offsetHeight && currRoute != "about") {
      //   this.$router.push('/about');
      // } 
      // if (currScrollPos >= document.getElementById("about").offsetTop + document.getElementById("about").offsetHeight && currRoute != "contact") {
      //   this.$router.push('/contact');
      // } else if (currScrollPos < document.getElementById("internship").offsetTop && currRoute != "home") {
      //   this.$router.push('/');
      // }
    },
  }
};
</script>

<style lang="scss">
  #appContainer {
    font-family: Arial, Helvetica, sans-serif;
  }

  #navTopDeco {
    width: 100px;
    height: 100px;
    z-index: 2;
  }
  
  .lineDeco {
    position: absolute;
    opacity: 20%;
    width: 2px;
    height: 100%;
    background-color: var(--v-tertiary-base);
  }

  #leftNavLineDeco1 {
    @extend .lineDeco;
    left: 35%;
  }

  #leftNavLineDeco2 {
    @extend .lineDeco;
    left: 45%;
  }

  #rightLineDeco3 {
    @extend .lineDeco;
    right: 6%;
  }

  #mainContainer {
    background-color: var(--v-secondary-base);
    overflow-y: scroll;
  }

  .content {
    background-color: var(--v-offwhite-base);
    border-bottom: none;
    border-top: none;
  }
</style>
