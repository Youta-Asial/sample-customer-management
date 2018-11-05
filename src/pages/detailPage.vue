<template>
  <v-content class="detail-container">
    <Header>
      <template slot="title">顧客詳細</template>
      <template slot="menues">
        <v-btn icon>
          <v-icon>star</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
    </Header>
    <h1 class="display-1">{{ item.company }}</h1>
    <Detail :item="item"></Detail>
  </v-content>
</template>

<script>
  import Detail from '../components/detail/Detail'
  import Header from '../components/header/Header'

  export default {
    name: 'DetailPage',
    components: {
      Header,
      Detail,
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
