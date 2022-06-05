<template>
<div class="profile">
    <div class="container">
        <div class="profile__user">
            <div class="profile__avatar-wrapper">
                <img src="../assets/images/default-user-avatar.png" alt="avatar" class="profile__avatar">
            </div>
            <div class="profile__data-wrapper">
                <h3 class="profile__nickname">WilkuWDZ</h3>
                <p class="profile__email">test@gmail.com</p>
            </div>
        </div>
        <div class="profile__grid">
            <div class="profile__grid-section">
                <h2 class="profile__heading">
                    Ogłoszenia użytkownika
                </h2>
                <div class="profile__grid-content">
                    <CardMini />
                    <CardMini />
                    <CardMini />
                    <CardMini />
                </div>
            </div>
            <div class="profile__grid-section">
                <h2 class="profile__heading">
                    Ostatnio komentowane
                </h2>
                <div class="profile__grid-content">
                    <CardMini />
                    <CardMini />
                    <CardMini />
                    <CardMini />
                </div>
            </div>
            <div class="profile__grid-section">
                <h2 class="profile__heading">
                    Ostatnio oceniane
                </h2>
                <div class="profile__grid-content">
                    <CardMini />
                    <CardMini />
                    <CardMini />
                    <CardMini />
                </div>
            </div>
            <div class="profile__grid-section">
                <h2 class="profile__heading">
                    Ostatnio tu byli
                </h2>
                <div class="profile__users-wrapper">
                    <router-link to="/user/${id}">
                        <div class="profile__user-box">
                            <img src="../assets/images/default-user-avatar.png" alt="avatar" class="profile__user-box-avatar">
                            <p class="profile__user-box-name">Użytkownik x</p> 
                        </div>
                    </router-link>
                    <router-link to="/user/${id}">
                        <div class="profile__user-box">
                            <img src="../assets/images/default-user-avatar.png" alt="avatar" class="profile__user-box-avatar">
                            <p class="profile__user-box-name">Użytkownik dawdwax</p> 
                        </div>
                    </router-link>
                    <router-link to="/user/${id}">
                        <div class="profile__user-box">
                            <img src="../assets/images/default-user-avatar.png" alt="avatar" class="profile__user-box-avatar">
                            <p class="profile__user-box-name">Użytkownik dwawx</p> 
                        </div>
                    </router-link>
                    <router-link to="/user/${id}">
                        <div class="profile__user-box">
                            <img src="../assets/images/default-user-avatar.png" alt="avatar" class="profile__user-box-avatar">
                            <p class="profile__user-box-name">Użytkownik xdawdw</p> 
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
import CardMini from '../components/CardMini.vue';
export default {
    name: 'UserProfile',
    components: {
        CardMini,
    },
    mixins: [],
    setup() {
        
    },
    data() {
    }
};
</script>