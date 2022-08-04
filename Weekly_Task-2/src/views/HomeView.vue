<template>
    <v-app>
        <NavBar />
        <SideBar />
        <v-card width="75%" class="ml-auto mr-10 mb-4" flat>
            <v-card-title class="headline font-weight-bold">
                Hypertext Markup Language
                <v-spacer></v-spacer>
            </v-card-title>
        </v-card>

        <template>
            <v-card
                class="mx-auto"
                width="50%"
            >
                <v-card-text>
                    <div>HTML</div>
                        <p class="text-h4 text--primary">
                            Hypertext Markup Language
                        </p>
                    <div class="text--primary">
                        HTML adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web<br>
                    </div>
                        <p>kegunaan HTML</p>
                    <div class="text--primary">
                        1. membuat struktur dari halamnan web <br>
                        2. mengatur tampilan dan isi dari halaman web<br>
                        3. membuat tabel dengan tag HTML Table<br>
                        4. membuat form HTML<br>
                        5. mempublikasikan halaman website secara online<br>
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
                                src="../assets/Screenshot HTML-Form.png"
                                width="630px"
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