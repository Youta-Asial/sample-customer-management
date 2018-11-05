<template>
  <v-dialog v-model="rendered" persistent max-width="290">
    <slot slot="activator" name="button"></slot>
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="accept">はい</v-btn>
        <v-btn color="primary" flat @click="reject">いいえ</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'ConfirmDialog',
    props: {
      rendered: Boolean,
      title: String,
      message: String,
    },
    methods: {
      accept () {
        this.$emit('on-accept')
      },
      reject () {
        this.$emit('on-reject')
      }
    }
  }
</script>
