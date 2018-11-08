<template>
  <v-list two-line>
    <v-list-tile>
      <v-list-tile-content>
    <h1 class="display-1">{{ item.company }}</h1>
      </v-list-tile-content>
    </v-list-tile>
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
    <Map></Map>
  </v-list>
</template>

<script>
  import DetailItem from './detailItem'
  import Map from '../map/Map'

  export default {
    name: 'Detail',
    components: {
      DetailItem,
      Map,
    },
    props: {
      item: Object
    },
  }
</script>

<style scoped>
  #mapbox {
    border: gray 1px solid;
    margin: 0 8px;
    width: calc(100% -16px);
    height: 240px;
  }
</style>
