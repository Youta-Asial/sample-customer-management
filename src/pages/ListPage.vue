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
      :customer-list-copy="customerListCopy"
      @on-input="setCustomerList"
      @on-click-close="search"
    ></SearchBox>
    <List
      :current-page="page"
      :customer-list="customerList"
      :rows="rows"
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
        customerList: {},
        customerListCopy: {},
        options: [ 'hoge', 'fuga' ],
        page: 1,
        searchBox: false,
        rows: 10,
      }
    },
    computed: {
      pagerLength () {
        const count = Object.keys(this.customerList).length
        if (!count) {
          return 1
        } else if (!(count % this.rows)) {
          return count / this.rows
        } else {
          return Math.floor(count / this.rows) + 1
        }
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
      setCustomerList (customerList) {
        this.customerList = customerList
      },
      cloneCustomerList () {
        this.customerListCopy = JSON.parse(JSON.stringify(this.customerList))
      },
      getCustomerList () {
        firebase.database().ref('/customer_list').on('value', (ss) => {
          if (ss.val()) {
            this.setCustomerList(ss.val())
            this.cloneCustomerList()
          }
        })
      },
    },
    mounted () {
      this.getCustomerList()
    }
  }
</script>

<style>
  .list-container {
    padding-top: 56px !important;
    padding-bottom: 36px !important;
  }
</style>
