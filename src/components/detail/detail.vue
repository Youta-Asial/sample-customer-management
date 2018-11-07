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
    <div class="map-area">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7804264894867!2d139.7628742157486!3d35.70702058018823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c3c53b5f485%3A0x141a80dae22275d3!2z44Ki44K344Ki44Or!5e0!3m2!1sja!2sjp!4v1541562154010" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
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
  }
</script>

<style scoped>
  .map-area {
    border: gray 1px solid;
    margin: 0 8px;
    height: 240px;
  }
</style>
