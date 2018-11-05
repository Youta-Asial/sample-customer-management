<template>
  <v-layout align-center>
  <v-flex xs6 sm4 text-xs-center>
    <div @click="complete">
      <v-btn flat large color="primary">完了</v-btn>
    </div>
  </v-flex>
  <v-flex xs6 sm4 text-xs-center>
    <div @click="cancel">
      <v-btn flat large color="error">破棄</v-btn>
    </div>
  </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'EditButtons',
    props: {
      complete: Function,
      cancel: Function,
    }
  }
</script>
