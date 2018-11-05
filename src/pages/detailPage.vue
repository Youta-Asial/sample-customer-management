<template>
  <v-content class="detail-container">
    <h1 class="display-2">{{ item.company }}</h1>
    <Detail :item="item"></Detail>
  </v-content>
</template>

<script>
  import Detail from '../components/detail/Detail'
  export default {
    name: 'DetailPage',
    components: {
      Detail
    },
    props: {
      item: Object
    }
  }
</script>

<style>
  .detail-container {
    padding: 82px 26px 0px 26px !important;
  }
</style>
