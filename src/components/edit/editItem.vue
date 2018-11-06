<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-text-field
        style="width:100%"
        :label="label"
        :value="itemValue"
        @input="editItem"
      ></v-text-field>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'EditItem',
    props: {
      icon: String,
      label: String,
      itemKey: String,
      itemValue: String,
    },
    methods: {
      editItem (val) {
        this.$emit('on-edit-item', this.itemKey, val)
      }
    }
  }
</script>
