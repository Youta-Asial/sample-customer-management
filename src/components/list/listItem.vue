<template>
  <v-list-tile
    @click="onClick(id, item)"
    class="list-item"
  >
    <div class="border-wrapper">
      <v-list-tile-content>
        <v-list-tile-title>{{ item.company }}</v-list-tile-title>
        <v-list-tile-sub-title>担当者: {{ item.staff }} 様</v-list-tile-sub-title>
      </v-list-tile-content>
    </div>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      id: String,
      item: Object,
      onClick: Function,
    }
  }
</script>

<style scoped>
.border-wrapper {
  width: 90%;
  height: 100%;
  margin: 0 5% 0 5%;
  border-bottom: #dddddd 1px solid;
}
</style>
