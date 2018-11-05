<template>
  <v-list-tile @click="onClick(item)">
    <v-list-tile-content>
      <v-list-tile-title>{{ num + item.company }}</v-list-tile-title>
      <v-list-tile-sub-title>担当者: {{ item.staff }} 様</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      num: Number,
      item: Object,
      onClick: Function,
    }
  }
</script>
