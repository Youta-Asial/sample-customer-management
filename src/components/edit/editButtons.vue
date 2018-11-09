<template>
  <v-layout align-center>
    <v-flex xs6 sm4 text-xs-center>
      <div @click="$emit('complete')">
        <v-btn flat large color="primary" width="48px">完了</v-btn>
      </div>
    </v-flex>
    <v-flex xs6 sm4 text-xs-center>
      <ConfirmDialog
        :rendered="confirmDialogRendered"
        :title="'編集の破棄'"
        :message="'現在の内容を破棄して編集を終了します。よろしいですか？'"
        @on-accept="onAccept"
        @on-reject="onReject"
      >
        <v-btn flat large slot="button" color="error" @click="renderCancelConfirmDialog">破棄</v-btn>
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
    data: () => {
      return {
        confirmDialogRendered: false
      }
    },
    methods: {
      renderCancelConfirmDialog () {
        this.confirmDialogRendered = true
      },
      onAccept () {
        // 変更のキャンセル
        this.confirmDialogRendered = false
        this.$emit('cancel')
      },
      onReject () {
        this.confirmDialogRendered = false
      }
    }
  }
</script>
