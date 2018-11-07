<template>
  <v-toolbar
    class="search-box"
  >
    <v-text-field
      class="search-input"
      v-model="searchParam"
      hide-details
      prepend-icon="search"
      single-line
    ></v-text-field>
    <v-btn
      icon
      class="close-icon"
      @click="$emit('on-click-close')"
    >
      <v-icon>close</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'SearchBox',
    props: {
      companyList: {},
    },
    data: () => {
      return {
        searchParam: '',
        companyListCopy: {},
      }
    },
    computed: {
      result () {
        let resultData = {}
        for (let id in this.companyListCopy) {
          for (let key in this.companyListCopy[id]) {
            if (this.companyListCopy[id][key].indexOf(this.searchParam) > -1) {
              resultData[id] = this.companyListCopy[id]
            }
          }
        }
        return resultData
      }
    },
    watch: {
      searchParam () {
        this.$emit('on-input', this.result)
      }
    },
    methods: {
      cloneList () {
        this.companyListCopy = JSON.parse(JSON.stringify(this.companyList))
      },
    },
    mounted () {
      this.cloneList()
    }
  }
</script>

<style scoped>
  .search-box {
    width: 90%;
    margin: -12px 5% !important;
  }
  .close-icon {
    margin: 12px -16px 0 16px;
  }
</style>
