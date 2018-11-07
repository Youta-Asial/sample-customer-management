<template>
  <v-alert
    transition="slide-y-transition"
    class="notification-dialog"
    v-model="alert"
    :type="type"
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
        message: 'hello',
        type: 'success'
      }
    },
    methods: {
      renderDialog () {
        console.log('hey')
        this.alert = true
      }
    },
    created () {
      EventBus.$on('notify', (message, type) => {
        this.message = message
        this.type = type
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
    opacity: 0.9;
    width: 100%;
    height: 40px;
    z-index: 100;
    position: fixed;
    margin-top: 56px;
    border-radius: 20px;
  }
</style>
