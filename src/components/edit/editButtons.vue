<template>
  <v-layout align-center>
    <v-flex xs6 sm4 text-xs-center>
      <div @click="complete">
        <v-btn flat large color="primary" width="48px">完了</v-btn>
      </div>
    </v-flex>
    <v-flex xs6 sm4 text-xs-center>
      <ConfirmDialog
        :rendered="cancelDialog"
        :title="'編集の破棄'"
        :message="'現在の内容を破棄して編集を終了します。よろしいですか？'"
        @on-accept="onAccept"
        @on-reject="onReject"
      >
        <v-btn flat large slot="button" color="error" @click="renderDialog">破棄</v-btn>
      </ConfirmDialog>
    </v-flex>
  </v-layout>
</template>

<script>
  import ConfirmDialog from '../common/ConfirmDialog'

  export default {
    name: 'EditButtons',
    components: {
      ConfirmDialog,
    },
    props: {
      complete: Function,
      cancel: Function,
    },
    data: () => {
      return {
        cancelDialog: false
      }
    },
    methods: {
      renderDialog () {
        this.cancelDialog = true
      },
      onAccept () {
        this.cancelDialog = false
        this.cancel()
      },
      onReject () {
        this.cancelDialog = false
      }
    }
  }
</script>
