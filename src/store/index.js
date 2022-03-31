import { createStore } from "vuex";
import axios from "axios";
import qs from "qs";
import router from "../router/router";

// const wAxios = window.axios;
const API_HOST = window.__apiHost;

const BLOCK_LIST = `${API_HOST}/api/swipeto/block/list?device=www&pifalala=1`;
const BLOCK_ITEM = `${API_HOST}/api/swipeto/block?device=www&pifalala=2&id=`;

const BLOCK_ITEMS = `${API_HOST}/api/swipeto/block/items?device=www`;
const BLOCK_AUDIO = `${API_HOST}/api/swipeto/audio/list?device=www`;
const BLOCK_VIDEO = `${API_HOST}/api/swipeto/video/list?device=www`;
const BLOCK_NEWS = `${API_HOST}/api/swipeto/news/list?device=www`;

const DROP_MENU = "/api/swipeto/category/list?device=www";
const NEWS_AUDIO = "/api/swipeto/audio?device=www&id=";
const NEWS_VIDEO = "/api/swipeto/video?device=www&id=";
const NEWS_EDITOR = "/api/swipeto/editor?device=www&id=";
const NEWS_ARTICLE = "/api/swipeto/news?device=www&id=";
const EDITOR_LIST = "/api/swipeto/editor/list?device=www";

