<template>
  <v-content class="detail-container">
    <Header>
      <v-btn icon slot="navi" class="header-icon" @click="backToDetail(customer)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <template slot="title">顧客情報編集</template>
      <template slot="menus"></template>
    </Header>
    <v-card>
      <Edit
        :customer="customer"
        @on-edit-customer="editItem"
      ></Edit>
      <EditButtons
        @complete="completeEdit"
        @cancel="cancelEdit"
      ></EditButtons>
    </v-card>
  </v-content>
</template>

<script>
  import Edit from '../components/edit/Edit'
  import Header from '../components/header/Header'
  import EditButtons from '../components/edit/EditButtons'
  import { EventBus } from '../eventBus.js'

  export default {
    name: 'UpdatePage',
    components: {
      Header,
      Edit,
      EditButtons,
    },
    props: {
      id: String,
      customer: Object,
    },
    data: () => {
      return {
        forUpdate: {}
      }
    },
    methods: {
      editItem (key, val) {
        this.forUpdate[key] = val
      },
      completeEdit () {
        if (!this.checkRequire()) return
        // 入力チェックをパスしたらデータベースを更新して画面遷移
        this.updateItem()
        EventBus.$emit('notify', '顧客情報が変更されました', 'success')
        this.backToDetail(this.forUpdate)
      },
      cancelEdit () {
        this.backToDetail(this.customer)
      },
      backToDetail (customer) {
        this.$router.push({
          name: 'detail',
          params: { id: this.id, customer: customer }
        })
      },
      checkRequire () {
        // 必須チェック
        const validatedList = []
        if (!this.forUpdate.company) {
          validatedList.push('会社名')
        }
        if (!this.forUpdate.staff) {
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
        // データベースアクセス
        firebase.database().ref(`customer_list/${this.id}`)
          .update(this.forUpdate)
      }
    },
    mounted () {
      // 更新用にデータをコピー
      this.forUpdate = JSON.parse(JSON.stringify(this.customer))
    }
  }
</script>
