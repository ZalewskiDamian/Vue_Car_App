<template>
    <div class="container">
        <div class="details">
            <div class="details__row">
                <div class="details__gallery">
                    <Carousel :wrap-around="true">
                        <Slide v-for="slide in 10" :key="slide">
                            <div class="carousel__item">
                                <img src="../assets/images/card-template.jpg" alt="images">
                            </div>
                        </Slide>
                        <Slide v-for="slide in 10" :key="slide">
                            <div class="carousel__item">
                                <img src="../assets/images/card-template.jpg" alt="images">
                            </div>
                        </Slide>
                        <Slide v-for="slide in 10" :key="slide">
                            <div class="carousel__item">
                                <img src="../assets/images/card-template.jpg" alt="images">
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                    <vue3-star-ratings 
                        v-model="rating"
                        starSize='25'
                        controlBg='#8D3131'
                    />
                </div>
                <div class="details__description">
                    <h2 class="details__heading">
                        BMW M3
                    </h2>
                    <p class="details__price">
                        PLN <span id="price">18 900</span>
                    </p>
                    <ul class="details__list">
                        <li class="details__listItem">
                            <img src="../assets/images/year-of-production-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Rok produkcji:</span>
                            <span class="details__text">2020</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/engine-capacity-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Pojemność silnika:</span>
                            <span class="details__text">1248cm³</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/engine-type-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Typ silnika:</span>
                            <span class="details__text">m50b25</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/fuel-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Rodzaj paliwa:</span>
                            <span class="details__text">Benzyna</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/transmission-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Skrzynia biegów:</span>
                            <span class="details__text">Manualna</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/doors-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Liczba drzwi:</span>
                            <span class="details__text">5</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/capacity-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Liczba miejsc:</span>
                            <span class="details__text">5</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/fuel-tank-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Pojemność baku:</span>
                            <span class="details__text">50l</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/color-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Kolor:</span>
                            <span class="details__text">Czarny</span>
                        </li>
                        <li class="details__listItem">
                            <img src="../assets/images/car-body-icon.png" alt="icon" class="details__listIcon">
                            <span class="details__text">Typ karoserii:</span>
                            <span class="details__text">Sedan</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="details__additionalInformation">
                <h3 class="details__heading">
                    Dodatkowe informacje:
                </h3>
                <p class="details__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati, est numquam repellat dolore quos itaque commodi expedita illum, cumque aliquam, neque fuga similique harum eum? Sed ratione atque voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, iure tenetur maxime aspernatur tempore at, fugit quo quisquam culpa, quas neque? Saepe blanditiis dignissimos, quia quasi dolores voluptate sit sed?
                </p>
            </div>
            <div class="details__comments">
                <h3 class="details__heading">
                    Komentarze:
                </h3>
                <div class="comments">
                    <div class="comments__addWrapper">
                        <textarea name="addComment" id="" cols="30" rows="10" class="comments__textarea" placeholder="Napisz komentarz"></textarea>
                        <div class="comments__buttonGroup">
                            <button class="comments__button">Napisz</button>
                        </div>
                    </div>
                    <div class="comments__wrapper">
                        <div class="comments__comment">
                            <div class="comments__commentHeader">
                                <img src="../assets/images/comment-avatar.png" alt="avatar" class="comments__commentAvatar">
                                <p class="comments__commentName">John Doe</p>
                            </div>
                            <p class="comments__commentText">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur, sequi labore qui atque earum dolores harum, aliquam rem sint minus eos tempora amet facere magnam expedita. Impedit, recusandae nisi!
                            </p>
                            <div class="comments__commentBottom">
                                <img src="../assets/images/comments-reply-button-icon.png" alt="icon" class="comments__commentReplyIcon">
                                <a href="#" class="comments__commentReplyButton">Odpowiedz</a>
                                <span class="comments__commentDate">20.10.2022 / 12:45</span>
                            </div>
                        </div>
                        <div class="comments__comment reply">
                            <div class="comments__commentHeader">
                                <img src="../assets/images/comment-avatar.png" alt="avatar" class="comments__commentAvatar">
                                <p class="comments__commentName">John Doe</p>
                            </div>
                            <p class="comments__commentText">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur, sequi labore qui atque earum dolores harum, aliquam rem sint minus eos tempora amet facere magnam expedita. Impedit, recusandae nisi!
                            </p>
                            <div class="comments__commentBottom">
                                <img src="../assets/images/comments-reply-button-icon.png" alt="icon" class="comments__commentReplyIcon">
                                <a href="#" class="comments__commentReplyButton">Odpowiedz</a>
                                <span class="comments__commentDate">20.10.2022 / 12:45</span>
                            </div>
                        </div>
                        <div class="comments__comment">
                            <div class="comments__commentHeader">
                                <img src="../assets/images/comment-avatar.png" alt="avatar" class="comments__commentAvatar">
                                <p class="comments__commentName">John Doe</p>
                            </div>
                            <p class="comments__commentText">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur, sequi labore qui atque earum dolores harum, aliquam rem sint minus eos tempora amet facere magnam expedita. Impedit, recusandae nisi!
                            </p>
                            <div class="comments__commentBottom">
                                <img src="../assets/images/comments-reply-button-icon.png" alt="icon" class="comments__commentReplyIcon">
                                <a href="#" class="comments__commentReplyButton">Odpowiedz</a>
                                <span class="comments__commentDate">20.10.2022 / 12:45</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import vue3starRatings from "vue3-star-ratings";

import 'vue3-carousel/dist/carousel.css';
// import { computed, onMounted } from "vue";

export default {
    name: 'CarDetails',
    components: {
        "vue3-star-ratings": vue3starRatings,
        Carousel,
        Slide,
        Navigation,
    },
    mixins: [],
    setup() {
        
    },
};
</script>