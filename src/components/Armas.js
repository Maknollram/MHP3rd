export default {
    name: "Armas",
    template: `
        <div>
            <section class="container coluna center">
                <div class="container row-wrap center" >
                    <div v-for="m in menu">
                        <router-link v-bind:to="m.caminho" v-bind:title="m.nome"><img class="tamanhoImgMenu" v-bind:src="m.icone"/></router-link>
                    </div>
                </div>
                <label class="fonte30 nomeMonstro">Armas</label>
            </section>
            <section class="container row-wrap">
                <div v-for="arma in armas" class="item fake-link nomeMonstro"><img class="tamanhoArmas" v-bind:src="arma.icone"/></div>
            </section>
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
            armas:[
                {nome: 'Arco', sigla: 'Bow', icone: './src/imgs/itens/icon_bow.png'},
                {nome: 'Besta Leve', sigla: 'LBG', icone: './src/imgs/itens/icon_light_bowgun.png'},
                {nome: 'Besta Pesada', sigla: 'HBG', icone: './src/imgs/itens/icon_heavy_bowgun.png'},
                {nome: 'Corneta de Caça', sigla: 'HH', icone: './src/imgs/itens/icon_hunting_horn.png'},
                {nome: 'Duas Espadas', sigla: 'DB', icone: './src/imgs/itens/icon_dual_blades.png'},
                {nome: 'Espada e Escudo', sigla: 'SNS', icone: './src/imgs/itens/icon_sword_and_shield.png'},
                {nome: 'Espada longa', sigla: 'LS', icone: './src/imgs/itens/icon_long_sword.png'},
                {nome: 'Espada Pesada', sigla: 'GS', icone: './src/imgs/itens/icon_great_sword.png'},
                {nome: 'Lança', sigla: 'LNC', icone: './src/imgs/itens/icon_lance.png'},
                {nome: 'Lança Atiradora', sigla: 'GLNC', icone: './src/imgs/itens/icon_gunlance.png'},
                {nome: 'Machado Mutador', sigla: 'SA', icone: './src/imgs/itens/icon_switch_axe.png'},
                {nome: 'Martelo', sigla: 'HM', icone: './src/imgs/itens/icon_hammer.png'},
            ]
        }
    },
    watch:{
        
    },
    computed:{
        
    },
    methods:{

    }
}
