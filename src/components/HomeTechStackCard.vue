<template>
  <v-card
    class="pa-1 secondary--text"
    rounded="lg"
    outlined
  >
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text class="text-body-1">
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(info, i) in infos"
            :key="i"
            inactive
          >
            <v-list-item-content>
              <v-list-item-title class="secondary--text">{{ info }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'HomeTechStackCard',
    props: ['title', 'infos'],
    data: () => ({
    }),
  }
</script>

<style lang="scss" scoped>

</style>
