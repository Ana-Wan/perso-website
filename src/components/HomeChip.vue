<template>
  <div id="container">
    <v-chip
      class="pl-4 chip white--text"
      :color="color"
      text-color="offWhite"
      small
    >

      <v-avatar left>
        <v-icon small>{{ icon }}</v-icon>
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
  width: 8%;
  height: 2px;
  top: 50%;
  background-color:  rgb(64, 61, 57, 0.3);
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
