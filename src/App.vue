<template>
  <v-app id="appContainer">
    <v-navigation-drawer width="15%" color="secondary" floating app>
      <div id="leftNavLineDeco1"/>
      <div id="leftNavLineDeco2"/>
      <scrollactive id="scrollative" active-class="secondary" :offset="50" :scrollOffset="-10" scrollContainerSelector="mainContainer" scrollOnStart modifyUrl exact>
        <v-container id="leftNavContainer">
          <v-row
            v-for="(info, index) in componentInfo"
            :key="index"
          >
            <v-btn
              class="scrollactive-item"
              color="primary"
              height="50px"
              width="120px"
              :href="info.id"
            >
              {{ info.name }}
            </v-btn>
          </v-row>
        </v-container>
      </scrollactive>
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
    font-family: Helvetica, sans-serif;
  }

  .navLineDeco {
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: rgb(204, 197, 185, 0.2);
  }

  #leftNavLineDeco1 {
    @extend .navLineDeco;
    left: 35%;
  }

  #leftNavLineDeco2 {
    @extend .navLineDeco;
    left: 45%;
  }

  #scrollative {
    height: 100%;
  }

  #leftNavContainer {
    height: 100%;
    margin-top: 30%;
    margin-left: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
