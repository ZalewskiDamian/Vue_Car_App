<template>
    <div class="card">
        <div class="card__badge">SPRZEDAŻ</div>
        <div class="card__mask">
            <router-link
                to="/carDetails"
                class="card__button"
                >Zobacz więcej</router-link
            >
            <!-- <a href="#" class="card__button">Zobacz więcej</a> -->
        </div>
        <div class="card__imageWrapper">
            <img src="../assets/images/card-template.jpg" alt="car" class="card__image">
        </div>
        <div class="card__content">
            <h3 class="card__title">BMW M3</h3>
            <div class="card__detailsWrapper">
                <div class="card__detailsInner">
                    <img src="../assets/images/year-of-production-icon.png" alt="icon" class="card__detailsIcon">
                    <p class="card__detailsText">1992</p>
                </div>
                <div class="card__detailsInner">
                    <img src="../assets/images/capacity-icon.png" alt="icon" class="card__detailsIcon">
                    <p class="card__detailsText">4</p>
                </div>
                <div class="card__detailsInner">
                    <img src="../assets/images/fuel-icon.png" alt="icon" class="card__detailsIcon">
                    <p class="card__detailsText">Deasel</p>
                </div>
                <div class="card__detailsInner">
                    <img src="../assets/images/color-icon.png" alt="icon" class="card__detailsIcon">
                    <p class="card__detailsText">Czarny</p>
                </div>
                <div class="card__detailsInner">
                    <img src="../assets/images/car-body-icon.png" alt="icon" class="card__detailsIcon">
                    <p class="card__detailsText">Sedan</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import { computed, onMounted } from "vue";

export default {
    name: 'Card',
    components: {
    },
    mixins: [],
    setup() {
        
    },
};
</script>