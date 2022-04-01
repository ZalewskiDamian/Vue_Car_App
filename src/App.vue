<template>
    <Navbar />
    <router-view :key="$route.path"></router-view>
</template>

<script>
// import { watch, onMounted, computed } from "vue";
// import { useStore } from "vuex";
import Navbar from './components/Navbar.vue'

export default {
    name: "App",
    mixins: [],
    components: {
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
