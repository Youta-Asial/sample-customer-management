<template>
  <v-content class="detail-container">
    <Header>
      <v-btn icon slot="navi" class="header-icon" @click="backToDetail(item)"><v-icon>arrow_back</v-icon></v-btn>
      <template slot="title">顧客情報編集</template>
      <template slot="menus">
      </template>
    </Header>
    <v-card>
      <Edit
        :content="item"
        @on-edit-item="editItem"
      ></Edit>
      <EditButtons
        :complete="completeEdit"
        :cancel="cancel"
      ></EditButtons>
    </v-card>
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
      id: String,
      item: Object,
    },
    data: () => {
      return {
        newItem: {}
      }
    },
    methods: {
      editItem (key, val) {
        this.newItem[key] = val
      },
      completeEdit () {
        if (!this.checkRequire()) return
        this.updateItem()
        EventBus.$emit('notify', '顧客情報が変更されました', 'success')
        this.backToDetail(this.newItem)
      },
      backToDetail (param) {
        this.$router.push({
          name: 'detail',
          params: { id: this.id, item: param }
        })
      },
      cancel () {
        this.backToDetail(this.item)
      },
      checkRequire () {
        const validatedList = []
        if (!this.newItem.company) {
          validatedList.push('会社名')
        }
        if (!this.newItem.staff) {
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
      updateItem () {
        firebase.database().ref(`company_list/${this.id}`)
          .update(this.newItem)
      }
    },
    mounted () {
      this.newItem = JSON.parse(JSON.stringify(this.item))
    }
  }
</script>
