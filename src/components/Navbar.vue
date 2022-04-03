<template>
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
            <a href="#" class="navbar__btn">Zaloguj się</a>
       </div>
    </div>
</template>

<script>

export default {
    name: "Navbar",
    components: {
    },
    mixins: [],
    setup() {
        
    },
};
</script>