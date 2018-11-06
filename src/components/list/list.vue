<template>
  <v-list two-line>
    <ListItem
      v-for="index in 100"
      v-if="isCurrentPageContent(index)"
      :key="index"
      :item="content"
      :num="index"
      :on-click="goToDetail"
    ></ListItem>
  </v-list>
</template>

<script>
  import ListItem from './listItem'

  export default {
    name: 'List',
    components: {
      ListItem
    },
    props: {
      currentPage: Number,
      content: Object,
    },
    data: () => {
      return {
      }
    },
    computed: {
    },
    methods: {
      goToDetail (item) {
        this.$router.push({
          name: 'detail',
          params: { item: item }
        })
      },
      isCurrentPageContent (index) {
        return ((this.currentPage - 1) * 20 < index) && (index <= this.currentPage * 20)
      }
    }
  }
</script>

