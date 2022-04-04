<template>
    <transition name="fade" mode="out-in">
        <Login v-if="isLogin" @toggleLogin="toggleLogin"/>
    </transition>

    <div class="navbar">
       <div class="navbar__wrapper">
           <ul class="navbar__nav">
               <li class="navbar__navItem">
                   <a href="#" class="navbar__link">Samochody</a>
               </li>
               <li class="navbar__navItem">
                   <a href="#" class="navbar__link">Serwis</a>
               </li>
               <li class="navbar__navItem">
                   <router-link
                        to="/"
                        class="navbar__link navbar__link--logo"
                    >
                        <img src="../assets/images/e34-logo.svg" alt="logo" class="navbar__logo">
                    </router-link>
               </li>
               <li class="navbar__navItem">
                   <a href="#" class="navbar__link">Kontakt</a>
               </li>
               <li class="navbar__navItem">
                   <a href="#" class="navbar__link">O nas</a>
               </li>
           </ul>
            <a href="#" class="navbar__btn" @click="toggleLogin">Zaloguj się</a>
       </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue';
import { ref } from "vue";
export default {
    name: "Navbar",
    components: {
        Login
    },
    mixins: [],
    setup() {
        let isLogin = ref(false);

        const toggleLogin = () => {
            isLogin.value = !isLogin.value;

            if (isLogin.value) {
                document.getElementsByTagName("html")[0].classList.add("no-scroll");
            } else {
                document.getElementsByTagName("html")[0].classList.remove("no-scroll");
            }
        };
        
        return {
            isLogin,
            toggleLogin
        }
    },
};
</script>