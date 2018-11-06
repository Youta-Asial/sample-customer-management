<template>
  <v-list two-line>
    <ListItem
      v-for="(item, key, index) in companyList"
      v-if="isCurrentPageContent(index)"
      :key="key"
      :id="key"
      :item="item"
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
      companyList: Object,
    },
    data: () => {
      return {
      }
    },
    computed: {
    },
    methods: {
      goToDetail (id, item) {
        this.$router.push({
          name: 'detail',
          params: { id: id, item: item }
        })
      },
      isCurrentPageContent (index) {
        return ((this.currentPage - 1) * 20 < index + 1) && (index + 1 <= this.currentPage * 20)
      }
    }
  }
</script>

