<template>
  <div id="container">
    <v-chip
      class="pl-4 chip white--text"
      :color="color"
      text-color="offWhite"
    >

      <v-avatar left>
        <v-icon>{{ icon }}</v-icon>
      </v-avatar>
      {{ text }}
    </v-chip>
    <div class="chipLineDeco1" />
    <div class="chipLineDeco2" />
  </div>
</template>

<script>
  export default {
    name: 'HomeChip',
    props: ['text', 'icon', 'color', 'pos', 'numChips'],
    data: () => ({
    }),
  }
</script>

<style lang="scss" scoped>
#container {
  position: relative;
}

.chip {
  width: 84%;
  left: 8%;
}

.chipLineDeco {
  position: absolute;
  opacity: 30%;
  width: 8%;
  height: 3px;
  top: 50%;
  background-color: #8A786D;
}

.chipLineDeco1 {
  @extend .chipLineDeco;
  left: 0;
}

.chipLineDeco2 {
  @extend .chipLineDeco;
  right: 0;
}

</style>
