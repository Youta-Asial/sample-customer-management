<template>
  <v-content class="list-container">
    <Header>
      <template slot="title">顧客リスト</template>
      <template slot="menus">
        <HeaderMenu
          :on-click-add="goToAdd"
          :on-click-search="search"
        >
        </HeaderMenu>
      </template>
    </Header>
    <SearchBox
      v-show="searchBox"
      :company-list="companyList"
      @on-input="setCompanyList"
      @on-click-close="search"
    ></SearchBox>
    <List
      :current-page="page"
      :company-list="companyList"
      ></List>
    <v-footer fixed>
      <v-flex xs12>
      <div class="text-xs-center">
        <v-pagination
          fixed
          color="teal"
          v-model="page"
          :length="pagerLength"
        ></v-pagination>
      </div>
      </v-flex>
    </v-footer>
  </v-content>
</template>

<script>
  import Header from '../components/header/Header'
  import HeaderMenu from '../components/list/HeaderMenu'
  import List from '../components/list/List'
  import SearchBox from '../components/search/SearchBox'

  export default {
    name: 'ListPage',
    components: {
      Header,
      HeaderMenu,
      List,
      SearchBox,
    },
    data: () => {
      return {
        companyList: {},
        options: [ 'hoge', 'fuga' ],
        page: 1,
        searchBox: false,
      }
    },
    computed: {
      pagerLength () {
        return Math.round(Object.keys(this.companyList).length / 20) + 1
      }
    },
    methods: {
      goToAdd () {
        this.$router.push({
          name: 'create'
        })
      },
      search () {
        this.searchBox = !this.searchBox
      },
      setCompanyList (newItems) {
        this.companyList = newItems
      },
      getItemList () {
        firebase.database().ref('company_list').on('value', (ss) => {
          this.setCompanyList(ss.val())
        })
      },
    },
    mounted () {
      this.getItemList()
    }
  }
</script>

<style>
  .list-container {
    padding-top: 56px !important;
    padding-bottom: 36px !important;
  }
</style>
