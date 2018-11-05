<template>
  <v-content class="detail-container">
    <Header>
      <template slot="title">顧客詳細</template>
      <template slot="menus">
        <HeaderMenu
          :on-click-star="switchStar"
          :on-click-edit="editItem"
          :on-click-delete="deleteItem"
        ></HeaderMenu>
      </template>
    </Header>
    <h1 class="display-1">{{ item.company }}</h1>
    <Detail :item="item"></Detail>
  </v-content>
</template>

<script>
  import Detail from '../components/detail/Detail'
  import Header from '../components/header/Header'
  import HeaderMenu from '../components/detail/HeaderMenu'

  export default {
    name: 'DetailPage',
    components: {
      Header,
      HeaderMenu,
      Detail,
    },
    props: {
      item: Object
    },
    data: () => {
      return {
        menuModal: false,
      }
    },
    methods: {
      switchStar () {
        console.log('Yay!')
      },
      editItem () {
        this.$router.push({
          name: 'edit',
          params: { item: this.item }
        })
      },
      deleteItem () {
        console.log('delete')
      }
    }
  }
</script>

<style>
  .detail-container {
    padding: 82px 26px 0px 26px !important;
  }
</style>
