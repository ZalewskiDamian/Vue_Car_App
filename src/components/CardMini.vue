<template>
<div class="card-mini">
    <div class="card-mini__image-wrapper">
        <img src="../assets/images/card-template.jpg" alt="avatar" class="card-mini__image">
    </div>
    <div class="card-mini__content">
        <h3 class="card-mini__heading">Nazwa ogłoszenia</h3>
        <div class="card-mini__row">
            <span class="card-mini__text">Liczba wyświetleń:</span>
            <span class="card-mini__text">1524</span>
        </div>
        <div class="card-mini__row">
            <span class="card-mini__text">Ocena:</span>
            <span class="card-mini__text">4.8</span>
        </div>
        <router-link
            to="/carDetails"
            class="card-mini__button"
        >
            Zobacz ogłoszenie
        </router-link
    >
    </div>
    
</div>
</template>

<script>
export default {
    name: 'CardMini',
    components: {
    },
    mixins: [],
    setup() {
        
    },
};
</script>