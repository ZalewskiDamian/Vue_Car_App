<template>
    <section class="home">
        <Carousel :wrap-around="true">
            <Slide :key="1">
                <div class="carousel__item">
                    <img src="../assets/images/headslider2.jpg">
                </div>
            </Slide>
            <Slide  :key="2">
                <div class="carousel__item">
                    <img src="../assets/images/headslider1.jpg">
                </div>
            </Slide>
            <Slide :key="3">
                <div class="carousel__item">
                    <img src="../assets/images/headslider3.jpg">
                </div>
            </Slide>
            <Slide :key="4">
                <div class="carousel__item">
                    <img src="../assets/images/headslider4.jpg">
                </div>
            </Slide>
            <Slide :key="5">
                <div class="carousel__item">
                    <img src="../assets/images/headslider5.jpg">
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

       <div class="container">
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
           <h1 class="section-heading">Nasze samochody</h1>
           <div class="search">
               <input type="search" class="search__input" placeholder="Szukaj...">
           </div>
           
           <div class="cars-wrapper">
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
           </div>
       </div>
    </section>
</template>

<script>
import { useStore } from "vuex";
import VueNextSelect from 'vue-next-select';
import "vue-next-select/dist/index.css";
import Card from '../components/Card.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';


// import { computed, onMounted } from "vue";

export default {
    components: {
        'vue-select': VueNextSelect,
        Card,
        Carousel,
        Slide,
        Navigation,
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