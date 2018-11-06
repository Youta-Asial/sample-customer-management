<template>
  <v-content class="detail-container">
    <Header>
      <v-btn icon slot="navi" @click="backToList"><v-icon>arrow_back</v-icon></v-btn>
      <template slot="title">顧客情報追加</template>
      <template slot="menus">
      </template>
    </Header>
    <Edit
      :content="item"
      @on-edit-item="editItem"
    ></Edit>
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
      editItem (key, val) {
        this.item[key] = val
      },
      completeEdit () {
        if (!this.checkRequire()) return
        this.setNewItem()
        EventBus.$emit('notify', '顧客情報が追加されました', 'success')
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
      checkRequire () {
        const validatedList = []
        if (!this.item.company) {
          validatedList.push('会社名')
        }
        if (!this.item.staff) {
          validatedList.push('担当者名')
        }
        if (validatedList.length !== 0) {
          let require = ''
          for (let str of validatedList) {
            require += `「${str}」`
          }
          EventBus.$emit('notify', `${require}は必須項目です`, 'error')
          return false
        } else {
          return true
        }
      },
      setNewItem () {
        firebase.database().ref('company_list').push(this.item)
      }
    }
  }
</script>