export default createStore({
    state: {
        lightMode: false,
        isSearch: false,
        lazyLoading: false,
        LazyBtnMore: false,
        sectionsData: [],
        dropmenuCategories: null,
        newsData: [],
        userData: [],
        playerData: [],
        profileData: [],
        webview: false,
        pagesData: [],
        globalUserData: [],
    },
    mutations: {
        setWebview(state) {
            state.webview = true;
        },
        clearSectionData(state) {
            state.sectionsData = [];
        },
        changeThemeMode(state) {
            state.lightMode = !state.lightMode;
            if (state.lightMode) {
                localStorage.setItem("lightMode", 1);
            } else {
                localStorage.setItem("lightMode", 0);
            }
        },

        changeSearchState(state) {
            state.isSearch = !state.isSearch;
        },

        changePlayerState(state, payload) {
            state.playerData = payload.data;
        },

        addsectionsData(state, payload) {
            if (state.sectionsData && state.sectionsData.length) {
                state.sectionsData = [...state.sectionsData, payload];
            } else {
                state.sectionsData = [payload];
            }
        },

        setDropmenuCategories(state, payload) {
            state.dropmenuCategories = payload;
        },

        addNewsData(state, data) {
            state.newsData = data;
        },

        resetNewsData(state) {
            state.newsData = [];
        },

        addProfileData(state, data) {
            state.profileData = data;
        },

        addPasswordData(state, data) {
            state.passwordData = data;
        },

        addLazyBlocks(state, data) {
            state.lazyBlocksData = data;
            if (data.total_count < 5) {
                state.LazyBtnMore = false;
            }
        },
        changeLazyBtnMore(state) {
            state.LazyBtnMore = true;
        },

        addLazyLoading(state, data) {
            state.lazyLoading = data;
        },

        addArticlesData(state, data) {
            state.articlesData = data;
        },

        addEditorsData(state, data) {
            state.editorsData = data;
        },

        addRegisterData(state, data) {
            state.registerData = data;
        },

        addLoginData(state, data) {
            state.loginData = data;
        },

        addContactData(state, data) {
            state.contactData = data;
        },

        addResetData(state, data) {
            state.resetData = data;
        },

        addUserData(state, data) {
            state.userData = data;
        },

        addConfirmRegisterData(state, data) {
            state.confirmRegisterData = data;
        },

        addResetPassData(state, data) {
            state.resetPassData = data;
        },
        addPagesData(state, data) {
            state.pagesData = data;
        },
        addGlobalUserData(state, data) {
            state.globalUserData = data;
        },
    },
    actions: {
        setWebview(context) {
            context.commit("setWebview");
        },
        clearSectionData(context) {
            context.commit("clearSectionData");
        },
        changeThemeMode(context) {
            context.commit("changeThemeMode");
        },

        changeSearchState(context) {
            context.commit("changeSearchState");
        },

        changePlayerState(context, payload) {
            context.commit("changePlayerState", payload);
        },

        changeBtnMore(context) {
            context.commit("changeLazyBtnMore");
        },

        getHomeIds(context) {
            axios.get(BLOCK_LIST).then((response) => {
                const modules = response.data.data.items;
                async function getModulesFromApi() {
                    for (const item of modules) {
                        if (item._id !== undefined) {
                            await axios.get(`${BLOCK_ITEM}${item._id}`).then((elems) => {
                                if (
                                    elems.data &&
                                    elems.data.data &&
                                    elems.data.data.items.length > 0
                                ) {
                                    context.commit("addsectionsData", elems.data.data);
                                }
                            });
                        }
                    }
                }
                getModulesFromApi();
            });
        },

        setDropmenuCategories(context) {
            axios
                .get(DROP_MENU, { useCache: false })
                .then((response) => {
                    if (response.status == 200 && typeof response.data !== "string") {
                        context.commit("setDropmenuCategories", response.data.data);
                    } else {
                        console.log("Brak danych");
                    }
                })
                .catch((error) => {
                    console.log(
                        `Wystąpił błąd: ${error.response.status} (${error.response.statusText})`
                    );
                });
        },

        getNews(context, payload) {
            if (payload.type === undefined) {
                const settingsType = window.__pageSettings.type;
                payload.type = settingsType;
            }

            let URL = "";
            if (payload.type === "AUDIO_S") {
                URL = NEWS_AUDIO;
            } else if (payload.type === "VIDEO") {
                URL = NEWS_VIDEO;
            } else if (payload.type === "EDITOR") {
                URL = NEWS_EDITOR;
            } else {
                URL = NEWS_ARTICLE;
            }

            const endpoint = URL + payload.id;
            axios
                .get(endpoint)
                .then((response) => {
                    if (response.status == 200 && response.data !== "null") {
                        context.commit("addNewsData", response.data.data);
                    } else {
                        console.log("Brak danych");
                    }
                })
                .catch((error) => {
                    if (error.response.status == "404") {
                        router.push({
                            name: "NotFound",
                            path: "/404",
                        });
                    }
                    console.log(
                        `Wystąpił błąd : ${error.response.status} (${error.response.statusText})`
                    );
                });
        },

        getLazyBlocks(context, payload) {
            context.commit("addLazyLoading", true);
            let endpoint;

            switch (payload.type) {
              case 'block':
                endpoint = BLOCK_ITEMS + "&id=" + payload.id + "&page=" + payload.page;
                break;
              case 'news':
                endpoint = BLOCK_NEWS + "&id=" + payload.id + "&page=" + payload.page;
                break;
              case 'video':
                endpoint = BLOCK_VIDEO + "&id=" + payload.id + "&page=" + payload.page;
                break;

              case 'audio':
                endpoint = BLOCK_AUDIO + "&id=" + payload.id + "&page=" + payload.page;
                break;
            }

            axios
                .get(endpoint)
                .then((response) => {
                    if (response.status == 200 && response.data !== "null") {
                        context.commit("addLazyBlocks", response.data.data);
                    } else {
                        console.log("Brak danych");
                    }
                    context.commit("addLazyLoading", false);
                })
                .catch((error) => {
                    console.log(
                        `Wystąpił błąd: ${error.response.status} (${error.response.statusText})`
                    );
                });
        },

        getArticles(context, payload) {
            let endpoint = "";

            switch (payload.type) {
              case 'block':
                endpoint = BLOCK_ITEMS;
                break;
              case 'news':
                endpoint = BLOCK_NEWS;
                break;
              case 'video':
                endpoint = BLOCK_VIDEO;
                break;

              case 'audio':
                endpoint = BLOCK_AUDIO;
                break;
            }

            if (payload.filterName === "editor") {
                endpoint = endpoint + "&editor_id=" + payload.filterId;
            }

            axios
                .get(endpoint)
                .then((response) => {
                    if (response.status == 200 && response.data !== "null") {
                        context.commit("addArticlesData", response.data.data);
                    } else {
                        console.log("Brak danych");
                    }
                })
                .catch((error) => {
                    console.log(
                        `Wystąpił błąd: ${error.response.status} (${error.response.statusText})`
                    );
                });
        },

        getEditors(context) {
            axios
                .get(EDITOR_LIST)
                .then((response) => {
                    if (response.status == 200 && response.data !== "null") {
                        context.commit("addEditorsData", response.data.data);
                    } else {
                        console.log("Brak danych");
                    }
                })
                .catch((error) => {
                    console.log(
                        `Wystąpił błąd: ${error.response.status} (${error.response.statusText})`
                    );
                });
        },

        login(context, payload) {
            const endpoint = "/sess/user-2.0/login.php?action=login&dump=json&src=swipeto";
            var data = new FormData();
            data.append("email", payload.email);
            data.append("password", payload.password);
            data.append("g-recaptcha-response", payload.token);

            axios
                .post(endpoint, data)
                .then((response) => {
                    context.commit("addLoginData", response.data);
                })
                .catch((error) => {
                    context.commit("addLoginData", error.response.data.data);
                });
        },

        register(context, payload) {
            const endpoint = "/sess/user-2.0/register.php?action=register&dump=json&src=swipeto";
            const data = new FormData();
            data.append("email", payload.email);
            data.append("password", payload.password);
            data.append("password_repeat", payload.vpassword);
            data.append("regulations", true);
            data.append("regulations_svod", true);
            data.append("g-recaptcha-response", payload.token);

            axios
                .post(endpoint, data)
                .then((response) => {
                    context.commit("addRegisterData", response.data);
                })
                .catch((error) => {
                    context.commit("addRegisterData", error.response.data.data);
                });
        },

        saveProfileData(context, payload) {
            console.log(payload);
            const endpoint = "/sess/user-2.0/account.php?action=settings&dump=json&src=swipeto";
            const data = new FormData();
            data.append("action", "chuser");
            data.append("first_name", payload.firstname);
            data.append("last_name", payload.lastname);
            data.append("phone", payload.phone);

            axios
                .post(endpoint, data)
                .then((response) => {
                    response.data.status = response.status;
                    context.commit("addProfileData", response.data);
                })
                .catch((error) => {
                    console.log(error.response.data.data);
                    error.response.data.data.status = error.response.status;
                    context.commit("addProfileData", error.response.data.data);
                });
        },

        changePassword(context, payload) {
            const endpoint = "/sess/user-2.0/account.php?action=settings&dump=json&src=swipeto";
            const data = new FormData();
            data.append("action", "chpass");
            data.append("password_current", payload.password_current);
            data.append("password", payload.password);
            data.append("password_repeat", payload.password_repeat);

            axios
                .post(endpoint, data)
                .then((response) => {
                    response.data.status = response.status;
                    context.commit("addPasswordData", response.data);
                })
                .catch((error) => {
                    console.log(error.response.data.data);
                    error.response.data.data.status = error.response.status;
                    context.commit("addPasswordData", error.response.data.data);
                });
        },

        registerConfirmation(context, hKey) {
            const endpoint =
                "/sess/user-2.0/register.php?action=postregister&h=" +
                hKey +
                "&dump=json&src=swipeto";
            axios
                .get(endpoint)
                .then((response) => {
                    context.commit("addConfirmRegisterData", response.data);
                })
                .catch((error) => {
                    context.commit("addConfirmRegisterData", error.response.data);
                });
        },

        passwordReset(context, payload) {
            const endpoint =
                "/sess/user-2.0/passwordreset.php?action=passreset&dump=json&src=swipeto";
            const data = new FormData();
            console.log("payload", payload);
            data.append("verification_code", payload.hKey);
            data.append("password", payload.password);
            data.append("password_repeat", payload.password_repeat);

            axios
                .post(endpoint, data)
                .then((response) => {
                    context.commit("addResetPassData", response.data);
                })
                .catch((error) => {
                    context.commit("addResetPassData", error.response.data);
                });
        },

        reset(context, payload) {
            const endpoint = "/sess/user-2.0/passwordreset.php?dump=json&src=swipeto";
            const data = new FormData();
            data.append("email", payload.email);
            data.append("g-recaptcha-response", payload.token);

            axios
                .post(endpoint, data)
                .then((response) => {
                    context.commit("addResetData", response.data);
                })
                .catch((error) => {
                    context.commit("addResetData", error.response.data.data);
                });
        },

        logout(context) {
            const endpoint = "/sess/user-2.0/login.php?action=logout&dump=json&src=swipeto";

            axios.get(endpoint).then((response) => {
                context.commit("addUserData", response.data);
            });
        },

        userinfo(context) {
            const endpoint = "/sess/user-2.0/profile.php?dump=json&src=swipeto";
            axios.defaults.headers = {
                "Cache-Control": "no-cache",
                Pragma: "no-cache",
                Expires: "0",
            };
            axios
                .post(endpoint)
                .then((response) => {
                    if (response.status == 200 && response.data !== "null") {
                        context.commit("addUserData", response.data);
                    } else {
                        console.log("Brak danych");
                    }
                })
                .catch((error) => {
                    console.log(
                        `Wystąpił błąd: ${error.response.status} (${error.response.statusText})`
                    );
                });
        },
        globalUserData(context) {
            const endpoint = "/api/account/user-application-data?devl13=1";
            const data = new FormData();
            data.append("src", "swipeto");
            axios
                .post(endpoint, data)
                .then((response) => {
                    if (response.status == 200 && response.data !== "null") {
                        context.commit("addGlobalUserData", response.data.data);
                    } else {
                        console.log("Brak danych");
                    }
                })
                .catch((error) => {
                    console.log(
                        `Wystąpił błąd: ${error.response.status} (${error.response.statusText})`
                    );
                });
        },
        getPages(context, payload) {
            let endpoint = null;
            if (payload === "privacy-policy") {
                endpoint = "/api/swipeto/page/privacy-policy?device=www";
            } else if (payload === "rules") {
                endpoint = "/api/swipeto/page/regulations?device=www";
            } else if (payload === "faq") {
                endpoint = "/api/swipeto/page/faq?device=www";
            } else if (payload === "job") {
                endpoint = "/api/swipeto/job-offer/list?device=www";
            }

            axios
                .get(endpoint)
                .then((response) => {
                    if (response.status == 200 && response.data !== "null") {
                        context.commit("addPagesData", response.data.data);
                    } else {
                        console.log("Brak danych");
                    }
                })
                .catch((error) => {
                    console.log(
                        `Wystąpił błąd: ${error.response.status} (${error.response.statusText})`
                    );
                });
        },
        sendContact(context, payload) {
            const endpoint = "/api/swipeto/contact/send?device=www";
            var data = {
                first_name: payload.first_name,
                last_name: payload.last_name,
                email: payload.email,
                phone: payload.phone,
                subject: payload.subject,
                message: payload.message,
            };

            axios.defaults.headers = {
                "Content-Type": "application/x-www-form-urlencoded",
            };

            axios
                .post(endpoint, qs.stringify(data))
                .then((response) => {
                    context.commit("addContactData", response.data);
                })
                .catch((error) => {
                    context.commit("addContactData", error.response.data.data);
                });
        },
    },
    modules: {},
    getters: {
        isWebview(state) {
            return state.webview;
        },

        isLightMode(state) {
            return state.lightMode;
        },

        isSearch(state) {
            return state.isSearch;
        },

        getPlayerData(state) {
            return state.playerData;
        },

        getDropmenuCategories(state) {
            return state.dropmenuCategories;
        },

        getSectionsData(state) {
            return state.sectionsData;
        },

        getNewsData: (state) => {
            return state.newsData;
        },

        getLazyBlocksData(state) {
            return state.lazyBlocksData;
        },

        getLazyBtnMore(state) {
            return state.LazyBtnMore;
        },

        getLazyLoading(state) {
            return state.lazyLoading;
        },

        getArticlesData(state) {
            return state.articlesData;
        },

        getEditorsData(state) {
            return state.editorsData;
        },

        getRegisterData(state) {
            return state.registerData;
        },

        getLoginData(state) {
            return state.loginData;
        },

        getContactData(state) {
            return state.contactData;
        },

        getResetData(state) {
            return state.resetData;
        },

        getUserData(state) {
            return state.userData;
        },

        getProfileData(state) {
            return state.profileData;
        },

        getPasswordData(state) {
            return state.passwordData;
        },

        getConfirmRegisterData(state) {
            return state.confirmRegisterData;
        },

        getResetPassData(state) {
            return state.resetPassData;
        },
        getPagesData(state) {
            return state.pagesData;
        },
        getGlobalUserData(state) {
            return state.globalUserData;
        },
    },
});
