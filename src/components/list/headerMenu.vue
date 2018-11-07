<template>
  <div>
    <v-btn icon class="header-icon" @click="onClickSearch">
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon class="header-icon" @click="onClickAdd">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'HeaderMenu',
    components: {
    },
    props: {
      onClickAdd: Function,
      onClickSearch: Function,
    },
    data: () => {
      return {
      }
    },
    computed: {
      starColor () {
      }
    },
    methods: {
    }
  }
</script>
