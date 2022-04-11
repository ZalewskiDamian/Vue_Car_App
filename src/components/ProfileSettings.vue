<template>
    <div class="settings">
        <div class="settings__header">
            <div class="settings__headerAvatarWrapper">
                <img src="../assets/images/default-user-avatar.png" alt="avatar" class="settings__headerAvatar">
            </div>
            <div class="settings__headingsWrapper">
                <p class="settings__heading">Imię</p>
                <p class="settings__heading">Nazwisko</p>
            </div>
        </div>
        <div class="settings__form">
            <h3 class="settings__title">Dane użytkownika</h3>
            <div class="settings__formSection">
                <div class="settings__row settings__grid">
                    <div class="settings__inputGroup">
                        <label for="" class="settings__label">Imię</label>
                        <input type="text" class="settings__input">
                    </div>
                    <div class="settings__inputGroup">
                        <label for="" class="settings__label">Nazwisko</label>
                        <input type="text" class="settings__input">
                    </div>
                </div>
                <div class="settings__row">
                    <label for="" class="settings__label">Miejscowość</label>
                    <input type="text" class="settings__input">
                </div>
                <div class="settings__row">
                    <label for="" class="settings__label">Telefon kontaktowy</label>
                    <input type="text" class="settings__input">
                </div>
            </div>
            <h3 class="settings__title">Zmień hasło</h3>
            <div class="settings__formSection">
                <div class="settings__row">
                    <label for="" class="settings__label">Nowe hasło</label>
                    <input type="text" class="settings__input">
                </div>
                <div class="settings__row">
                    <label for="" class="settings__label">Powtórz hasło</label>
                    <input type="text" class="settings__input">
                </div>
            </div>
            <h3 class="settings__title">Zmień avatar</h3>
            <div class="settings__formSection">
                <div class="settings__avatarRow">
                    <img src="../assets/images/default-user-avatar.png" alt="" class="settings__avatar">
                    <div class="settings__changeAvatar">
                        <input type="file" name="file" id="file" accept="image/*" class="settings__inputFile" />
                        <label for="file">Ustaw avatar</label>
                    </div>
                </div>
            </div>
            <div class="settings__buttonWrapper">
                <button type="submit" class="settings__button">Zapisz zmiany</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileSettings',
    components: {
    },
    mixins: [],
    setup() {
        
    },
};
</script>