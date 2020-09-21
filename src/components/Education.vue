<template>
  <v-container class="pa-16 pt-0 secondary--text">
    <v-row class="my-10" justify="center">
      <div class="text-h3">About</div>
    </v-row>
    <v-row class="my-10" justify="space-between">
      <div class="text-h4 mb-5">Education</div>
      <div class="text-body-1">
        I am currently studying at <strong>University of Waterloo</strong> and completing my Bachelor in <strong>Computer Science</strong>. I will be graduating in summer of 2021. 
        Here are some of the courses I completed:
      </div>
    </v-row>
    <v-row class="my-10" justify="space-between" no-gutters>
      <v-col lg="6">
        <ul>
          <li>CS 486 - Intro to Artificial Intelligence</li>
          <li>CS 456 - Computer Networks</li>
          <li>CS 450 - Computer Architecture</li>
          <li>CS 446 - Software Design and Architecture</li>
        </ul>
      </v-col>
      <v-col lg="6">
        <ul>
          <li>CS 350 - Operating Systems</li>
          <li>CS 348 - Intro to Database Management</li>
          <li>CS 349 - User Interfaces</li>
          <li>CS 341 - Algorithms</li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="my-10" justify="space-between">
      <div class="text-body-1">
        I learned <strong>Web Development</strong> through the <strong>Udemy</strong> Online Learning Platform.  Here are the courses I completed:
      </div>
    </v-row>
    <v-row class="my-10" justify="space-between" no-gutters>
      <v-col lg="12">
        <ul>
          <li>The Complete Web Developer course 2.0</li>
          <li>The Complete React Web App Developer Course</li>
          <li>Vue JS 2, The Complete Guide (including Vue Router and Vuex).</li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-chip class="pa-6" color="primary" large>
        Resumé
        <v-icon right>mdi-download</v-icon>
      </v-chip>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'About',
    data: () => ({
    }),
  }
</script>

<style lang="scss" scoped>

#container {
  position: relative;
  height: 1000px;
}

</style>
