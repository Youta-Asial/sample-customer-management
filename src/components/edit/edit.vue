<template>
  <v-list two-line>
    <EditItem
      :icon="'domain'"
      :label="'会社名'"
      :item-key="'company'"
      :item-value="content.company"
      @on-edit-item="editItem"
    ></EditItem>
    <EditItem
      :icon="'person'"
      :label="'担当者名'"
      :item-key="'staff'"
      :item-value="content.staff"
      @on-edit-item="editItem"
    ></EditItem>
    <EditItem
      :icon="'phone'"
      :label="'担当者電話番号'"
      :item-key="'TEL'"
      :item-value="content.TEL"
      @on-edit-item="editItem"
    ></EditItem>
    <EditItem
      :icon="'mail'"
      :label="'担当者Eメール'"
      :item-key="'email'"
      :item-value="content.email"
      @on-edit-item="editItem"
    ></EditItem>
    <EditItem
      :icon="'place'"
      :label="'所在地'"
      :item-key="'address'"
      :item-value="content.address"
      @on-edit-item="editItem"
    ></EditItem>
  </v-list>
</template>

<script>
  import EditItem from './editItem'

  export default {
    name: 'Edit',
    components: {
      EditItem
    },
    props: {
      content: Object
    },
    methods: {
      editItem (key, val) {
        console.log(key, val)
      }
    }
  }
</script>

