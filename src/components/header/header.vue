<template>
  <v-toolbar color="teal" fixed>
    <v-toolbar-title
      @click="backToList"
      class="white--text"
    >
      <slot name="title"></slot>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <slot name="menus"></slot>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      backToList () {
        this.$router.push({
          name: 'list'
        })
      }
    }
  }
</script>
