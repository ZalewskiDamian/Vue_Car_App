<template>
    <section class="home">
       <div class="container">
           <h1 class="section-heading">Nasze samochody</h1>
           <div class="search">
               <input type="search" class="search__input" placeholder="Szukaj...">
           </div>
           <div class="filters">
               <vue-select searchable :options="[{ color: 'Red' }, { color: 'Green' }]" label-by="color"> </vue-select>
           </div>
       </div>
    </section>
</template>

<script>
import Vue from "vue";
import { useStore } from "vuex";
import VueNextSelect from 'vue-next-select'
import "vue-next-select/dist/index.css";


// import { computed, onMounted } from "vue";

export default {
    components: {
        'vue-select': VueNextSelect,
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