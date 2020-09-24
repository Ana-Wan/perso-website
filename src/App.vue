<template>
  <v-app id="appContainer">
    <v-navigation-drawer id="navDrawer" width="15%" floating color="secondary" app>
      <div id="leftNavLineDeco1" > t</div>
      <div id="leftNavLineDeco2"/>
      <v-list class="mt-12">
        <scrollactive active-class="secondary" :offset="50" :scrollOffset="10" scrollContainerSelector="mainContainer" scrollOnStart modifyUrl exact>
          <v-list-item
            v-for="(info, index) in componentInfo"
            :key="index"
          >
            <v-btn
              class="my-16 ml-10 scrollactive-item"
              color="primary"
              height="50px"
              width="120px"
              :href="info.id"
            >
              {{ info.name }}
            </v-btn>
          </v-list-item>
        </scrollactive>
      </v-list>
    </v-navigation-drawer>
    
    <v-main id="mainContainer">
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
import goTo from 'vuetify/es5/services/goto'

export default {
  name: 'App',

  components: {
    'Home': () => import('./components/Home'),
    'Education': () => import('./components/Education'),
    'Contact': () => import('./components/Contact'),
    'Internship': () => import('./components/Internship'),
  },

  data: () => ({
    componentInfo: [
      {
        id: '#home',
        name: 'home',
      },
      {
        id: '#internship',
        name: 'internship',
      },
      {
        id: '#education',
        name: 'education',
      },
      {
        id: '#contact',
        name: 'contact',
      }
    ],
  }),

  methods: {
    scrollToComponent(name) {
      goTo(`#${name}`);
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

  #leftNavLineDeco1 {
    position: absolute;
    opacity: 20%;
    width: 2px;
    height: 100%;
    background-color: var(--v-tertiary-base);
    left: 35%;
    z-index: 2;
  }

  #leftNavLineDeco2 {
    position: absolute;
    opacity: 20%;
    width: 2px;
    height: 100%;
    background-color: var(--v-tertiary-base);
    left: 45%;
    z-index: 2;
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
