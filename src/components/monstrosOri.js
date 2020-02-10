export default {
    name: "Monstros",
    template: `
        <div>
            <section class="container coluna center">
                <div class="container row-wrap center" >
                    <div v-for="m in menu">
                        <router-link v-bind:to="m.caminho" v-bind:title="m.nome"><img class="tamanhoImgMenu" v-bind:src="m.icone"/></router-link>
                    </div>
                </div>
                <label class="fonte30 nomeMonstro">Monstros</label>
            </section>
            <section class="container row-wrap">
                <div class="item fake-link nomeMonstro" v-on:click="tipoMonstro = true">Grandes</div>
                <div class="item fake-link nomeMonstro" v-on:click="tipoMonstro = false">Pequenos</div>
            </section>
            <div>
                <div class="container row-wrap" v-if="tipoMonstro">
                    <div class="itemMonstro" v-for="grande in monstrosGrandes">
                        <div class="legendaImagem">
                            <router-link class="fake-link-monstros" v-bind:to="{ name: 'DetalheMonstro', params: { monstro: grande }}">    
                                <img class="tamanhoDetalheMonstros" v-bind:src="grande.icone"/>
                                <div class="legenda">
                                    <label class="fake-link-monstros nomeMonstro">{{grande.nome}}</label>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="container row-wrap" v-else>
                    <div class="itemMonstro" v-for="pequeno in monstrosPequenos">
                        <div class="legendaImagem">
                            <router-link class="fake-link-monstros" v-bind:to="{ name: 'DetalheMonstro', params: { monstro: pequeno }}">    
                                <img class="tamanhoDetalheMonstros" v-bind:src="pequeno.icone"/>
                                <div class="legenda">
                                    <label class="fake-link-monstros nomeMonstro">{{pequeno.nome}}</label>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    `,
    props:[
        
    ],
    data(){
        return {
            menu:[
                {nome: 'Página Inicial', icone: './src/imgs/itens/boomerang.png', caminho: '/'},
                {nome: 'Armaduras', icone: './src/imgs/itens/icon_armor_body.png', caminho: '/armaduras'},
                {nome: 'Armas', icone: './src/imgs/itens/icon_long_sword.png', caminho: '/armas'},
                {nome: 'Decorações', icone: './src/imgs/itens/decoracoes.png', caminho: '/decoracoes'},
                {nome: 'Habilidades', icone: './src/imgs/itens/habilidades.png', caminho: '/habilidades'},
                {nome: 'Itens', icone: './src/imgs/itens/itens.png', caminho: '/itens'},
                {nome: 'Mapas', icone: './src/imgs/itens/icon_map_icon.png', caminho: '/mapas'},
                {nome: 'Monstros', icone: './src/imgs/itens/monstros.png', caminho: '/monstros'},
                {nome: 'Quests', icone: './src/imgs/itens/quests.png', caminho: '/quests'}
            ],
            monstrosGrandes:[
                {nome: 'Agnaktor', icone: './src/imgs/monstros/grandes/agnaktor.png', caminho: '/detalheMonstro',
                    tipo:['Com Lava Endurecida','Normal'],
                    habitat:['Volcano'],
                    itensUsaveis:['pitfall','shock', 'flash', 'sonic'],
                    dano:{
                        corte:{
                            cabeca: 15,
                            pescoco: 15,
                            peito: 15,
                            corpo: 15,
                            barbatana: 15,
                            pernasDianteiras: 15,
                            pernasTraseiras: 15,
                            cauda: 20,
                        },
                        impacto:{
                            cabeca: 15,
                            pescoco: 15,
                            peito: 15,
                            corpo: 15,
                            barbatana: 15,
                            pernasDianteiras: 15,
                            pernasTraseiras: 15,
                            cauda: 24,
                        },
                        flechas:{
                            cabeca: 15,
                            pescoco: 15,
                            peito: 15,
                            corpo: 15,
                            barbatana: 15,
                            pernasDianteiras: 15,
                            pernasTraseiras: 15,
                            cauda: 20,
                        },
                        tonteira: 100
                    },
                    danoFurioso:{
                        corte:{
                            cabeca: 55,
                            pescoco: 40,
                            peito: 50,
                            corpo: 40,
                            barbatana: 20,
                            pernasDianteiras: 35,
                            pernasTraseiras: 35,
                            cauda: 35,
                        },
                        impacto:{
                            cabeca: 60,
                            pescoco: 35,
                            peito: 45,
                            corpo: 44,
                            barbatana: 24,
                            pernasDianteiras: 35,
                            pernasTraseiras: 35,
                            cauda: 30,
                        },
                        flechas:{
                            cabeca: 50,
                            pescoco: 30,
                            peito: 45,
                            corpo: 35,
                            barbatana: 20,
                            pernasDianteiras: 35,
                            pernasTraseiras: 35,
                            cauda: 25,
                        },
                        tonteira: 100
                    },
                    elemental:{
                        fogo:{
                            cabeca: 10,
                            pescoco: 10,
                            peito: 10,
                            corpo: 10,
                            barbatana: 5,
                            pernasDianteiras: 10,
                            pernasTraseiras: 10,
                            cauda: 10,
                        },
                        agua:{
                            cabeca: 30,
                            pescoco: 15,
                            peito: 25,
                            corpo: 20,
                            barbatana: 15,
                            pernasDianteiras: 20,
                            pernasTraseiras: 20,
                            cauda: 20,
                        },
                        gelo:{
                            cabeca: 25,
                            pescoco: 15,
                            peito: 20,
                            corpo: 20,
                            barbatana: 10,
                            pernasDianteiras: 15,
                            pernasTraseiras: 15,
                            cauda: 15,
                        },
                        trovao:{
                            cabeca: 15,
                            pescoco: 0,
                            peito: 10,
                            corpo: 0,
                            barbatana: 10,
                            pernasDianteiras: 0,
                            pernasTraseiras: 0,
                            cauda: 5,
                        },
                        dragao:{
                            cabeca: 0,
                            pescoco: 0,
                            peito: 0,
                            corpo: 0,
                            barbatana: 20,
                            pernasDianteiras: 0,
                            pernasTraseiras: 0,
                            cauda: 0,
                        }
                    },
                    elementalFurioso:{
                        fogo:{
                            cabeca: 0,
                            pescoco: 0,
                            peito: 0,
                            corpo: 0,
                            barbatana: 5,
                            pernasDianteiras: 0,
                            pernasTraseiras: 0,
                            cauda: 0,
                        },
                        agua:{
                            cabeca: 30,
                            pescoco: 15,
                            peito: 25,
                            corpo: 20,
                            barbatana: 15,
                            pernasDianteiras: 20,
                            pernasTraseiras: 20,
                            cauda: 20,
                        },
                        gelo:{
                            cabeca: 20,
                            pescoco: 15,
                            peito: 20,
                            corpo: 15,
                            barbatana: 10,
                            pernasDianteiras: 15,
                            pernasTraseiras: 15,
                            cauda: 15,
                        },
                        trovao:{
                            cabeca: 25,
                            pescoco: 10,
                            peito: 20,
                            corpo: 10,
                            barbatana: 10,
                            pernasDianteiras: 10,
                            pernasTraseiras: 10,
                            cauda: 15,
                        },
                        dragao:{
                            cabeca: 35,
                            pescoco: 20,
                            peito: 30,
                            corpo: 30,
                            barbatana: 20,
                            pernasDianteiras: 25,
                            pernasTraseiras: 25,
                            cauda: 25,
                        }
                    }
                },
                {nome: 'Glacial Agnaktor', icone: './src/imgs/monstros/grandes/glacialAgnaktor.png', caminho: '/armaduras'},
                {nome: 'Akantor', icone: './src/imgs/monstros/grandes/akantor.png', caminho: '/armaduras'},
                {nome: 'Alatreon', icone: './src/imgs/monstros/grandes/alatreon.png', caminho: '/armaduras'},
                {nome: 'Amatsu', icone: './src/imgs/monstros/grandes/amatsu.png', caminho: '/armaduras'},
                {nome: 'Arzuros', icone: './src/imgs/monstros/grandes/arzuros.png', caminho: '/armaduras'},
                {nome: 'Barioth', icone: './src/imgs/monstros/grandes/barioth.png', caminho: '/armaduras'},
                {nome: 'Sand Barioth', icone: './src/imgs/monstros/grandes/sandBarioth.png', caminho: '/armaduras'},
                {nome: 'Barroth', icone: './src/imgs/monstros/grandes/barroth.png', caminho: '/armaduras'},
                {nome: 'Jade Barroth', icone: './src/imgs/monstros/grandes/jadeBarroth.png', caminho: '/armaduras'},
                {nome: 'Bulldrome', icone: './src/imgs/monstros/grandes/bulldrome.png', caminho: '/armaduras'},
                {nome: 'Deviljho', icone: './src/imgs/monstros/grandes/devilJho.png', caminho: '/armaduras'},
                {nome: 'Diablos', icone: './src/imgs/monstros/grandes/diablos.png', caminho: '/armaduras'},
                {nome: 'Black Diablos', icone: './src/imgs/monstros/grandes/blackDiablos.png', caminho: '/armaduras'},
                {nome: 'Duramboros', icone: './src/imgs/monstros/grandes/duramboros.png', caminho: '/armaduras'},
                {nome: 'Gigginox', icone: './src/imgs/monstros/grandes/gigginox.png', caminho: '/armaduras'},
                {nome: 'Baleful Gigginox', icone: './src/imgs/monstros/grandes/balefulGigginox.png', caminho: '/armaduras'},
                {nome: 'Great Baggi', icone: './src/imgs/monstros/grandes/greatBaggi.png', caminho: '/armaduras'},
                {nome: 'Great Jaggi', icone: './src/imgs/monstros/grandes/greatJaggi.png', caminho: '/armaduras'},
                {nome: 'Great Wroggi', icone: './src/imgs/monstros/grandes/greatWroggi.png', caminho: '/armaduras'},
                {nome: 'Jhen Mohran', icone: './src/imgs/monstros/grandes/jhenMohran.png', caminho: '/armaduras'},
                {nome: 'Lagombi', icone: './src/imgs/monstros/grandes/lagombi.png', caminho: '/armaduras'},
                {nome: 'Nargacuga', icone: './src/imgs/monstros/grandes/nargacuga.png', caminho: '/armaduras'},
                {nome: 'Green Nargacuga', icone: './src/imgs/monstros/grandes/greenNargacuga.png', caminho: '/armaduras'},
                {nome: 'Nibelsnarf', icone: './src/imgs/monstros/grandes/nibelsnarf.png', caminho: '/armaduras'},
                {nome: 'Qurupeco', icone: './src/imgs/monstros/grandes/qurupeco.png', caminho: '/armaduras'},
                {nome: 'Crimson Qurupeco', icone: './src/imgs/monstros/grandes/crimsonQurupeco.png', caminho: '/armaduras'},
                {nome: 'Rathalos', icone: './src/imgs/monstros/grandes/rathalos.png', caminho: '/armaduras'},
                {nome: 'Silver Rathalos', icone: './src/imgs/monstros/grandes/silverRathalos.png', caminho: '/armaduras'},
                {nome: 'Rathian', icone: './src/imgs/monstros/grandes/rathian.png', caminho: '/armaduras'},
                {nome: 'Gold Rathian', icone: './src/imgs/monstros/grandes/goldRathian.png', caminho: '/armaduras'},
                {nome: 'Royal Ludroth', icone: './src/imgs/monstros/grandes/royalLudroth.png', caminho: '/armaduras'},
                {nome: 'Purple Ludroth', icone: './src/imgs/monstros/grandes/purpleRoyalLudroth.png', caminho: '/armaduras'},
                {nome: 'Tigrex', icone: './src/imgs/monstros/grandes/tigrex.png', caminho: '/armaduras'},
                {nome: 'Brute Tigrex', icone: './src/imgs/monstros/grandes/bruteTigrex.png', caminho: '/armaduras'},
                {nome: 'Ukanlos', icone: './src/imgs/monstros/grandes/ukanlos.png', caminho: '/armaduras'},
                {nome: 'Uragaan', icone: './src/imgs/monstros/grandes/uragaan.png', caminho: '/armaduras'},
                {nome: 'Steel Uragaan', icone: './src/imgs/monstros/grandes/steelUragaan.png', caminho: '/armaduras'},
                {nome: 'Volvidon', icone: './src/imgs/monstros/grandes/volvidon.png', caminho: '/armaduras'},
                {nome: 'Zinogre', icone: './src/imgs/monstros/grandes/zinogre.png', caminho: '/armaduras'}
            ],
            monstrosPequenos:[
                {nome: 'Altaroth', icone: './src/imgs/monstros/pequenos/altaroth.png', caminho: '/armaduras'},
                {nome: 'Anteka', icone: './src/imgs/monstros/pequenos/anteka.png', caminho: '/armaduras'},
                {nome: 'Aptonoth', icone: './src/imgs/monstros/pequenos/aptonoth.png', caminho: '/armaduras'},
                {nome: 'Baggi', icone: './src/imgs/monstros/pequenos/baggi.png', caminho: '/armaduras'},
                {nome: 'Bnahabra', icone: './src/imgs/monstros/pequenos/bnahabra.png', caminho: '/armaduras'},
                {nome: 'Bullfango', icone: './src/imgs/monstros/pequenos/bullfango.png', caminho: '/armaduras'},
                {nome: 'Delex', icone: './src/imgs/monstros/pequenos/delex.png', caminho: '/armaduras'},
                {nome: 'Felyne', icone: './src/imgs/monstros/pequenos/felyne.png', caminho: '/armaduras'},
                {nome: 'Gargwa', icone: './src/imgs/monstros/pequenos/gargwa.png', caminho: '/armaduras'},
                {nome: 'Giggi', icone: './src/imgs/monstros/pequenos/giggi.png', caminho: '/armaduras'},
                {nome: 'Jaggi', icone: './src/imgs/monstros/pequenos/jaggi.png', caminho: '/armaduras'},
                {nome: 'Jaggia', icone: './src/imgs/monstros/pequenos/jaggia.png', caminho: '/armaduras'},
                {nome: 'Kelbi', icone: './src/imgs/monstros/pequenos/kelbi.png', caminho: '/armaduras'},
                {nome: 'Ludroth', icone: './src/imgs/monstros/pequenos/ludroth.png', caminho: '/armaduras'},
                {nome: 'Melynx', icone: './src/imgs/monstros/pequenos/melynx.png', caminho: '/armaduras'},
                {nome: 'Popo', icone: './src/imgs/monstros/pequenos/popo.png', caminho: '/armaduras'},
                {nome: 'Rhenoplos', icone: './src/imgs/monstros/pequenos/rhenoplos.png', caminho: '/armaduras'},
                {nome: 'Slagtoth', icone: './src/imgs/monstros/pequenos/slagtoth.png', caminho: '/armaduras'},
                {nome: 'Uroktor', icone: './src/imgs/monstros/pequenos/uroktor.png', caminho: '/armaduras'},
                {nome: 'Wroggi', icone: './src/imgs/monstros/pequenos/wroggi.png', caminho: '/armaduras'}
            ],
            tipoMonstro: true
        }
    },
    watch:{
        
    },
    computed:{
        
    },
    methods:{

    }
}
