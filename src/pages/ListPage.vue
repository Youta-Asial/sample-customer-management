<template>
  <v-content class="list-container">
    <Header>
      <template slot="title">顧客リスト</template>
      <template slot="menus">
        <HeaderMenu
          :on-click-add="goToAdd"
          :on-click-search="searchItem"
        >
        </HeaderMenu>
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
  import Header from '../components/header/Header'
  import HeaderMenu from '../components/list/HeaderMenu'
  import List from '../components/list/list'

  export default {
    name: 'ListPage',
    components: {
      Header,
      HeaderMenu,
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
    },
    methods: {
      goToAdd () {
        this.$router.push({
          name: 'create'
        })
      },
      searchItem () {
        console.log('search')
      },
    }
  }
</script>

<style>
  .list-container {
    padding-top: 56px !important;
    padding-bottom: 36px !important;
  }
</style>
