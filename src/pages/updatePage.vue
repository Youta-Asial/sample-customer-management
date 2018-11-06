<template>
  <v-content class="detail-container">
    <Header>
      <v-btn icon slot="navi" @click="backToDetail"><v-icon>arrow_back</v-icon></v-btn>
      <template slot="title">顧客情報編集</template>
      <template slot="menus">
      </template>
    </Header>
    <Edit :content="item"></Edit>
    <EditButtons
      :complete="completeEdit"
      :cancel="restoreItem"
    ></EditButtons>
  </v-content>
</template>

<script>
  import Edit from '../components/edit/Edit'
  import Header from '../components/header/Header'
  // import HeaderMenu from '../components/edit/HeaderMenu'
  import EditButtons from '../components/edit/EditButtons'
  import { EventBus } from '../eventBus.js'

  export default {
    name: 'UpdatePage',
    components: {
      Header,
      // HeaderMenu,
      Edit,
      EditButtons,
    },
    props: {
      item: Object
    },
    data: () => {
      return {
      }
    },
    methods: {
      completeEdit () {
        EventBus.$emit('notify', '顧客情報が変更されました')
        this.backToDetail()
      },
      backToDetail () {
        this.$router.push({
          name: 'detail',
          params: { item: this.item }
        })
      },
      restoreItem () {
        this.backToDetail()
      }
    }
  }
</script>
