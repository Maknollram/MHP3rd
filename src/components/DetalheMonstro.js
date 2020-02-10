import Menu from "./Menu";
export default {
    name: "DetalheMonstro",
    components:{
        Menu
    },
    template: `
        <div>
            <section class="container coluna center">
                <div class="container row-wrap center" >
                    <div v-for="m in menu">
                        <router-link v-bind:to="m.caminho" v-bind:title="m.nome"><img class="tamanhoImgMenu" v-bind:src="m.icone"/></router-link>
                    </div>
                </div>
            </section>
            <menu></menu>
            <section class="container coluna center">
                <img class="detalheItem tamanhoDetalheMonstros" v-bind:src="objetoMonstro.icone"/>
                <h1 class="fonte25 detalheItem nomeMonstro">{{objetoMonstro.nome}}</h1>
            </section>
            <section class="container row-wrap">
                <div class="item fake-link nomeMonstro" v-bind:style="subMenu == 'fraqueza' ? 'color: rgb(220, 253, 74);' : 'color: white;'" v-on:click="subMenu = 'fraqueza'">Fraquezas</div>
                <div class="item fake-link nomeMonstro" v-bind:style="subMenu == 'item' ? 'color: rgb(220, 253, 74);' : 'color: white;'" v-on:click="subMenu = 'item'">Itens</div>
                <div class="item fake-link nomeMonstro" v-bind:style="subMenu == 'quest' ? 'color: rgb(220, 253, 74);' : 'color: white;'" v-on:click="subMenu = 'quest'">Quests</div>
            </section>
            <section v-show="subMenu == 'fraqueza'">
                <div class="itemDetalhe">Habitat</div>
                <div class="container row-wrap">
                    <div class="itemSemCor" v-for="habitat in objetoMonstro.habitat">{{habitat.nome}}</div>
                </div>
                <div class="itemDetalhe">Fraqueza a status negativos</div>
                <div class="container coluna">
                    <div class="container row-wrap">
                        <div class="itemSemCor" v-for="status in objetoMonstro.status">   
                            <img class="tamanhoImgMenu" v-bind:src="statusParaIcone(status.nome)" v-bind:title="status.nome"/>
                            <div class="itemSemCor">{{status.nome}}</div>
                        </div>
                    </div>
                </div>
                <div class="itemDetalhe">Items usáveis</div>
                <div class="container coluna">
                    <div class="container row-wrap">
                        <div class="itemSemCor" v-for="itens in objetoMonstro.itensUsaveis" >   
                            <img class="tamanhoImgMenu" v-bind:src="itensUsaveisParaIcone(itens.nome)"/>
                            <div class="itemSemCor">{{itens.nome  + ' ' + itens.tipo}}</div>
                        </div>
                    </div>
                </div>
                <div class="itemDetalhe">Inflinge</div>
                <div class="container row-wrap">
                    <div class="itemSemCor" v-for="inflinge in objetoMonstro.inflinge" >   
                        <img class="tamanhoImgMenu" v-bind:src="inflingeParaIcone(inflinge.nome)" v-bind:title="inflinge.nome"/>
                        <div class="itemSemCor">{{inflinge.nome}}</div>
                    </div>
                </div>
                <div class="itemDetalhe">Áreas de dano</div>
                <div class="container">
                    <img class="imgDano" v-bind:src="objetoMonstro.imgDano"/>
                </div>
                <div class="itemDetalhe">Dano</div>
                <div class="subItemDetalhe">{{modo.normal}}</div>
                <div class="container">
                    <div class="itemSemCor" v-for="dano in danos">{{dano}}</div>
                </div>
                <div class="container row-wrap">
                    <div class="itemSemCor2" v-for="normal in danoNormal.normal">   
                        <div v-for="nor in normal">{{nor.nome}}</div>
                    </div>
                </div>
                <div class="subItemDetalhe">{{modo.furioso}}</div>
                <div class="container">
                    <div class="itemSemCor" v-for="dano in danos">{{dano}}</div>
                </div>
                <div class="container row-wrap">
                    <div class="itemSemCor2" v-for="furioso in danoNormal.furioso">   
                        <div v-for=" furi in furioso">{{furi.nome}}</div>
                    </div>
                </div>
                <div class="itemDetalhe">Dano Elemental</div>
                <div class="subItemDetalhe">{{modo.normal}}</div>
                <div class="container coluna">
                    <div class="container row-wrap">
                        <div class="itemSemCor" v-for="elemental in danosElementais">   
                            <img class="tamanhoImgMenu" v-bind:src="elemental"/>
                        </div>
                    </div>
                </div>
                <div class="container row-wrap">
                    <div class="itemSemCor2" v-for="elemental in danoElemental.normal">   
                        <div v-for="elem in elemental">{{elem.nome}}</div>
                    </div>
                </div>
                <div class="subItemDetalhe">{{modo.furioso}}</div>
                <div class="container coluna">
                    <div class="container row-wrap">
                        <div class="itemSemCor" v-for="elemental in danosElementais">   
                            <img class="tamanhoImgMenu" v-bind:src="elemental"/>
                        </div>
                    </div>
                </div>
                <div class="container row-wrap">
                    <div class="itemSemCor2" v-for="elemental in danoElemental.furioso">   
                        <div v-for="elem in elemental">{{elem.nome}}</div>
                    </div>
                </div>
            </section>
            <section v-show="subMenu == 'item'">
                <div class="container">
                    <div class="itemDetalhe" v-for="dificuldade in dificuldade">{{dificuldade}}</div>
                </div>
                <div class="container">
                    <div class="itemDetalheDrop">
                        <div class="bordaInferior" v-for="low in itens.lowRank">{{low.nome}}</div>
                    </div>
                    <div class="itemDetalheDrop">
                        <div class="bordaInferior" v-for="high in itens.highRank">{{high.nome}}</div>
                    </div>
                </div>
            </section>
            <section v-show="subMenu == 'quest'">
                <div class="container">
                    <div class="itemDetalhe">Vila</div>
                </div>
                <div class="container coluna">
                    <div v-for="vila in quests.vila">
                        <div v-for="vil in vila.nome">
                            <img class="estrelaVermelha" v-for="estrela in getListaEstrelas(vila.estrelas)" v-bind:src="iconeQuests">{{vil}}
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="itemDetalhe">Guilda</div>
                </div>
                <div class="container coluna">
                    <div v-for="guilda in quests.guilda">
                        <div v-for="guild in guilda.nome">
                            <img class="estrelaVermelha" v-for="estrela in getListaEstrelas(guilda.estrelas)" v-bind:src="iconeQuests">{{guild}}
                        </div>
                    </div>
                </div>
                <div v-show="quests.dlc != []">
                    <div class="container">
                        <div class="itemDetalhe">DLC</div>
                    </div>
                    <div class="container coluna">
                        <div v-for="dlc in quests.dlc">
                            <div v-for="dl in dlc.nome">
                                <img class="estrelaVermelha" v-for="estrela in getListaEstrelas(dlc.estrelas)" v-bind:src="iconeQuests">{{dl}}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </br>
            </br>
        </div>
    `,
    props:[
        'monstro'
    ],
    data(){
        return {
            modo:{},
            danoNormal:{},
            danoElemental:{},
            itens:{},
            quests:{},
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
            objetoMonstro: 'Monstro',
            subMenu: 'fraqueza',
            itemMenu: 'lowRank',
            danos: ['Corte', 'Impacto', 'Flecha'],
            danosElementais:[
                './src/imgs/estados/fireblight.png', 
                './src/imgs/estados/waterblight.png', 
                './src/imgs/estados/iceblight.png', 
                './src/imgs/estados/thunderblight.png', 
                './src/imgs/estados/dragonblight.png'
            ],
            dificuldade:['Low Rank', 'High Rank'],
            iconeQuests: './src/imgs/itens/estrelaVermelha.png',
            itensUsaveis:[
                {nome: 'Pitfall', tipo:'Trap', icone: './src/imgs/itens/Trap-Green.png'},
                {nome: 'Shock', tipo:'Trap', icone: './src/imgs/itens/Trap-Purple.png'},
                {nome: 'Flash', tipo:'Bomb', icone: './src/imgs/itens/Bomb-Yellow.png'},
                {nome: 'Sonic', tipo:'Bomb', icone: './src/imgs/itens/Bomb-Grey.png'}
            ],
            status:[
                {nome: 'Paralisia', icone: './src/imgs/estados/paralisia.png'},
                {nome: 'Sono', icone: './src/imgs/estados/sono.png'},
                {nome: 'Tontura', icone: './src/imgs/estados/tontura.png'},
                {nome: 'Veneno', icone: './src/imgs/estados/veneno.png'}
            ],
            inflinge:[
                {nome: 'Dragonblight', icone: './src/imgs/estados/dragonblight.png'},
                {nome: 'Fireblight', icone: './src/imgs/estados/fireblight.png'},
                {nome: 'Iceblight', icone: './src/imgs/estados/iceblight.png'},
                {nome: 'Thunderblight', icone: './src/imgs/estados/thunderblight.png'},
                {nome: 'Waterblight', icone: './src/imgs/estados/waterblight.png'},
                {nome: 'Waterblight Severo', icone: './src/imgs/estados/waterblightSevero.png'},
                {nome: 'Tremor', icone: './src/imgs/estados/tremor.png'},
                {nome: 'Rugido Baixo', icone: './src/imgs/estados/rugido.png'},
                {nome: 'Rugido Alto', icone: './src/imgs/estados/rugido.png'}
            ],
            outroModoItens: `<section v-show="subMenu == 'item'">
                                <section class="container row-wrap">
                                    <div class="itemDetalhe">Low Rank</div>
                                </section>
                                <div class="container row-wrap">
                                        <div class="itemSemCor2 itens" v-for="low in itens.lowRank">{{low.nome}}</div>
                                </div>
                                <section class="container row-wrap">
                                    <div class="itemDetalhe">High Rank</div>
                                </section>
                                <div class="container row-wrap">
                                        <div class="itemSemCor2 itens" v-for="high in itens.highRank">{{high.nome}}</div>
                                </div>
                            </section>'`
        }
    },
    mounted(){
        if(this.monstro){
            this.objetoMonstro = this.monstro
            this.modo = this.objetoMonstro.modo
            this.danoNormal = this.objetoMonstro.dano
            this.danoElemental = this.objetoMonstro.elemental
            this.itens = this.objetoMonstro.itens
            this.quests = this.objetoMonstro.quests
            this.ordenador()
        }
    },
    watch:{
        
    },
    computed:{
        
    },
    methods:{
        itensUsaveisParaIcone(tipo){
            let icone = ''
            this.itensUsaveis.forEach((item, index) =>{
                if(item.nome == tipo){
                    
                    icone =  item.icone

                    this.objetoMonstro.itensUsaveis[index].tipo = item.tipo

                }
            })
            return icone
        },
        statusParaIcone(tipo){
            let icone = ''
            this.status.forEach(item =>{
                if(item.nome == tipo){
                    
                    icone =  item.icone
                }
            })
            return icone
        },
        inflingeParaIcone(tipo){
            let icone = ''
            this.inflinge.forEach(item =>{
                if(item.nome == tipo){
                    
                    icone =  item.icone
                }
            })
            return icone
        },
        ordenador(){
            let high = this.itens.highRank
            let low = this.itens.lowRank
            high = high.sort(this.comparador)
            low = low.sort(this.comparador)
            this.itens = {}
            this.itens['lowRank'] = low
            this.itens['highRank'] = high
        },
        comparador(a, b){
            const nomeA = a.nome.toUpperCase();
            const nomeB = b.nome.toUpperCase();

            if (nomeA > nomeB) {
                return 1;
            } 
            if (nomeA < nomeB) {
                return -1;
            }
            return 0;
        },
        getListaEstrelas(estrelas){
            return Array(estrelas).fill().map( (e, index)=> index+1)
        }
    }
}
