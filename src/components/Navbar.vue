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
                   <a href="#" class="navbar__link">LOGO</a>
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

// import { computed, onMounted } from "vue";

export default {
    name: "Navbar",
    components: {
    },
    mixins: [],
    setup() {
        
    },
};
</script>

<style scoped>
.navbar {
    width: 100%;
    background-color: #8D3131;
    padding: 0 20px;
}
.navbar__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.navbar__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.navbar__navItem:hover {
    background-color: #6c0e0e;
}
.navbar__link {
    display: block;
    color: white;
    font-size: 18px;
    padding: 30px 20px;
}
.navbar__btn {
    display: block;
    color: black;
    background-color: white;
    padding: 10px 15px;
    font-weight: 500;
    border-radius: 4px;
    flex-shrink: 0;
    transition: all .2s ease-in-out;
}
.navbar__btn:hover {
    background-color: black;
    color: white;
}
</style>
