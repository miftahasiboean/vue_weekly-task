<template>
  <v-container>
    <v-app-bar
        app height="70" 
        class="px-10"
        color="#FCFDFF"
        elevation="0"
    >

        <div class="nav mx-10">
            <v-btn 
                text
                small
                color="#28304E"
                height="0"
                to="/offices"
            >
                Vue - D
            </v-btn>
        </div>
    <v-spacer></v-spacer>
        <div>
            <v-btn 
             icon
             large
             class="ml-4"
            >
                <v-icon x-large>
                    mdi-account-circle
                </v-icon>
            </v-btn>
        </div>

    </v-app-bar>

  </v-container>
</template>

<script>
export default {
    name: 'ComponentNavbar'

}
</script>

<style>

</style>