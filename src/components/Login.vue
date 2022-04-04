<template>
    <div class="login">
        <div class="login__form">
            <button 
                @click="$emit('toggleLogin')"
                class="login__close"
            >
                &#10006;
            </button>
            Login
        </div>
    </div>
</template>

<script>

// import { computed, onMounted } from "vue";

export default {
    name: 'Login',
    components: {
    },
    mixins: [],
    setup() {
        
    },
};
</script>