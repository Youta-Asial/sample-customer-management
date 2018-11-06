<template>
  <v-content class="detail-container">
    <Header>
      <v-btn icon slot="navi" @click="backToList"><v-icon>arrow_back</v-icon></v-btn>
      <template slot="title">顧客情報追加</template>
      <template slot="menus">
      </template>
    </Header>
    <Edit :content="item"></Edit>
    <EditButtons
      :complete="completeEdit"
      :cancel="backToList"
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
    name: 'CreatePage',
    components: {
      Header,
      // HeaderMenu,
      Edit,
      EditButtons,
    },
    data: () => {
      return {
        item: {}
      }
    },
    methods: {
      completeEdit () {
        EventBus.$emit('notify', '顧客情報が追加されました')
        this.goToDetail()
      },
      goToDetail () {
        this.$router.push({
          name: 'detail',
          params: { item: this.item }
        })
      },
      backToList () {
        this.$router.push({
          name: 'list',
        })
      },
    }
  }
</script>
