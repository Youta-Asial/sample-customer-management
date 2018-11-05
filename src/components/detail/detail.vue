<template>
  <v-list two-line>
    <DetailItem
      :icon="'person'"
      :title="item.staff"
      :subtitle="'担当者名'"
    ></DetailItem>
    <DetailItem
      :icon="'phone'"
      :title="item.TEL"
      :subtitle="'担当者電話番号'"
    ></DetailItem>
    <DetailItem
      :icon="'mail'"
      :title="item.email"
      :subtitle="'担当者Eメール'"
    ></DetailItem>
    <DetailItem
      :icon="'place'"
      :title="item.address"
      :subtitle="'所在地'"
    ></DetailItem>
  </v-list>
</template>

<script>
  import DetailItem from './detailItem'

  export default {
    name: 'Detail',
    components: {
      DetailItem
    },
    props: {
      item: Object
    },
    methods: {
      back () {
        this.$router.back()
      }
    }
  }
</script>
