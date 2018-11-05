<template>
  <v-content class="list-container">
    <Header>
      <template slot="title">顧客リスト</template>
      <template slot="menues">
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
    </Header>
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
          :length="3"
        ></v-pagination>
      </div>
      </v-flex>
    </v-footer>
  </v-content>
</template>

<script>
  import List from '../components/list/list'
  import Header from '../components/header/Header'

  export default {
    name: 'ListPage',
    components: {
      Header,
      List,
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
