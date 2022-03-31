<template>
    <section class="home">
       tresc home <span class="test">{{sections}}</span>
    </section>
</template>

<script>
import { useStore } from "vuex";
// import { computed, onMounted } from "vue";

export default {
    components: {
    },
    mixins: [],
    setup() {
        const store = useStore();
        console.log(store);
        const sections = 'test';
        return { sections };
    },
};
</script>
