<template>
  <div>
    <Header></Header>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import WebFontLoader from 'webfontloader'
  import Header from 'components/header/Header'

  export default {
    name: 'App',
    components: {
      Header,
    },
    mounted () {
      WebFontLoader.load({
        google: {
          families: ['Roboto:100,300,400,500,700,900']
        },
        active: this.setFontLoaded
      })
    },
    methods: {
      setFontLoaded () {
        this.$emit('font-loaded')
      }
    }
  }
</script>

<style>
</style>
