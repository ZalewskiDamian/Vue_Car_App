<template>
    <div class="notice">
        <h3 class="notice__title">Dodaj auto</h3>
        <div class="notice__form">
            <h4 class="notice__subtitle">
                Specyfikacja auta
            </h4>
            <div class="notice__formSection notice__grid">
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Tytuł ogłoszenia</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Rok produkcji</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Pojemność silnika</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Typ silnika</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Rodzaj paliwa</label>
                    <select name="" id="" class="notice__select">
                        <option>Benzyna</option>
                        <option>Deasel</option>
                    </select>
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Skrzynia biegów</label>
                    <select name="" id="" class="notice__select">
                        <option>Manualna</option>
                        <option>Automatyczna</option>
                    </select>
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Liczba drzwi</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Liczba miejsc</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Pojemność baku</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Kolor</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Typ karoserii</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">VIN</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Przebieg</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Cena</label>
                    <input type="text" class="notice__input">
                </div>
                <div class="notice__inputGroup">
                    <label for="" class="notice__label">Miejscowość</label>
                    <input type="text" class="notice__input">
                </div>
            </div>
            <h4 class="notice__subtitle">
                Wyposażenie
            </h4>
            <div class="notice__formSection">
                <multi-check-box v-model:value="heroes" :options="options" />
                <p>{{heroes}}</p>
            </div>
            <h4 class="notice__subtitle">
                Zdjęcia
            </h4>
            <div class="notice__formSection">
                <input type="file" name="file" id="file" accept="image/*" class="notice__inputFile" />
                <label for="file">Dodaj zdjęcia</label>
            </div>
            <h4 class="notice__subtitle">
                Opis
            </h4>
            <div class="notice__formSection">
                <textarea name="" id="" cols="30" rows="10" placeholder="Dodaj opis auta..." class="notice__textarea"></textarea>
            </div>
            <button class="notice__button">Dodaj ogłoszenie</button>
        </div>
    </div>
</template>

<script>
import MultiCheckbox from './MultiCheckbox.vue';
import { ref, onMounted } from "vue";

export default {
    name: 'AddNotice',
    components: {
        "multi-check-box": MultiCheckbox,
    },
    mixins: [],
    setup() {
    let heroes = ref([]);
    let options = ref([]);

    const getMyHeroes = () => {
      heroes.value = [2, 3, 4];
    };

    const getHeroOptions = () => {
      options.value = [
        { name: "ABS", id: 1 },
        { name: "CD", id: 2 },
        { name: "Elektrycznie ustawiane lusterka", id: 3 },
        { name: "Gniazdo USB", id: 4 },
        { name: "Klimatyzacja manualna", id: 5 },
        { name: "Podgrzewane lusterka boczne", id: 6 },
        { name: "Poduszki boczne przednie", id: 7 },
        { name: "Poduszki boczne tylne", id: 8 },
        { name: "Alarm", id: 9 },
        { name: "Alarm", id: 11 },
        { name: "Alarm", id: 12 },
        { name: "Alarm", id: 13 },
        { name: "Alarm", id: 14 },
        { name: "Alarm", id: 15 },
        { name: "Alarm", id: 16 },
        { name: "Alarm", id: 17 },
        { name: "Alarm", id: 18 },
        { name: "Alarm", id: 19 },
        { name: "Alarm", id: 20 },
      ];
    };

    onMounted(() => {
      getHeroOptions();
      getMyHeroes();
    });

    return {
      heroes,
      options,
    };
  },
};
</script>