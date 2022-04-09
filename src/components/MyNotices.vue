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
                        <div class="userNotices__cardButtonGroup">
                            <a href="#" class="userNotices__cardButton">Edytuj ogłoszenie</a>
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
                        <div class="userNotices__cardButtonGroup">
                            <a href="#" class="userNotices__cardButton">Edytuj ogłoszenie</a>
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