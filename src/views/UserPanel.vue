<template>
    <div class="header">
        <div class="header__menu">
            <button class="header__menuBtn" @click="currentTabComponent = 'Tab1'">Dodaj auto</button>
            <button class="header__menuBtn" @click="currentTabComponent = 'Tab2'">Moje auta</button>
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

export default {
    name: 'UserPanel',
    components: {
        Tab1,
        Tab2,
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