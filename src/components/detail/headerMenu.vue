<template>
  <div>
    <v-btn icon @click="onClickStarMock">
      <v-icon :color="starColor">star</v-icon>
    </v-btn>
    <v-menu bottom offset-y>
      <v-btn slot="activator" icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile @click="onClickEdit">
          <v-list-tile-title>
            <v-icon>edit</v-icon>
            編集
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="onClickDelete">
          <v-list-tile-title>
            <v-icon>delete</v-icon>
            削除
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    name: 'HeaderMenu',
    props: {
      onClickStar: Function,
      onClickEdit: Function,
      onClickDelete: Function,
    },
    data: () => {
      return {
        star: false
      }
    },
    computed: {
      starColor () {
        return this.star ? 'yellow' : ''
      }
    },
    methods: {
      onClickStarMock () {
        this.star = !this.star
      }
    }
  }
</script>
