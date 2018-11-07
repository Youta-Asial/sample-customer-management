<template>
  <div>
    <v-menu v-model="openMenu" bottom offset-y>
      <v-btn slot="activator" class="header-icon" icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile @click="$emit('on-click-edit')">
          <v-list-tile-title>
            <v-icon>edit</v-icon>
            編集
          </v-list-tile-title>
        </v-list-tile>
          <ConfirmDialog
            :rendered="deleteDialog"
            :title="'顧客情報の削除'"
            :message="'表示されている顧客情報を削除します。よろしいですか？'"
            @on-accept="onAccept"
            @on-reject="onReject"
          >
            <v-list-tile slot="button" @click="renderDialog">
              <v-list-tile-title>
                <v-icon>delete</v-icon>
                削除
              </v-list-tile-title>
            </v-list-tile>
          </ConfirmDialog>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  import ConfirmDialog from '../common/ConfirmDialog'

  export default {
    name: 'HeaderMenu',
    components: {
      ConfirmDialog,
    },
    data: () => {
      return {
        openMenu: false,
        deleteDialog: false,
      }
    },
    methods: {
      renderDialog () {
        this.deleteDialog = true
        this.openMenu = false
      },
      onAccept () {
        this.deleteDialog = false
        this.$emit('on-click-delete')
      },
      onReject () {
        this.deleteDialog = false
      }
    }
  }
</script>
