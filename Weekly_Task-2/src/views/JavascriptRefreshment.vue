<template>
    <v-app>
        <NavBar />
        <SideBar />
        <v-card width="75%" class="ml-auto mr-10 mb-4" flat>
            <v-card-title class="headline font-weight-bold">
                Javascript Refreshment
                <v-spacer></v-spacer>
            </v-card-title>
        </v-card>

        <template>
            <v-card
                class="mx-auto"
                width="50%"
            >
                <v-card-text>
                    <div>Js</div>
                        <p class="text-h4 text--primary">
                            Javascript Refreshment
                        </p>
                    <div class="text--primary">
                        Javascript adalah bahasa pemrogrman yang high-level, scripting, untyped dan interpreted<br>
                    </div>
                        <p>Declaration, Scoping, dan Hoisting</p>
                    <div class="text--primary">
                        Declaration adalah proses pembuatan variabel untuk menyimpan data. <br>
                        Scoping merupakan menentukan dimana variable, fungsi, dan objek diatur dan dapat dalam kode kita. <br>
                        Hoisting membuat beberapa jenis variable atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan.
                    </div>
                        <p>.</p>
                        <p>Hasil screenshot:</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="reveal = true"
                    >
                        Screenshot
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <v-card
                        v-if="reveal"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                    >
                        <v-card-text class="pb-0">
                            <v-img 
                                src="../assets/Screenshot Javascript.png"
                                width="360px"
                                class="grey darken-4"
                            >
                            </v-img>
                        </v-card-text>
                    <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="teal accent-4"
                            @click="reveal = false"
                        >
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-expand-transition>
            </v-card>
        </template>
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
    name: 'CssView',
    components: {
        NavBar,
        SideBar
    },
    data: () => ({
        reveal: false,
    })
}
</script>

<style>
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
</style>