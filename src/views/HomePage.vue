<template>
    <section class="home">
       <div class="container">
           <h1 class="section-heading">Nasze samochody</h1>
           <div class="search">
               <input type="search" class="search__input" placeholder="Szukaj...">
           </div>
           <div class="filters">
                <div class="filters__inner">
                    <p class="filters__title">Rok produkcji</p>
                    <vue-select
                        class="filters__select"
                        searchable 
                        :options="[{ color: 'Red' }, { color: 'Green' }]" 
                        label-by="color"
                        clear-on-close
                        search-placeholder="Test"
                    /> 
               </div>
                <div class="filters__inner">
                    <p class="filters__title">Pojemność</p>
                    <vue-select
                        class="filters__select"
                        searchable 
                        :options="[{ color: 'Red' }, { color: 'Green' }]" 
                        label-by="color"
                        clear-on-close
                        search-placeholder="Select user"
                    /> 
               </div>
                <div class="filters__inner">
                    <p class="filters__title">Paliwo</p>
                    <vue-select
                        class="filters__select"
                        searchable 
                        :options="[{ color: 'Red' }, { color: 'Green' }]" 
                        label-by="color"
                        clear-on-close
                        search-placeholder="Select user"
                    /> 
               </div>
                <div class="filters__inner">
                    <p class="filters__title">Kolor</p>
                    <vue-select
                        class="filters__select"
                        searchable 
                        :options="[{ color: 'Red' }, { color: 'Green' }]" 
                        label-by="color"
                        clear-on-close
                        search-placeholder="Select user"
                    /> 
               </div>
                <div class="filters__inner">
                    <p class="filters__title">Karoseria</p>
                    <vue-select
                        class="filters__select"
                        searchable 
                        :options="[{ color: 'Red' }, { color: 'Green' }]" 
                        label-by="color"
                        clear-on-close
                        search-placeholder="Select user"
                    /> 
               </div>
               <div class="filters__buttonWrapper">
                   <button type="button" class="filters__searchBtn">Szukaj</button>
               </div>
           </div>
       </div>
    </section>
</template>

<script>
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