<template>
    <section class="home">
       <div class="container">
           <h1 class="section-heading">Nasze samochody</h1>
           <div class="search">
               <input type="search" class="search__input" placeholder="Szukaj...">
           </div>
           <div class="filters">
               <v-select :options="['Canada', 'United States']"></v-select>
           </div>
       </div>
    </section>
</template>

<script>
import Vue from "vue";
import { useStore } from "vuex";
import vSelect from "vue-select-3";
// import { computed, onMounted } from "vue";

export default {
    components: {
        vSelect
    },
    mixins: [],
    setup() {
        const store = useStore();
        console.log(store);
        // const sections = 'test';
        // return { sections };
    },
};
</script>