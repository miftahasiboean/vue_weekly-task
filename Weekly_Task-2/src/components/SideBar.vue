<template>
  <v-container>
     <v-navigation-drawer v-model="drawer" app permanent>

    <v-list-item>
        <v-list-item-content>
        <div class="text-center mt-4">
            <img src="" alt="">
        </div>
        </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
      <div class="title mt-4">
          Menu
      </div>
      </v-list-item-content>
    </v-list-item>


    <v-list
        nav
    >
        <v-list-item
        v-for="item in itemsDrawer"
        :key="item.title"
        :to="item.to"
        link
        >
        <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: 'ComponentSideBar',
  data() {
    return {
      drawer: false,
      itemsDrawer: [
          { title: 'HTML', icon: 'mdi-code-tags', to:'/' },
          { title: 'CSS', icon: 'mdi-pound', to:'/css' },
          { title: 'Javascript', icon: 'mdi-code-json', to:'/javascript' },
      ],
    }
  }

}
</script>

<style>

</style>