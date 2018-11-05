<template>
  <v-toolbar color="teal" fixed>
    <v-toolbar-title
      @click="backToList"
      class="white--text">顧客リスト管理</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
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
