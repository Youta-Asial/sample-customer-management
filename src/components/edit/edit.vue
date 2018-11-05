<template>
  <v-list two-line>
    <EditItem
      :icon="'domain'"
      :label="'会社名'"
      :value="content.company"
    ></EditItem>
    <EditItem
      :icon="'person'"
      :label="'担当者名'"
      :value="content.staff"
    ></EditItem>
    <EditItem
      :icon="'phone'"
      :label="'担当者電話番号'"
      :value="content.TEL"
    ></EditItem>
    <EditItem
      :icon="'mail'"
      :label="'担当者Eメール'"
      :value="content.email"
    ></EditItem>
    <EditItem
      :icon="'place'"
      :label="'所在地'"
      :value="content.address"
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
  }
</script>

