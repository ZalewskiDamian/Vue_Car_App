<template>
    <div class="header">
        <div class="header__menu">
            <button class="header__menuBtn" @click="currentTabComponent = 'Tab1'">Dodaj auto</button>
            <button class="header__menuBtn" @click="currentTabComponent = 'Tab2'">Moje auta</button>
            <button class="header__menuBtn" @click="currentTabComponent = 'Tab3'">Ustawienia</button>
        </div>
        <keep-alive>
            <div class="container">
                <component :is="currentTabComponent"></component>
            </div>
        </keep-alive>
    </div>
</template>

<script>
import Tab1 from "../components/AddNotice.vue";
import Tab2 from "../components/MyNotices.vue";
import Tab3 from "../components/ProfileSettings.vue";

export default {
    name: 'UserPanel',
    components: {
        Tab1,
        Tab2,
        Tab3,
    },
    mixins: [],
    setup() {
        
    },
    data() {
        return {
            currentTabComponent: "Tab1",
        };
    }
};
</script>