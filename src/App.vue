<template>
    <Navbar />
    <router-view :key="$route.path"></router-view>
    <Footer />
</template>

<script>
// import { watch, onMounted, computed } from "vue";
// import { useStore } from "vuex";
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: "App",
    mixins: [],
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
        };
    },

    setup() {
        return {  };
    },
    mounted() {
    },
};
</script>

<style></style>
