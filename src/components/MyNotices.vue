<template>
    <div class="userNotices">
        <h3 class="userNotices__title">
            Moje auta
        </h3>
        <div class="userNotices__wrapper">
            <div class="userNotices__list">
                <div class="userNotices__card">
                    <div class="userNotices__cardImageWrapper">
                        <img src="../assets/images/card-template.jpg" alt="car" class="userNotices__cardImage">
                    </div>
                    <div class="userNotices__cardContent">
                        <p class="userNotices__cardTitle">BMW M3</p>
                        <p class="userNotices__cardText">
                            Liczba wyświetleń: <span id="views-amount">1920</span>
                        </p>
                        <p class="userNotices__cardText">
                            Liczba głosów: <span id="views-amount">54</span>
                        </p>
                        <p class="userNotices__cardText">
                            Średnia głosów: <span id="views-amount">4.8</span>
                        </p>
                        <div class="userNotices__cardButtonGroup">
                            <a href="#" class="userNotices__cardButton">Edytuj</a>
                            <a href="#" class="userNotices__cardButton">Usuń</a>
                        </div>
                    </div>
                </div>
                <div class="userNotices__card">
                    <div class="userNotices__cardImageWrapper">
                        <img src="../assets/images/card-template.jpg" alt="car" class="userNotices__cardImage">
                    </div>
                    <div class="userNotices__cardContent">
                        <p class="userNotices__cardTitle">BMW M3</p>
                        <p class="userNotices__cardText">
                            Liczba wyświetleń: <span id="views-amount">1920</span>
                        </p>
                        <p class="userNotices__cardText">
                            Liczba głosów: <span id="views-amount">54</span>
                        </p>
                        <p class="userNotices__cardText">
                            Średnia głosów: <span id="views-amount">4.8</span>
                        </p>
                        <div class="userNotices__cardButtonGroup">
                            <a href="#" class="userNotices__cardButton">Edytuj</a>
                            <a href="#" class="userNotices__cardButton">Usuń</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyNotices',
    components: {
    },
    mixins: [],
    setup() {
        
    },
};
</script>