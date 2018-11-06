<template>
  <v-alert
    class="notification-dialog"
    v-model="alert"
    dismissible
    type="success"
    @notification-called="renderDialog"
  >
    {{ message }}
  </v-alert>
</template>

<script>
  import { EventBus } from '../../eventBus.js'

  export default {
    name: 'NotificationDialog',
    data: () => {
      return {
        alert: false,
        message: 'hello'
      }
    },
    methods: {
      renderDialog () {
        console.log('hey')
        this.alert = true
      }
    },
    created () {
      EventBus.$on('notify', (message) => {
        this.message = message
        this.alert = true
        setTimeout(() => {
          this.alert = false
        }, 3000)
      })
    }
  }
</script>

<style scoped>
  .notification-dialog {
    opacity: 80%;
    width: 100%;
    z-index: 100;
    position: fixed;
  }
</style>
