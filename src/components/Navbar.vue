<template>
    <transition name="fade" mode="out-in">
        <Login v-if="isLogin" @toggleLogin="toggleLogin"/>
    </transition>

    <div class="navbar">
       <div class="navbar__wrapper">
           <div class="navbar__col">
                <router-link to="/">
                    <img src="../assets/images/e34-logo.svg" alt="logo" class="navbar__logo">
                </router-link>
           </div>
           <ul class="navbar__nav">
               <li class="navbar__navItem">
                   <a href="#" class="navbar__link">Samochody</a>
               </li>
               <li class="navbar__navItem">
                   <a href="#" class="navbar__link">Serwis</a>
               </li>
               <li class="navbar__navItem">
                   <a href="#" class="navbar__link">Kontakt</a>
               </li>
               <li class="navbar__navItem">
                   <a href="#" class="navbar__link">O nas</a>
               </li>
           </ul>
           <div class="navbar__col navbar__col--button">
               <a class="navbar__btn" @click="toggleLogin">Zaloguj</a>
               <img src="../assets/images/hamburger-icon.png" alt="hamburger" class="navbar__hamburger" @click="toggleMenu">
               <img src="../assets/images/hamburger-close-icon.png" alt="hamburger" class="navbar__hamburger-close" @click="toggleMenu">
           </div>
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
        let isMenuOpen = ref(false);

        const toggleLogin = () => {
            isLogin.value = !isLogin.value;

            if (isLogin.value) {
                document.getElementsByTagName("html")[0].classList.add("no-scroll");
            } else {
                document.getElementsByTagName("html")[0].classList.remove("no-scroll");
            }
        };

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;

            if (isMenuOpen.value) {
                document.querySelector(".navbar__nav").classList.add("active");
                document.querySelector(".navbar__hamburger").style.display = "none";
                document.querySelector(".navbar__hamburger-close").style.display = "block";
            } else {
                document.querySelector(".navbar__nav").classList.remove("active");
                document.querySelector(".navbar__hamburger").style.display = "block";
                document.querySelector(".navbar__hamburger-close").style.display = "none";
            }
              
        }
        
        return {
            isLogin,
            toggleLogin,
            isMenuOpen,
            toggleMenu
        }
    },
};
</script>