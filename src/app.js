import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router";
import App from "./components/App";
import Sobre from "./components/Sobre";
import Armaduras from "./components/Armaduras";
import Armas from "./components/Armas";
import Decoracoes from "./components/Decoracoes";
import DetalheMonstro from "./components/DetalheMonstro";
import Habilidades from "./components/Habilidades";
import Itens from "./components/Itens";
import Mapas from "./components/Mapas";
import Monstros from "./components/Monstros";
import Quests from "./components/Quests";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", component: App },
        { path: "/sobre", component: Sobre },
        { path: "/armaduras", component: Armaduras },
        { path: "/armas", component: Armas },
        { path: "/decoracoes", component: Decoracoes },
        { path: "/detalheMonstro", name: 'DetalheMonstro', component: DetalheMonstro, props: true },
        { path: "/habilidades", component: Habilidades },
        { path: "/itens", component: Itens },
        { path: "/mapas", name: 'Mapas', component: Mapas },
        { path: "/monstros", name: 'Monstros', component: Monstros },
        { path: "/quests", component: Quests }
    ]
})

new Vue({ router }).$mount("#app");
