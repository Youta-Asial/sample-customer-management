<template>
  <v-content class="list-container">
    <List
      :current-page="page"
      :content="item"
      ></List>
    <v-footer fixed>
      <v-flex xs12>
      <div class="text-xs-center">
        <v-pagination
          fixed
          color="teal"
          v-model="page"
          :length="6"
        ></v-pagination>
      </div>
      </v-flex>
    </v-footer>
  </v-content>
</template>

<script>
  import List from '../components/list/list'
  export default {
    name: 'ListPage',
    components: {
      List
    },
    data: () => {
      return {
        item: {
          'company': '株式会社ほげほげ',
          'address': '東京都渋谷区どこどこ',
          'staff': '保毛山太郎',
          'email': 'hoge@hoge.com',
          'TEL': '090-0909-0909',
        },
        options: [ 'hoge', 'fuga' ],
        page: 1,
      }
    }
  }
</script>

<style>
  .list-container {
    padding-top: 56px !important;
    padding-bottom: 36px !important;
  }
</style>
