<template>
    <div class="login">
        <button 
            @click="$emit('toggleLogin')"
            class="login__close"
        >
            &#10006;
        </button>
        <div class="login__form">
            <div v-if="isLogin" class="login__shadow" >
                <h2 class="login__title">Logowanie</h2>
                <input class="login__input" type="text" placeholder="Login / E-mail"/>
                <input class="login__input" type="password" placeholder="********"/>
                <button class="login__submit">Zaloguj</button>
                <p class="login__p">
                    Nie masz jeszcze konta? 
                    <button 
                        @click="handleLogin('register')"
                        class="login__button-register">
                        Zarejestruj się!
                    </button>
                </p>
                <p class="login__p">
                    Zapomniałeś hasła? 
                    <button 
                        @click="handleLogin('reset')"
                        class="login__button-register"
                    >
                        Przypomnij hasło!
                    </button>
                </p>
            </div>
            <div v-if="isReset" class="login__shadow" >
                <h2 class="login__title">Przypomnij hasło</h2>
                <input class="login__input" type="text" placeholder="Login / E-mail"/>
                <button class="login__submit">Przypomnij</button>
                <p class="login__p">
                    Nie masz jeszcze konta? 
                    <button 
                        @click="handleLogin('register')"
                        class="login__button-register">
                        Zarejestruj się!
                    </button>
                </p>
            </div>
            <div v-if="isRegister" class="login__shadow" >
                <h2 class="login__title">Rejestracja</h2>
                <input class="login__input" type="text" placeholder="Login"/>
                <input class="login__input" type="email" placeholder="E-mail"/>
                <input class="login__input" type="password" placeholder="Hasło"/>
                <input class="login__input" type="password" placeholder="Powtórz hasło"/>
                <button class="login__submit">Zarejestruj</button>
                <p class="login__p">
                    Masz już konto? 
                    <button 
                        @click="handleLogin('login')"
                        class="login__button-register"
                    >
                        Zaloguj się!
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from "vue";

export default {
    name: 'Login',
    components: {
    },
    mixins: [],
    setup() {
        let isLogin = ref(true);
        let isReset = ref(false);
        let isRegister = ref(false);


        const handleLogin = (type) => {
            switch(type) {
                case 'reset':
                    isReset.value = true;
                    isRegister.value = false;
                    isLogin.value = false;
                break;
                case 'login':
                    isLogin.value = true;
                    isRegister.value = false;
                    isReset.value = false;
                break;
                case 'register':
                    isRegister.value = true;
                    isLogin.value = false;
                    isReset.value = false;
                break;
            }
        };

        
        return {
            isLogin,
            isRegister,
            isReset,
            handleLogin
        }
    },
};
</script>